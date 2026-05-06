---
hide:
    - toc 
    - navigation
title: Generic Stack 
---
## 导言

在这个项目中，你将实现一个**高性能并发词频统计工具**。它能够并行处理多个文本文件（或整个目录），统计其中每个单词出现的次数，并按频率降序输出。你将用到现代 C++ 的核心特性：`std::thread`、`std::async`、线程池、`std::filesystem`、智能指针、容器和算法。

## 开始之前

### 下载框架代码

我们将提供一个压缩包 `concurrent_word_counter.zip`，解压后得到如下结构：

```
concurrent_word_counter/
├── Makefile                 # 编译配置
├── unlock.py                # 解锁脚本（交互式测验）
├── tests/                   # Google Test 单元测试（编译后运行）
├── src/
│   ├── utils.h              # 辅助函数声明（已实现，可读）
│   ├── utils.cpp            # 辅助函数实现（已实现）
│   ├── counter.h            # 词频统计相关声明
│   ├── counter.cpp          # 你需要填充的 TODO
│   ├── thread_pool.h        # 线程池声明
│   ├── thread_pool.cpp      # 你需要填充的 TODO
│   └── main.cpp             # 主程序入口（已有框架）
└── data/                    # 测试文本目录（你可以自己添加文件）
```

你**只需要修改** `counter.cpp` 和 `thread_pool.cpp` 中的 `TODO` 部分。其他文件已提供完整实现，但鼓励你阅读理解。

### 环境要求

- C++17 编译器（g++ 7+ 或 clang 5+）
- CMake 3.10+（可选，我们提供了 Makefile）
- Python 3（用于运行解锁脚本）

编译命令：
```bash
make
```
运行单元测试：
```bash
make test
```
运行主程序：
```bash
./cwc data/sample.txt
```

---

## 功能需求

我们的工具最终要实现：

- **输入**：支持多个文件/目录路径（例如 `./cwc file1.txt dir1/ file2.txt`）。目录会递归查找所有 `.txt` 文件。
- **处理**：对每个文件单独统计词频（局部 `unordered_map<string, int>`），然后将所有局部结果合并到全局 map。
- **输出**：输出所有单词按频率降序排列（频率相同按字母升序），同时显示总单词数、唯一词数和总耗时（秒）。
- **高级特性**（可选）：停用词过滤、最小词频阈值、输出 JSON 格式、进度条等。

核心难点在于**并发控制**（顺序版本 → `std::async` → 线程池）和**线程安全合并**。

---

## 问题列表

我们将项目分解为 **11 个独立的问题**（P0 ~ P10）。每个问题都有：

- **描述**：你要实现什么。
- **理解测验**：运行 `python3 unlock.py Px` 回答选择题，验证你对需求的理解。
- **编码任务**：修改指定的文件（通常是 `counter.cpp` 或 `thread_pool.cpp` 中的 `TODO` 区域）。
- **验证**：运行 `make test` 或特定测试命令检查正确性。

请**按顺序**完成，后续问题可能依赖前面实现的函数。

---

### Problem 0 : 熟悉辅助函数 

> 此问题不要求写代码，只是阅读和理解。

在 `utils.h/cpp` 中已经实现了两个辅助函数：

- `std::string normalizeWord(const std::string& raw)`：将单词转为小写，去掉首尾非字母数字字符（例如 `"Hello!"` → `"hello"`）。
- 计时器类 `Timer`：RAII 风格，析构时自动打印耗时。

请阅读这些代码，保证你明白它们的作用。后续你会用到 `normalizeWord`。

**理解测验**：
```bash
python3 unlock.py 0
```
（测验会问：`normalizeWord("C++11")` 应返回什么？等等）

---

### Problem 1 : 单文件词频统计 

实现 `countInFile` 函数（位于 `counter.cpp`）。

**函数签名**：
```cpp
std::unordered_map<std::string, int> countInFile(const std::string& filename);
```
- 打开文件（`std::ifstream`），若失败则抛出 `std::runtime_error`。
- 逐行读取，对每一行使用 `std::istringstream` 按空白字符分割单词。
- 对每个单词调用 `normalizeWord`，若结果非空，则在局部 map 中递增计数。
- 返回局部 map。

**注意**：不要在这里加锁或合并，只返回该文件的统计结果。

**理解测验**：
```bash
python3 unlock.py 1
```

**编码**：在 `counter.cpp` 中找到 `// TODO(P1)` 并实现。

**验证**：
```bash
make test
```
（测试会单独运行 `countInFile` 并检查结果）

---

### Problem 2 : 顺序版本的主循环 

在 `main.cpp` 中已经有一个 `main` 函数框架。你需要实现顺序版本的处理流程（当命令行参数 `--sequential` 存在时，或作为默认行为）。

目前 `main.cpp` 中有一段注释 `// TODO(P2): sequential processing`。你需要：

- 遍历输入的所有文件。
- 对每个文件调用 `countInFile`，获得局部 map。
- 将局部 map 合并到全局 map。

合并时注意**线程安全**：由于顺序版本只有主线程，你可以不加锁直接合并。但为了后面复用，最好写一个独立的 `merge` 函数，稍后加锁。

**理解测验**：
```bash
python3 unlock.py 2
```

**编码**：完成 `main.cpp` 中的顺序合并逻辑。建议你首先实现一个辅助函数 `mergeIntoGlobal`（在 `counter.cpp` 中，但暂时不加锁）。

**验证**：
```bash
make test
```
（测试会运行顺序版本并与预期结果比较）

---

### Problem 3 : 合并函数与互斥锁 

实现线程安全的合并函数 `merge`（位于 `counter.cpp`）。

**函数签名**：
```cpp
void merge(std::unordered_map<std::string, int>& global,
           const std::unordered_map<std::string, int>& local,
           std::mutex& mtx);
```
- 使用 `std::lock_guard<std::mutex>` 保护 `global`。
- 遍历 `local`，将每个单词的计数累加到 `global` 中（`global[word] += count`）。

**理解测验**：
```bash
python3 unlock.py 3
```

**编码**：在 `counter.cpp` 中实现 `merge`。

**验证**：
```bash
make test
```

---

### Problem 4 : 使用 std::async 并行 

修改 `main.cpp`，增加并行版本（当没有 `--sequential` 选项时使用）。

任务：

- 为每个文件启动一个 `std::future`：`auto fut = std::async(std::launch::async, countInFile, filename);`
- 将所有 future 存储到 `std::vector` 中。
- 遍历 future，调用 `.get()` 获得局部 map，然后调用 `merge`（传入 mutex）合并到全局 map。
- 注意：不要在所有任务完成前就开始合并（可以边 get 边合并，因为 `.get()` 会阻塞等待）。

**理解测验**：
```bash
python3 unlock.py 4
```

**编码**：在 `main.cpp` 的 `// TODO(P4)` 区域实现。

**验证**：
```bash
make test
```
测试会运行并行版本并检查正确性。另外可以手动对比顺序与并行的结果。

---

### Problem 5 : 简单线程池 —— 任务队列 

实现 `ThreadPool` 类（`thread_pool.cpp`）。这一题分两步：

**5.1 构造函数与析构函数**

- 构造函数：创建固定数量的工作线程（例如 `std::thread::hardware_concurrency()`），每个线程不断从任务队列中取出 `std::function<void()>` 并执行。
- 析构函数：设置 `stop_` 标志，通知所有线程退出，并 `join` 它们。

**5.2 `enqueue` 方法**

- 接受任何可调用对象和参数，将其打包为 `std::packaged_task`，返回 `std::future`。
- 将任务放入队列，并用条件变量唤醒一个线程。

**编码提示**：框架中 `thread_pool.h` 已经给出了接口和模板方法 `enqueue` 的声明（需要你补全实现）。`thread_pool.cpp` 中有 `// TODO(P5)` 标记。

**理解测验**：

```bash
python3 unlock.py 5
```

**验证**：单元测试会创建一个线程池，提交几个简单任务并检查结果。


### Problem 6 : 使用线程池重构主程序 

修改 `main.cpp`，增加 `--pool` 选项，使用你实现的 `ThreadPool` 来执行任务。

流程：

- 创建线程池（线程数 = CPU 核心数）。
- 对每个文件，`pool.enqueue(countInFile, filename)` 获得 `std::future`。
- 收集 future，然后依次 `.get()` 并通过 `merge` 合并。

**理解测验**：

```bash
python3 unlock.py 6
```

**编码**：在 `main.cpp` 中对应分支实现。

**验证**：运行 `make test`，并手动运行 `./cwc --pool data/` 观察性能。

### Problem 7 : 支持目录递归 

实现 `collectFiles` 函数（在 `main.cpp` 中）。该函数接收命令行参数列表，返回所有 `.txt` 文件的路径列表。

规则：

- 如果参数是普通文件且后缀为 `.txt`，加入列表。
- 如果参数是目录，递归遍历（`std::filesystem::recursive_directory_iterator`）所有 `.txt` 文件。
- 忽略无法读取的路径，打印警告但继续。

**理解测验**：

```bash
python3 unlock.py 7
```

**编码**：完成 `collectFiles` 函数。

**验证**：手动测试 `./cwc data/`，应能处理子目录。

### Problem 8 : 进度显示与原子计数 

增加进度条功能（默认开启）。在主线程中，你需要：

- 使用 `std::atomic<size_t> completed` 记录已完成的任务数。
- 在每个任务完成时（即从 future 获得结果后）递增 `completed`。
- 在合并循环中，每处理完一个任务打印进度，例如 `\rProcessed 30/100 files`（使用 `\r` 实现同一行刷新）。

为了实现“任务完成时”回调，你或许需要修改 `enqueue` 返回的 future 或者简单地在合并循环中打印。但为了更精确，可以在 `main` 中开一个单独的打印线程，定期检查 `completed`。简单起见，我们允许在合并循环中打印（因为合并本身是按顺序的，但不会影响正确性）。

**理解测验**：
```bash
python3 unlock.py 8
```

**编码**：在 `main.cpp` 中添加进度显示。注意原子操作不需要锁，只需 `completed.fetch_add(1)`。

**验证**：运行程序，看到进度在同一行更新。

### Problem 9 : 停用词过滤 

增加命令行选项 `--stopwords <file>`。读取停用词文件（每行一个词），在**合并**阶段忽略这些单词（即不将其计入全局 map）。停用词的匹配需要**小写规范化**后比较。

实现步骤：

- 解析参数，获得停用词文件路径。
- 读取文件，将每个词 `normalizeWord` 后存入 `std::unordered_set<std::string>`。
- 在 `merge` 函数中，如果单词属于停用词集合，则跳过累加。

注意：`merge` 目前接收 mutex 和 global map，还需要传入停用词集合。建议修改 `merge` 的签名，或者使用全局变量（不推荐）。更好的方式：在 `main` 中读取停用词后，传递给 `merge` 的调用处。由于 `merge` 是独立函数，你可以增加一个默认参数 `const std::unordered_set<std::string>* stopwords = n`。

**理解测验**：
```bash
python3 unlock.py 9
```

**编码**：修改相关代码。保持对原有测试的兼容（当未提供停用词时行为不变）。

**验证**：创建一个小停用词文件，运行程序并检查输出中不包含停用词。

### Problem 10 : 最终性能调优 但强烈推荐)

现在你已经有了一个功能齐全的并行词频统计工具。尝试优化其性能：

- 调整线程池大小（比如使用 `--threads N` 选项）。
- 合并时使用 `std::move` 避免不必要的拷贝（局部 map 在 `.get()` 后不再需要，可以直接移动）。
- 对于超大文件，考虑分块读取（`std::ifstream::read`）而不是逐行读。
- 实现 `--min-count` 选项：只输出出现次数不小于该值的单词。

你可以自行扩展这些特性。本项目没有额外的分数，但这是理解性能调优的好机会。

**验证**：使用 `time ./cwc --pool large_dataset/` 与顺序版本对比，报告加速比。

---

## 最终提交

你只需要提交修改后的 `counter.cpp` 和 `thread_pool.cpp` 以及可选的 `main.cpp`（如果修改了）。框架中其他文件保持原样。

提交前请确保：
- 所有单元测试通过（`make test` 全部绿）。
- 程序可以正确处理各种输入（不存在文件、空目录、超大文件）。
- 没有内存泄漏（可以使用 `valgrind` 检查）。

## 提示与常见错误

- **忘记加锁**：并发合并时多个线程同时访问 global map 会导致崩溃或数据错误。一定要用 `std::lock_guard`。
- **死锁**：不要在持有锁的情况下调用用户代码（如 `normalizeWord` 可能会抛异常？但一般不会）。确保锁的作用域最小。
- **future 的异常**：如果 `countInFile` 抛出异常（如文件不存在），`.get()` 会重新抛出。请在调用处捕获异常并打印警告，不要终止整个程序。
- **移动语义**：当调用 `merge` 时，局部 map 不再需要，可以使用 `std::move(localMap)` 来避免复制？不行，因为 `merge` 接受 const 引用。你可以修改 `merge` 接受右值引用，但为了简单，可以先保留。
- **线程池的析构**：确保在 `ThreadPool` 析构前所有任务已完成，否则可能访问已销毁的对象。

**现在，开始你的并发编程之旅吧！**