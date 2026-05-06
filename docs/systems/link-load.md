---
hide:
    - toc 
    - navigation
title: 程序员的自我修养
---

!!! tip "《程序员的自我修养：链接、装载与库》"
    本书共 12 章，建议学习周期 **24 天**（每天 1.5–2 小时）。  
    每天任务包括：**阅读指定小节 + 动手实验**（使用 `readelf`、`objdump`、`ldd`、`gdb`、`strace` 等工具分析 ELF 和进程）。  

    适合有一定系统编程基础（C/C++、操作系统）的读者，建议配合 Linux 环境动手实验。

## 学习日历（24 天）

<div class="schedule-wrapper">
    <table class="schedule-table">
        <thead>
            <tr>
                <th>天数</th>
                <th>章节</th>
                <th>学习内容（阅读小节）</th>
                <th>动手实验（✍️ 分析题）</th>
            </tr>
        </thead>
        <tbody>
            <tr class="week-separator"></tr>
            <!-- 第1天 -->
            <tr><td>第1天</td><td>1.1 ~ 1.2</td><td>Hello world 与“万变不离其宗”（程序被编译、链接、装载的基本过程）</td><td>编译一个最简单的 C 程序 `gcc -v` 观察背后调用的程序（cc1, as, ld）</td></tr>
            <tr><td>第2天</td><td>1.3 ~ 1.4</td><td>操作系统对程序运行的作用（进程、系统调用）</td><td>`strace ./a.out` 跟踪程序执行时的系统调用</td></tr>
            <tr><td>第3天</td><td>1.5 ~ 1.6</td><td>内存不够怎么办（虚拟内存、分段分页）、多任务协作</td><td>`cat /proc/self/maps` 观察进程虚拟地址空间布局</td></tr>
            <!-- 第2章 -->
            <tr><td>第4天</td><td>2.1 ~ 2.2</td><td>预处理、编译、汇编、链接详解；编译器的 AST 与汇编生成</td><td>`gcc -S` 生成汇编，对比源码与汇编的对应关系</td></tr>
            <tr><td>第5天</td><td>2.3 ~ 2.4</td><td>链接器的由来；静态链接的模块拼装概念</td><td>编写两个 `.c` 文件，分别编译成 `.o`，用 `ld` 手动链接</td></tr>
            <!-- 第3章 -->
            <tr><td>第6天</td><td>3.1 ~ 3.3</td><td>目标文件格式（ELF）、`simpleSection.o` 结构探索</td><td>`readelf -h`、`-S` 分析 `.o` 文件，列出节区</td></tr>
            <tr><td>第7天</td><td>3.4 ~ 3.5</td><td>ELF 头、节区表、符号表（`.symtab`）</td><td>`objdump -t` 查看符号表，区分弱符号、全局符号</td></tr>
            <tr><td>第8天</td><td>3.6 ~ 3.7</td><td>调试信息（`.debug_*`）及本章小结</td><td>`gcc -g` 编译后用 `readelf -S` 查看调试节区</td></tr>
            <!-- 第4章 -->
            <tr><td>第9天</td><td>4.1 ~ 4.2</td><td>静态链接的空间与地址分配、符号解析与重定位</td><td>`objdump -r` 观察重定位项，计算偏移</td></tr>
            <tr><td>第10天</td><td>4.3 ~ 4.4</td><td>COMMON 块、C++ 全局构造析构与链接</td><td>用 `nm` 查看 COMMON 符号，对比 `-fno-common` 效果</td></tr>
            <tr><td>第11天</td><td>4.5 ~ 4.6</td><td>静态库链接、链接器脚本控制</td><td>编写链接脚本将 `.text` 移动到指定地址</td></tr>
            <tr><td>第12天</td><td>4.7 ~ 4.8</td><td>BFD 库、小结</td><td>（了解）</td></tr>
            <!-- 第5章（Windows，可选，仍列出） -->
            <tr><td>第13天</td><td>5.1 ~ 5.4</td><td>Windows PE/COFF 格式、COFF 结构</td><td>用 `objdump -x` 分析 Windows 下 `.obj`（若有环境）或用 Linux 的 `objdump` 分析 COFF 文件</td></tr>
            <tr><td>第14天</td><td>5.5 ~ 5.7</td><td>符号表、PE 结构、小结</td><td>（可选）</td></tr>
            <!-- 第6章 -->
            <tr><td>第15天</td><td>6.1 ~ 6.3</td><td>进程虚拟地址空间、装载方式（覆盖、页映射）、内核视角的装载</td><td>`gdb` 在 `_start` 断点，查看进程内存映射</td></tr>
            <tr><td>第16天</td><td>6.4 ~ 6.6</td><td>进程空间分布、Linux 装载 ELF 过程、Windows PE 装载（简）</td><td>`pmap 进程ID` 查看具体进程的地址空间分布</td></tr>
            <!-- 第7章 -->
            <tr><td>第17天</td><td>7.1 ~ 7.3</td><td>动态链接的必要性、简单例子、地址无关代码（PIC）</td><td>编译动态库 `-fPIC`，反汇编观察 GOT/PLT 结构</td></tr>
            <tr><td>第18天</td><td>7.4 ~ 7.5</td><td>延迟绑定（PLT）、动态链接相关结构（`.dynamic`, `.got.plt`）</td><td>`LD_DEBUG=bindings ./a.out` 观察动态链接过程</td></tr>
            <tr><td>第19天</td><td>7.6 ~ 7.8</td><td>动态链接步骤、显式运行时链接（`dlopen`）</td><td>编写程序用 `dlopen` 加载动态库，调用其中的函数</td></tr>
            <!-- 第8章 -->
            <tr><td>第20天</td><td>8.1 ~ 8.4</td><td>共享库版本、符号版本、系统路径、查找过程</td><td>`ldd` 查看依赖，`ldconfig -p` 列出系统缓存的库</td></tr>
            <tr><td>第21天</td><td>8.5 ~ 8.7</td><td>环境变量（`LD_LIBRARY_PATH`）、创建与安装共享库</td><td>设置 `LD_LIBRARY_PATH` 使程序使用自定义路径的库</td></tr>
            <!-- 第9章（Windows）可选 -->
            <tr><td>第22天</td><td>9.1 ~ 9.6</td><td>Windows DLL 相关（略读）</td><td>-</td></tr>
            <!-- 第10章 -->
            <tr><td>第23天</td><td>10.1 ~ 10.3</td><td>内存布局（栈、堆、MMAP）、调用惯例（cdecl/stdcall）、堆管理（brk/mmap）</td><td>用 `strace` 观测 `malloc` 何时触发 `brk` 或 `mmap`</td></tr>
            <!-- 第11章 -->
            <tr><td>第24天</td><td>11.1 ~ 11.6</td><td>入口函数、C/C++ 运行库初始化、多线程与运行库、全局构造析构、`fread` 实现</td><td>用 `gdb` 从 `_start` 单步到 `main`，跟踪初始化过程</td></tr>
        </tbody>
    </table>
</div>

> **注**：第 5 章（Windows PE/COFF）和第 9 章（Windows DLL）可根据兴趣选读，不影响主线。第 12 章（系统调用与 API）内容分散在前序章节中，已作为实验穿插。

## 章节打卡（12 章）

<div class="collapsible">
    <div class="collapsible-header">
        <strong><span class="collapsible-icon">📚</span>全书章节（点击展开）<span class="collapsible-count">(12)</span></strong>
        <span class="collapsible-toggle"><span>展开</span><span class="toggle-icon">▶</span></span>
    </div>
    <div class="collapsible-content">
        <a href="/docs/systems/link-load/ch1" class="collapsible-item">
            <span><span class="item-icon">📖</span>第1章·温故而知新</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="/docs/systems/link-load/ch2" class="collapsible-item">
            <span><span class="item-icon">📖</span>第2章·编译和链接</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="/docs/systems/link-load/ch3" class="collapsible-item">
            <span><span class="item-icon">📖</span>第3章·目标文件里有什么</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="/docs/systems/link-load/ch4" class="collapsible-item">
            <span><span class="item-icon">📖</span>第4章·静态链接</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="/docs/systems/link-load/ch5" class="collapsible-item">
            <span><span class="item-icon">📖</span>第5章·Windows PE/COFF</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="/docs/systems/link-load/ch6" class="collapsible-item">
            <span><span class="item-icon">📖</span>第6章·可执行文件的装载与进程</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="/docs/systems/link-load/ch7" class="collapsible-item">
            <span><span class="item-icon">📖</span>第7章·动态链接</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="/docs/systems/link-load/ch8" class="collapsible-item">
            <span><span class="item-icon">📖</span>第8章·Linux 共享库的组织</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="/docs/systems/link-load/ch9" class="collapsible-item">
            <span><span class="item-icon">📖</span>第9章·Windows 下的动态链接</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="/docs/systems/link-load/ch10" class="collapsible-item">
            <span><span class="item-icon">📖</span>第10章·内存</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="/docs/systems/link-load/ch11" class="collapsible-item">
            <span><span class="item-icon">📖</span>第11章·运行库</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="/docs/systems/link-load/ch12" class="collapsible-item">
            <span><span class="item-icon">📖</span>第12章·系统调用与API</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒 🔒</span>
        </a>
    </div>
</div>

## 关于实验的说明

- 所有实验均为**使用现有命令行工具进行观察和分析**，无需编写完整程序（除非个别可选挑战）。
- 实验题目仅提供方向，你需要自己动手执行命令、记录输出、分析结果并得出结论。
- 建议为每个实验建立一份笔记文档（例如 Markdown 文件），记录关键截图或文本输出。

## 打卡方式

- 读完一章后，在折叠块中点击对应章节的 `❌ 🔒`（理论上需要手动修改 `.md` 文件源中的 `item-badge` 文本），或通过文档系统内置的标记功能将其改为 `✅`。
- 每日实验完成后可在日历表格的“实验”列末尾添加 `✅`（手动编辑）。

---

**坚持 24 天，你将彻底理解“程序是如何从代码变成进程”的。** 🧩