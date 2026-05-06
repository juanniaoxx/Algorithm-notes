---
hide:
  - toc 
  - navigation

title: Grep Lite
---

## 实验目标

实现一个简化版的 `grep` 命令行工具：读取一个或多个文本文件，输出其中**匹配指定正则表达式**的行（及行号）。  
通过这个实验，你会练习：

- 使用 `<regex>` 库进行正则表达式匹配
- 使用 `std::ifstream` 逐行读取文件
- 解析命令行参数
- 格式化输出（文件名、行号、内容）
- 处理异常（正则编译错误、文件打开失败）

**代码量**：约 70 行（仅填充核心 TODO 部分）。

---

## 功能需求

程序名为 `grep_lite`，用法如下：

```bash
./grep_lite "正则表达式" 文件1.txt 文件2.txt ...
./grep_lite "正则表达式"               （不提供文件名时从标准输入读取）
```

具体要求：

- 第一个命令行参数是正则表达式（字符串）。后续参数是文件名。如果没有文件名，则从 `std::cin` 读取输入。
- 对每个文件，逐行检查该行是否匹配正则表达式（使用 `std::regex_search`，而不是完全匹配）。
- 输出格式
    - 有文件名时：`文件名:行号: 行内容`  
    - 无文件名（从 stdin 读取）时：`行号: 行内容` （行号从 1 开始，冒号后面有一个空格）
- 若正则表达式编译错误（例如非法模式），捕获 `std::regex_error`，输出错误信息到 `stderr` 并退出程序（返回非零）。
- 若文件无法打开，输出错误信息到 `stderr`（例如 `Error: cannot open file 'xxx.txt'`），然后继续处理下一个文件，不要退出。
- 匹配到的行按读取顺序依次输出。

示例：

```bash
$ cat test.txt
Hello world
Hello C++
Goodbye

$ ./grep_lite "Hello" test.txt
test.txt:1: Hello world
test.txt:2: Hello C++

$ ./grep_lite "e$" test.txt
test.txt:3: Goodbye
```

```txt
grep_lite/
├── grepper.h          // 类声明（已完整，无需修改）
├── grepper.cpp        // 实现（TODO 部分待填充）
├── main.cpp           // 命令行入口（TODO 部分待填充）
├── test.cpp           // 可选，学生自写测试
├── Makefile           // 编译配置
├── unlock.py          // 理解测验脚本
└── test.txt           // 学生自行创建
```

## 学习步骤

建议按以下顺序完成。

### 步骤 0：准备工作

- 复习 `std::ifstream` 和 `std::getline` 用法。
- 了解 `std::regex` 和 `std::regex_search` 的基本用法（可查阅 cppreference）。
- 复习命令行参数 `argc, argv`。
- 了解 `std::regex_error` 异常。

### 步骤 1：实现 `Grepper` 类的基础结构

框架中已提供 `grepper.h`，你需要实现 `grepper.cpp` 中的三个函数：

- `void setPattern(const std::string& pattern)`
- `void processFile(const std::string& filename, std::vector<std::string>& results)`
- `void processStdin(std::vector<std::string>& results)`

### 步骤 2：编写正则表达式编译

在 `setPattern` 中，使用 `pattern` 构造 `std::regex` 对象。  
如果构造过程抛出 `std::regex_error`，捕获后重新抛出（不需要在这里处理，传递给 `main` 统一处理）。

### 步骤 3：处理单个文件

在 `processFile` 中：

- 打开文件，若失败则输出错误到 `std::cerr`，直接返回（不添加任何结果）。
- 逐行读取，行号从 1 开始。
- 对每一行调用 `std::regex_search(line, regex_)`。
- 如果匹配，按照 `"文件名:行号: 行内容"` 的格式将字符串压入 `results` 向量。

### 步骤 4：处理标准输入

`processStdin` 与 `processFile` 逻辑类似，但：

- 不打开文件，直接从 `std::cin` 读取。
- 输出格式为 `"行号: 行内容"`（无文件名前缀）。

### 步骤 5：完善主函数

`main.cpp` 已经提供框架，你需要：

- 检查参数个数，如果少于 2，输出用法提示并返回。
- 调用 `grepper.setPattern(argv[1])`，捕获 `std::regex_error` 并输出错误。
- 根据参数个数决定调用 `processStdin` 还是循环处理后续每个文件名。
- 最后遍历 `results` 并输出到 `std::cout`。

---

## 测试方法

你可以手动创建测试文件，例如 `test.txt` 内容：

```
apple pie
banana split
apple juice
grape
```

然后运行：

```bash
./grep_lite "apple" test.txt
```

预期输出：

```
test.txt:1: apple pie
test.txt:3: apple juice
```

再测试正则表达式功能：

```bash
./grep_lite "^b" test.txt
```

预期输出：`test.txt:2: banana split`

测试标准输入：

```bash
echo -e "hello\nworld\nhello again" | ./grep_lite "hello"
```

预期输出：

```
1: hello
3: hello again
```

测试无效正则表达式：

```bash
./grep_lite "["
```

应该输出类似 `Invalid regex: ...` 的错误信息并退出。

测试文件不存在：

```bash
./grep_lite "abc" not_exist.txt
```

应该输出错误信息但程序不崩溃，且后续文件（如果有）继续处理。

---

## 可选进阶挑战

完成基本功能后，你可以尝试：

1. **支持 `-i` 选项**：忽略大小写（提示：使用 `std::regex::icase` 标志）。
2. **支持 `-n` 选项**：禁止输出行号（只输出匹配行内容）。
3. **支持 `-c` 选项**：只输出每个文件匹配的行数，而不输出具体行。
4. **支持递归目录**：如果参数是目录，递归处理其中所有 `.txt` 文件（使用 `std::filesystem`）。
5. **高亮匹配部分**：在输出的行内容中，将匹配到的子串用颜色（ANSI 转义码）包裹。

---

## 提交要求

- 你只需要提交 `grepper.cpp` 和 `main.cpp`（如果修改了）。其他文件（`grepper.h`, `Makefile`）不要修改。
- 代码编译时无警告（`-Wall -Wextra`）。
- 功能满足上述所有要求。

---

**Enjoy hacking! 这个工具完成后，你就可以像在 Linux 命令行下使用 `grep` 一样快速查找文本了。**





