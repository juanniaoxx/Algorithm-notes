---
hide:
    - toc
    - navigation
title: "Computer System: A Programmer's Perspective"
---

!!! tip "CSAPP"
    *Computer Systems: A Programmer's Perspective* 

<div class="schedule-wrapper">
<table class="schedule-table">
  <thead>
    <tr><th>日期</th><th>章节</th><th>学习内容与任务</th><th>实验 / 作业</th></tr>
  </thead>
  <tbody>
    <!-- ==================== WEEK 1 ==================== -->
    <tr class="week-separator"><td colspan="4"><span>⚡ WEEK 1</span> 基础与数据表示 · Day 1-7</td></tr>
    <tr><td>第1天</td><td><span class="schedule-chap">Ch.1 + 2.1-2.2</span></td><td>计算机系统漫游 · 信息存储基础（进制、字节序、字长）</td><td>课后练习</td></tr>
    <tr><td>第2天</td><td><span class="schedule-chap">Ch.2.3-2.4 <span class="schedule-star">⭐</span></span></td><td>整数表示与运算 · 浮点数 IEEE 754 标准</td><td>课后练习</td></tr>
    <tr><td>第3天</td><td><span class="schedule-chap">Ch.2.5 + Data Lab</span></td><td>位运算技巧 · 实验环境配置 · 熟悉 dlc 工具</td><td><span class="schedule-lab">Data Lab 开始</span></td></tr>
    <tr><td>第4天</td><td><span class="schedule-chap">Data Lab</span></td><td>实现 bitXor、tmin、isTmax 等函数</td><td><span class="schedule-lab">Data Lab 继续</span></td></tr>
    <tr><td>第5天</td><td><span class="schedule-chap">Data Lab</span></td><td>完成 float 相关函数 · 调试与优化</td><td><span class="schedule-lab">Data Lab 完成 ✓</span> <span class="schedule-badge badge-hard">实验</span></td></tr>
    <tr><td>第6天</td><td><span class="schedule-chap">Ch.3.1-3.5</span></td><td>汇编基础：寄存器 · 数据格式 · 寻址模式 · 算术逻辑</td><td>课后练习</td></tr>
    <tr><td>第7天</td><td><span class="schedule-chap">Ch.3.6 <span class="schedule-star">⭐</span></span></td><td>控制：条件码 · 跳转指令 · 循环汇编实现</td><td>课后练习</td></tr>

    <!-- ==================== WEEK 2 ==================== -->
    <tr class="week-separator"><td colspan="4"><span>⚡ WEEK 2</span> 汇编深入 · Day 8-14</td></tr>
    <tr><td>第8天</td><td><span class="schedule-chap">Ch.3.7 <span class="schedule-star">⭐</span></span></td><td>过程调用栈 · 栈帧结构 · call/ret 机制</td><td>课后练习</td></tr>
    <tr><td>第9天</td><td><span class="schedule-chap">Ch.3.8-3.9</span></td><td>数组分配与访问 · 异质数据结构（结构体/联合体）</td><td>课后练习</td></tr>
    <tr><td>第10天</td><td><span class="schedule-chap">Bomb Lab</span></td><td>拆弹实验：熟悉 GDB · Phase 1-2</td><td><span class="schedule-lab">Bomb Lab 第1轮</span></td></tr>
    <tr><td>第11天</td><td><span class="schedule-chap">Bomb Lab</span></td><td>Phase 3-4（switch 跳转表 · 递归）</td><td><span class="schedule-lab">Bomb Lab 第2轮</span></td></tr>
    <tr><td>第12天</td><td><span class="schedule-chap">Bomb Lab</span></td><td>Phase 5-6（字符映射 · 链表）· Secret Phase</td><td><span class="schedule-lab">Bomb Lab 完成 ✓</span> <span class="schedule-badge badge-hard">实验</span></td></tr>
    <tr><td>第13天</td><td><span class="schedule-chap">Ch.3.10 + Attack Lab</span></td><td>缓冲区溢出原理 · 代码注入攻击</td><td><span class="schedule-lab">Attack Lab 第1轮</span></td></tr>
    <tr><td>第14天</td><td><span class="schedule-chap">Attack Lab</span></td><td>ROP 攻击 · 完成 touch 2/3 · 生成攻击字符串</td><td><span class="schedule-lab">Attack Lab 完成 ✓</span> <span class="schedule-badge badge-hard">实验</span></td></tr>

    <!-- ==================== WEEK 3 ==================== -->
    <tr class="week-separator"><td colspan="4"><span>⚡ WEEK 3</span> 处理器架构 · Day 15-21</td></tr>
    <tr><td>第15天</td><td><span class="schedule-chap">Ch.4.1-4.3</span></td><td>Y86-64 ISA · 顺序 CPU 实现 (SEQ)</td><td>课后练习</td></tr>
    <tr><td>第16天</td><td><span class="schedule-chap">Ch.4.4-4.6 <span class="schedule-star">⭐</span></span></td><td>流水线原理 · 冒险与数据转发 · 流水线 Y86-64</td><td>课后练习</td></tr>
    <tr><td>第17天</td><td><span class="schedule-chap">Arch Lab</span></td><td>熟悉 Y86-64 模拟器 · 实现 seq 处理器</td><td><span class="schedule-lab">Arch Lab 第1轮</span></td></tr>
    <tr><td>第18天</td><td><span class="schedule-chap">Arch Lab</span></td><td>实现流水线处理器 · 处理冒险</td><td><span class="schedule-lab">Arch Lab 第2轮</span></td></tr>
    <tr><td>第19天</td><td><span class="schedule-chap">Arch Lab</span></td><td>优化与调试 · 完成所有测试</td><td><span class="schedule-lab">Arch Lab 完成 ✓</span> <span class="schedule-badge badge-hard">实验</span></td></tr>
    <tr><td>第20天</td><td><span class="schedule-chap">Ch.5.1-5.6</span></td><td>优化能力 · 性能度量 · 消除循环低效 · 减少过程调用</td><td>课后练习</td></tr>
    <tr><td>第21天</td><td><span class="schedule-chap">Ch.5.7-5.11 <span class="schedule-star">⭐</span></span></td><td>现代处理器 · 乱序执行 · 循环展开 · 并行性</td><td>课后练习</td></tr>

    <!-- ==================== WEEK 4 ==================== -->
    <tr class="week-separator"><td colspan="4"><span>⚡ WEEK 4</span> 优化与内存体系 · Day 22-28</td></tr>
    <tr><td>第22天</td><td><span class="schedule-chap">Ch.5.12-5.15</span></td><td>内存性能 · 性能瓶颈识别与消除</td><td>课后练习</td></tr>
    <tr><td>第23天</td><td><span class="schedule-chap">Cache Lab</span></td><td>理解缓存模拟器结构 · 实现 csim</td><td><span class="schedule-lab">Cache Lab 第1轮</span></td></tr>
    <tr><td>第24天</td><td><span class="schedule-chap">Cache Lab</span></td><td>完成 csim · 优化矩阵转置 (32x32)</td><td><span class="schedule-lab">Cache Lab 第2轮</span></td></tr>
    <tr><td>第25天</td><td><span class="schedule-chap">Cache Lab</span></td><td>优化 64x64 矩阵 · 处理抖动问题</td><td><span class="schedule-lab">Cache Lab 完成 ✓</span> <span class="schedule-badge badge-hard">实验</span></td></tr>
    <tr><td>第26天</td><td><span class="schedule-chap">Ch.6.1-6.4</span></td><td>存储技术 · 局部性 · 内存层次结构</td><td>课后练习</td></tr>
    <tr><td>第27天</td><td><span class="schedule-chap">Ch.6.5-6.7 <span class="schedule-star">⭐</span></span></td><td>缓存存储器 · 编写缓存友好的代码</td><td>课后练习</td></tr>
    <tr><td>第28天</td><td><span class="schedule-chap">Ch.7.1-7.8</span></td><td>链接：编译器驱动 · 静态链接 · 目标文件 · 符号表</td><td>课后练习</td></tr>

    <!-- ==================== WEEK 5 ==================== -->
    <tr class="week-separator"><td colspan="4"><span>⚡ WEEK 5</span> 链接与异常控制流 · Day 29-35</td></tr>
    <tr><td>第29天</td><td><span class="schedule-chap">Ch.7.9-7.15 <span class="schedule-star">⭐</span></span></td><td>符号解析 · 重定位 · 动态链接 · 位置无关代码 (PIC)</td><td>课后练习</td></tr>
    <tr><td>第30天</td><td><span class="schedule-chap">Shell Lab</span></td><td>实现 Shell · eval 函数 · 内置命令</td><td><span class="schedule-lab">Shell Lab 第1轮</span></td></tr>
    <tr><td>第31天</td><td><span class="schedule-chap">Shell Lab</span></td><td>作业控制 · 信号处理 · 僵进程回收</td><td><span class="schedule-lab">Shell Lab 第2轮</span></td></tr>
    <tr><td>第32天</td><td><span class="schedule-chap">Shell Lab</span></td><td>调试并发问题 · 完成所有测试用例</td><td><span class="schedule-lab">Shell Lab 完成 ✓</span> <span class="schedule-badge badge-hard">实验</span></td></tr>
    <tr><td>第33天</td><td><span class="schedule-chap">Ch.8.1-8.4</span></td><td>异常 · 进程控制 · 上下文切换</td><td>课后练习</td></tr>
    <tr><td>第34天</td><td><span class="schedule-chap">Ch.8.5 <span class="schedule-star">⭐</span></span></td><td>信号机制 · 信号处理程序 · 阻塞与等待</td><td>课后练习</td></tr>
    <tr><td>第35天</td><td><span class="schedule-chap">Ch.8.6-8.8</span></td><td>非本地跳转 · 操作进程的工具</td><td>课后练习</td></tr>

    <!-- ==================== WEEK 6 ==================== -->
    <tr class="week-separator"><td colspan="4"><span>⚡ WEEK 6</span> 虚拟内存 · Day 36-42</td></tr>
    <tr><td>第36天</td><td><span class="schedule-chap">Ch.9.1-9.6 <span class="schedule-star">⭐</span></span></td><td>虚拟内存：地址空间 · 页表 · 地址翻译</td><td>课后练习</td></tr>
    <tr><td>第37天</td><td><span class="schedule-chap">Ch.9.7-9.8</span></td><td>Core i7 案例 · 内存映射</td><td>课后练习</td></tr>
    <tr><td>第38天</td><td><span class="schedule-chap">Ch.9.9 <span class="schedule-star">⭐</span></span></td><td>动态内存分配：隐式链表 · 边界标记 · 空闲块合并</td><td>课后练习</td></tr>
    <tr><td>第39天</td><td><span class="schedule-chap">Malloc Lab</span></td><td>阅读 mm.c 框架 · 实现 mm_malloc/mm_free</td><td><span class="schedule-lab">Malloc Lab 第1轮</span></td></tr>
    <tr><td>第40天</td><td><span class="schedule-chap">Malloc Lab</span></td><td>实现 mm_realloc · 调试指针错误</td><td><span class="schedule-lab">Malloc Lab 第2轮</span></td></tr>
    <tr><td>第41天</td><td><span class="schedule-chap">Malloc Lab</span></td><td>性能优化 · 显式链表或分离适配</td><td><span class="schedule-lab">Malloc Lab 第3轮</span></td></tr>
    <tr><td>第42天</td><td><span class="schedule-chap">Malloc Lab</span></td><td>完成所有测试 · 达到性能基线</td><td><span class="schedule-lab">Malloc Lab 完成 ✓</span> <span class="schedule-badge badge-hard">实验</span></td></tr>

    <!-- ==================== WEEK 7 ==================== -->
    <tr class="week-separator"><td colspan="4"><span>⚡ WEEK 7</span> 系统 I/O 与网络编程 · Day 43-49</td></tr>
    <tr><td>第43天</td><td><span class="schedule-chap">Ch.9.10-9.12</span></td><td>垃圾回收 · 常见内存错误</td><td>课后练习</td></tr>
    <tr><td>第44天</td><td><span class="schedule-chap">Ch.10</span></td><td>系统级 I/O：Unix I/O · 文件 · Rio 包 · 重定向</td><td>课后练习</td></tr>
    <tr><td>第45天</td><td><span class="schedule-chap">Ch.11.1-11.3</span></td><td>客户端-服务端模型 · 网络 · IP 互联网</td><td>课后练习</td></tr>
    <tr><td>第46天</td><td><span class="schedule-chap">Ch.11.4 <span class="schedule-star">⭐</span></span></td><td>套接字接口 · 实现 client/server</td><td>课后练习</td></tr>
    <tr><td>第47天</td><td><span class="schedule-chap">Ch.11.5-11.7</span></td><td>Web 服务器 · HTTP 协议 · Tiny Web 服务器</td><td>课后练习</td></tr>
    <tr><td>第48天</td><td><span class="schedule-chap">Proxy Lab</span></td><td>代理框架搭建 · 实现基本请求转发</td><td><span class="schedule-lab">Proxy Lab 第1轮</span></td></tr>
    <tr><td>第49天</td><td><span class="schedule-chap">Proxy Lab</span></td><td>处理并发请求 · 实现多线程</td><td><span class="schedule-lab">Proxy Lab 第2轮</span></td></tr>

    <!-- ==================== WEEK 8 ==================== -->
    <tr class="week-separator"><td colspan="4"><span>⚡ WEEK 8</span> 并发与收尾 · Day 50-56</td></tr>
    <tr><td>第50天</td><td><span class="schedule-chap">Proxy Lab</span></td><td>实现缓存 (LRU) · 处理 EOF 和信号</td><td><span class="schedule-lab">Proxy Lab 第3轮</span></td></tr>
    <tr><td>第51天</td><td><span class="schedule-chap">Proxy Lab</span></td><td>优化与调试 · 通过最终测试</td><td><span class="schedule-lab">Proxy Lab 完成 ✓</span> <span class="schedule-badge badge-hard">实验</span></td></tr>
    <tr><td>第52天</td><td><span class="schedule-chap">Ch.12.1-12.5 <span class="schedule-star">⭐</span></span></td><td>并发编程：进程 · I/O 多路复用 · 线程 · 信号量</td><td>课后练习</td></tr>
    <tr><td>第53天</td><td><span class="schedule-chap">Ch.12.6-12.8</span></td><td>线程并行性 · 死锁 · 竞争 · 线程安全</td><td>课后练习</td></tr>
    <tr><td>第54天</td><td><span class="schedule-chap">总复习（一）</span></td><td>重点回顾 Ch.3（汇编）、Ch.5（优化）、Ch.9（虚拟内存）</td><td>重做错题 · 整理笔记</td></tr>
    <tr><td>第55天</td><td><span class="schedule-chap">总复习（二）</span></td><td>重点回顾 Ch.6（Cache）、Ch.7（链接）、Ch.11-12（网络与并发）</td><td>重做错题 · 整理笔记</td></tr>
    <tr><td>第56天</td><td><span class="schedule-chap">🎉 完成 🎉</span></td><td>回顾整个学习历程 · 总结收获</td><td>庆祝！</td></tr>
  </tbody>
</table>
</div>




<div class="collapsible">
    <div class="collapsible-header">
        <strong><span class="collapsible-icon">📚</span>1. A Tour of Computer Systems<span class="collapsible-count">(1)</span></strong>
        <span class="collapsible-toggle"><span>收起</span><span class="toggle-icon">▼</span></span>
    </div>
    <div class="collapsible-content">
        <a href="../csapp/01_A_Tour_of_Computer_Systems" class="collapsible-item">
            <span><span class="item-icon">📖</span>1. A Tour of Computer Systems</span>
            <span class="item-badge item-badge-complete">✅</span>
        </a>
    </div>
</div>

<div class="collapsible">
    <div class="collapsible-header">
        <strong><span class="collapsible-icon">📚</span>2. Representing and Manipulating Information<span class="collapsible-count">(5)</span></strong>
        <span class="collapsible-toggle"><span>收起</span><span class="toggle-icon">▼</span></span>
    </div>
    <div class="collapsible-content">
        <a href="../csapp/02_2.1_Information_Storage" class="collapsible-item">
            <span><span class="item-icon">📖</span>2.1 Information Storage</span>
            <span class="item-badge item-badge-incomplete">❌ </span>
        </a>
        <a href="../csapp/02_2.2_Integer_Representations" class="collapsible-item">
            <span><span class="item-icon">📖</span>2.2 Integer Representations</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/02_2.3_Integer_Arithmetic" class="collapsible-item">
            <span><span class="item-icon">📖</span>2.3 Integer Arithmetic</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/02_2.4_Floating_Point" class="collapsible-item">
            <span><span class="item-icon">📖</span>2.4 Floating Point</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/02_2.5_Summary" class="collapsible-item">
            <span><span class="item-icon">📖</span>2.5 Summary</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
    </div>
</div>

<div class="collapsible">
    <div class="collapsible-header">
        <strong><span class="collapsible-icon">📚</span>3. Machine-Level Representation of Programs<span class="collapsible-count">(12)</span></strong>
        <span class="collapsible-toggle"><span>收起</span><span class="toggle-icon">▼</span></span>
    </div>
    <div class="collapsible-content">
        <a href="../csapp/03_3.1_A_Historical_Perspective" class="collapsible-item">
            <span><span class="item-icon">📖</span>3.1 A Historical Perspective</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/03_3.2_Program_Encodings" class="collapsible-item">
            <span><span class="item-icon">📖</span>3.2 Program Encodings</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/03_3.3_Data_Formats" class="collapsible-item">
            <span><span class="item-icon">📖</span>3.3 Data Formats</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/03_3.4_Accessing_Information" class="collapsible-item">
            <span><span class="item-icon">📖</span>3.4 Accessing Information</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/03_3.5_Arithmetic_and_Logical_Operations" class="collapsible-item">
            <span><span class="item-icon">📖</span>3.5 Arithmetic and Logical Operations</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/03_3.6_Control" class="collapsible-item">
            <span><span class="item-icon">📖</span>3.6 Control</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/03_3.7_Procedures" class="collapsible-item">
            <span><span class="item-icon">📖</span>3.7 Procedures</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/03_3.8_Array_Allocation_and_Access" class="collapsible-item">
            <span><span class="item-icon">📖</span>3.8 Array Allocation and Access</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/03_3.9_Heterogeneous_Data_Structures" class="collapsible-item">
            <span><span class="item-icon">📖</span>3.9 Heterogeneous Data Structures</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/03_3.10_Combining_Control_and_Data" class="collapsible-item">
            <span><span class="item-icon">📖</span>3.10 Combining Control and Data in Machine-Level Programs</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/03_3.11_Floating_Point_Code" class="collapsible-item">
            <span><span class="item-icon">📖</span>3.11 Floating-Point Code</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/03_3.12_Summary" class="collapsible-item">
            <span><span class="item-icon">📖</span>3.12 Summary</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
    </div>
</div>

<div class="collapsible">
    <div class="collapsible-header">
        <strong><span class="collapsible-icon">📚</span>4. Processor Architecture<span class="collapsible-count">(6)</span></strong>
        <span class="collapsible-toggle"><span>收起</span><span class="toggle-icon">▼</span></span>
    </div>
    <div class="collapsible-content">
        <a href="../csapp/04_4.1_Y86_64_ISA" class="collapsible-item">
            <span><span class="item-icon">📖</span>4.1 The Y86-64 Instruction Set Architecture</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/04_4.2_Logic_Design_and_HCL" class="collapsible-item">
            <span><span class="item-icon">📖</span>4.2 Logic Design and the Hardware Control Language HCL</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/04_4.3_Sequential_Y86_64_Implementations" class="collapsible-item">
            <span><span class="item-icon">📖</span>4.3 Sequential Y86-64 Implementations</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/04_4.4_General_Principles_of_Pipelining" class="collapsible-item">
            <span><span class="item-icon">📖</span>4.4 General Principles of Pipelining</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/04_4.5_Pipelined_Y86_64_Implementations" class="collapsible-item">
            <span><span class="item-icon">📖</span>4.5 Pipelined Y86-64 Implementations</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/04_4.6_Summary" class="collapsible-item">
            <span><span class="item-icon">📖</span>4.6 Summary</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
    </div>
</div>

<div class="collapsible">
    <div class="collapsible-header">
        <strong><span class="collapsible-icon">📚</span>5. Optimizing Program Performance<span class="collapsible-count">(14)</span></strong>
        <span class="collapsible-toggle"><span>收起</span><span class="toggle-icon">▼</span></span>
    </div>
    <div class="collapsible-content">
        <a href="../csapp/05_5.1_Capabilities_and_Limitations" class="collapsible-item">
            <span><span class="item-icon">📖</span>5.1 Capabilities and Limitations of Optimizing Compilers</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/05_5.2_Expressing_Program_Performance" class="collapsible-item">
            <span><span class="item-icon">📖</span>5.2 Expressing Program Performance</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/05_5.3_Program_Example" class="collapsible-item">
            <span><span class="item-icon">📖</span>5.3 Program Example</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/05_5.4_Eliminating_Loop_Inefficiencies" class="collapsible-item">
            <span><span class="item-icon">📖</span>5.4 Eliminating Loop Inefficiencies</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/05_5.5_Reducing_Procedure_Calls" class="collapsible-item">
            <span><span class="item-icon">📖</span>5.5 Reducing Procedure Calls</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/05_5.6_Eliminating_Unneeded_Memory_References" class="collapsible-item">
            <span><span class="item-icon">📖</span>5.6 Eliminating Unneeded Memory References</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/05_5.7_Understanding_Modern_Processors" class="collapsible-item">
            <span><span class="item-icon">📖</span>5.7 Understanding Modern Processors</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/05_5.8_Loop_Unrolling" class="collapsible-item">
            <span><span class="item-icon">📖</span>5.8 Loop Unrolling</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/05_5.9_Enhancing_Parallelism" class="collapsible-item">
            <span><span class="item-icon">📖</span>5.9 Enhancing Parallelism</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/05_5.10_Summary_of_Results" class="collapsible-item">
            <span><span class="item-icon">📖</span>5.10 Summary of Results for Optimizing Combining Code</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/05_5.11_Some_Limiting_Factors" class="collapsible-item">
            <span><span class="item-icon">📖</span>5.11 Some Limiting Factors</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/05_5.12_Understanding_Memory_Performance" class="collapsible-item">
            <span><span class="item-icon">📖</span>5.12 Understanding Memory Performance</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/05_5.13_Performance_Improvement_Techniques" class="collapsible-item">
            <span><span class="item-icon">📖</span>5.13 Life in the Real World: Performance Improvement Techniques</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/05_5.14_Identifying_Bottlenecks" class="collapsible-item">
            <span><span class="item-icon">📖</span>5.14 Identifying and Eliminating Performance Bottlenecks</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/05_5.15_Summary" class="collapsible-item">
            <span><span class="item-icon">📖</span>5.15 Summary</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
    </div>
</div>

<div class="collapsible">
    <div class="collapsible-header">
        <strong><span class="collapsible-icon">📚</span>6. The Memory Hierarchy<span class="collapsible-count">(7)</span></strong>
        <span class="collapsible-toggle"><span>收起</span><span class="toggle-icon">▼</span></span>
    </div>
    <div class="collapsible-content">
        <a href="../csapp/06_6.1_Storage_Technologies" class="collapsible-item">
            <span><span class="item-icon">📖</span>6.1 Storage Technologies</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/06_6.2_Locality" class="collapsible-item">
            <span><span class="item-icon">📖</span>6.2 Locality</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/06_6.3_The_Memory_Hierarchy" class="collapsible-item">
            <span><span class="item-icon">📖</span>6.3 The Memory Hierarchy</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/06_6.4_Cache_Memories" class="collapsible-item">
            <span><span class="item-icon">📖</span>6.4 Cache Memories</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/06_6.5_Writing_Cache_Friendly_Code" class="collapsible-item">
            <span><span class="item-icon">📖</span>6.5 Writing Cache-Friendly Code</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/06_6.6_Impact_of_Caches_on_Performance" class="collapsible-item">
            <span><span class="item-icon">📖</span>6.6 Putting It Together: The Impact of Caches on Program Performance</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/06_6.7_Summary" class="collapsible-item">
            <span><span class="item-icon">📖</span>6.7 Summary</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
    </div>
</div>

<div class="collapsible">
    <div class="collapsible-header">
        <strong><span class="collapsible-icon">📚</span>7. Linking<span class="collapsible-count">(13)</span></strong>
        <span class="collapsible-toggle"><span>收起</span><span class="toggle-icon">▼</span></span>
    </div>
    <div class="collapsible-content">
        <a href="../csapp/07_7.1_Compiler_Drivers" class="collapsible-item">
            <span><span class="item-icon">📖</span>7.1 Compiler Drivers</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/07_7.2_Static_Linking" class="collapsible-item">
            <span><span class="item-icon">📖</span>7.2 Static Linking</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/07_7.3_Object_Files" class="collapsible-item">
            <span><span class="item-icon">📖</span>7.3 Object Files</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/07_7.4_Relocatable_Object_Files" class="collapsible-item">
            <span><span class="item-icon">📖</span>7.4 Relocatable Object Files</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/07_7.5_Symbols_and_Symbol_Tables" class="collapsible-item">
            <span><span class="item-icon">📖</span>7.5 Symbols and Symbol Tables</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/07_7.6_Symbol_Resolution" class="collapsible-item">
            <span><span class="item-icon">📖</span>7.6 Symbol Resolution</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/07_7.7_Relocation" class="collapsible-item">
            <span><span class="item-icon">📖</span>7.7 Relocation</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/07_7.8_Executable_Object_Files" class="collapsible-item">
            <span><span class="item-icon">📖</span>7.8 Executable Object Files</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/07_7.9_Loading_Executable_Object_Files" class="collapsible-item">
            <span><span class="item-icon">📖</span>7.9 Loading Executable Object Files</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/07_7.10_Dynamic_Linking_with_Shared_Libraries" class="collapsible-item">
            <span><span class="item-icon">📖</span>7.10 Dynamic Linking with Shared Libraries</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/07_7.11_Loading_and_Linking_Shared_Libraries" class="collapsible-item">
            <span><span class="item-icon">📖</span>7.11 Loading and Linking Shared Libraries from Applications</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/07_7.12_Position_Independent_Code" class="collapsible-item">
            <span><span class="item-icon">📖</span>7.12 Position-Independent Code (PIC)</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/07_7.13_Library_Interpositioning" class="collapsible-item">
            <span><span class="item-icon">📖</span>7.13 Library Interpositioning</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/07_7.14_Tools_for_Manipulating_Object_Files" class="collapsible-item">
            <span><span class="item-icon">📖</span>7.14 Tools for Manipulating Object Files</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/07_7.15_Summary" class="collapsible-item">
            <span><span class="item-icon">📖</span>7.15 Summary</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
    </div>
</div>

<div class="collapsible">
    <div class="collapsible-header">
        <strong><span class="collapsible-icon">📚</span>8. Exceptional Control Flow<span class="collapsible-count">(7)</span></strong>
        <span class="collapsible-toggle"><span>收起</span><span class="toggle-icon">▼</span></span>
    </div>
    <div class="collapsible-content">
        <a href="../csapp/08_8.1_Exceptions" class="collapsible-item">
            <span><span class="item-icon">📖</span>8.1 Exceptions</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/08_8.2_Processes" class="collapsible-item">
            <span><span class="item-icon">📖</span>8.2 Processes</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/08_8.3_System_Call_Error_Handling" class="collapsible-item">
            <span><span class="item-icon">📖</span>8.3 System Call Error Handling</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/08_8.4_Process_Control" class="collapsible-item">
            <span><span class="item-icon">📖</span>8.4 Process Control</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/08_8.5_Signals" class="collapsible-item">
            <span><span class="item-icon">📖</span>8.5 Signals</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/08_8.6_Nonlocal_Jumps" class="collapsible-item">
            <span><span class="item-icon">📖</span>8.6 Nonlocal Jumps</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/08_8.7_Tools_for_Manipulating_Processes" class="collapsible-item">
            <span><span class="item-icon">📖</span>8.7 Tools for Manipulating Processes</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/08_8.8_Summary" class="collapsible-item">
            <span><span class="item-icon">📖</span>8.8 Summary</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
    </div>
</div>

<div class="collapsible">
    <div class="collapsible-header">
        <strong><span class="collapsible-icon">📚</span>9. Virtual Memory<span class="collapsible-count">(11)</span></strong>
        <span class="collapsible-toggle"><span>收起</span><span class="toggle-icon">▼</span></span>
    </div>
    <div class="collapsible-content">
        <a href="../csapp/09_9.1_Physical_and_Virtual_Addressing" class="collapsible-item">
            <span><span class="item-icon">📖</span>9.1 Physical and Virtual Addressing</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/09_9.2_Address_Spaces" class="collapsible-item">
            <span><span class="item-icon">📖</span>9.2 Address Spaces</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/09_9.3_VM_as_a_Tool_for_Caching" class="collapsible-item">
            <span><span class="item-icon">📖</span>9.3 VM as a Tool for Caching</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/09_9.4_VM_as_a_Tool_for_Memory_Management" class="collapsible-item">
            <span><span class="item-icon">📖</span>9.4 VM as a Tool for Memory Management</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/09_9.5_VM_as_a_Tool_for_Memory_Protection" class="collapsible-item">
            <span><span class="item-icon">📖</span>9.5 VM as a Tool for Memory Protection</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/09_9.6_Address_Translation" class="collapsible-item">
            <span><span class="item-icon">📖</span>9.6 Address Translation</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/09_9.7_Case_Study_Intel_Core_i7_Linux" class="collapsible-item">
            <span><span class="item-icon">📖</span>9.7 Case Study: The Intel Core i7/Linux Memory System</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/09_9.8_Memory_Mapping" class="collapsible-item">
            <span><span class="item-icon">📖</span>9.8 Memory Mapping</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/09_9.9_Dynamic_Memory_Allocation" class="collapsible-item">
            <span><span class="item-icon">📖</span>9.9 Dynamic Memory Allocation</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/09_9.10_Garbage_Collection" class="collapsible-item">
            <span><span class="item-icon">📖</span>9.10 Garbage Collection</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/09_9.11_Common_Memory_Related_Bugs" class="collapsible-item">
            <span><span class="item-icon">📖</span>9.11 Common Memory-Related Bugs in C Programs</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/09_9.12_Summary" class="collapsible-item">
            <span><span class="item-icon">📖</span>9.12 Summary</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
    </div>
</div>

<div class="collapsible">
    <div class="collapsible-header">
        <strong><span class="collapsible-icon">📚</span>10. System-Level I/O<span class="collapsible-count">(11)</span></strong>
        <span class="collapsible-toggle"><span>收起</span><span class="toggle-icon">▼</span></span>
    </div>
    <div class="collapsible-content">
        <a href="../csapp/10_10.1_Unix_I_O" class="collapsible-item">
            <span><span class="item-icon">📖</span>10.1 Unix I/O</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/10_10.2_Files" class="collapsible-item">
            <span><span class="item-icon">📖</span>10.2 Files</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/10_10.3_Opening_and_Closing_Files" class="collapsible-item">
            <span><span class="item-icon">📖</span>10.3 Opening and Closing Files</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/10_10.4_Reading_and_Writing_Files" class="collapsible-item">
            <span><span class="item-icon">📖</span>10.4 Reading and Writing Files</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/10_10.5_Robust_Reading_and_Writing_with_Rio" class="collapsible-item">
            <span><span class="item-icon">📖</span>10.5 Robust Reading and Writing with the Rio Package</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/10_10.6_Reading_File_Metadata" class="collapsible-item">
            <span><span class="item-icon">📖</span>10.6 Reading File Metadata</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/10_10.7_Reading_Directory_Contents" class="collapsible-item">
            <span><span class="item-icon">📖</span>10.7 Reading Directory Contents</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/10_10.8_Sharing_Files" class="collapsible-item">
            <span><span class="item-icon">📖</span>10.8 Sharing Files</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/10_10.9_I_O_Redirection" class="collapsible-item">
            <span><span class="item-icon">📖</span>10.9 I/O Redirection</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/10_10.10_Standard_I_O" class="collapsible-item">
            <span><span class="item-icon">📖</span>10.10 Standard I/O</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/10_10.11_Which_I_O_Functions_Should_I_Use" class="collapsible-item">
            <span><span class="item-icon">📖</span>10.11 Putting It Together: Which I/O Functions Should I Use?</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/10_10.12_Summary" class="collapsible-item">
            <span><span class="item-icon">📖</span>10.12 Summary</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
    </div>
</div>

<div class="collapsible">
    <div class="collapsible-header">
        <strong><span class="collapsible-icon">📚</span>11. Network Programming<span class="collapsible-count">(7)</span></strong>
        <span class="collapsible-toggle"><span>收起</span><span class="toggle-icon">▼</span></span>
    </div>
    <div class="collapsible-content">
        <a href="../csapp/11_11.1_Client_Server_Model" class="collapsible-item">
            <span><span class="item-icon">📖</span>11.1 The Client-Server Programming Model</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/11_11.2_Networks" class="collapsible-item">
            <span><span class="item-icon">📖</span>11.2 Networks</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/11_11.3_The_Global_IP_Internet" class="collapsible-item">
            <span><span class="item-icon">📖</span>11.3 The Global IP Internet</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/11_11.4_The_Sockets_Interface" class="collapsible-item">
            <span><span class="item-icon">📖</span>11.4 The Sockets Interface</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/11_11.5_Web_Servers" class="collapsible-item">
            <span><span class="item-icon">📖</span>11.5 Web Servers</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/11_11.6_Putting_It_Together_Tiny_Web_Server" class="collapsible-item">
            <span><span class="item-icon">📖</span>11.6 Putting It Together: The Tiny Web Server</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/11_11.7_Summary" class="collapsible-item">
            <span><span class="item-icon">📖</span>11.7 Summary</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
    </div>
</div>

<div class="collapsible">
    <div class="collapsible-header">
        <strong><span class="collapsible-icon">📚</span>12. Concurrent Programming<span class="collapsible-count">(7)</span></strong>
        <span class="collapsible-toggle"><span>收起</span><span class="toggle-icon">▼</span></span>
    </div>
    <div class="collapsible-content">
        <a href="../csapp/12_12.1_Concurrent_Programming_with_Processes" class="collapsible-item">
            <span><span class="item-icon">📖</span>12.1 Concurrent Programming with Processes</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/12_12.2_Concurrent_Programming_with_I_O_Multiplexing" class="collapsible-item">
            <span><span class="item-icon">📖</span>12.2 Concurrent Programming with I/O Multiplexing</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/12_12.3_Concurrent_Programming_with_Threads" class="collapsible-item">
            <span><span class="item-icon">📖</span>12.3 Concurrent Programming with Threads</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/12_12.4_Shared_Variables_in_Threaded_Programs" class="collapsible-item">
            <span><span class="item-icon">📖</span>12.4 Shared Variables in Threaded Programs</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/12_12.5_Synchronizing_Threads_with_Semaphores" class="collapsible-item">
            <span><span class="item-icon">📖</span>12.5 Synchronizing Threads with Semaphores</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/12_12.6_Using_Threads_for_Parallelism" class="collapsible-item">
            <span><span class="item-icon">📖</span>12.6 Using Threads for Parallelism</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/12_12.7_Other_Concurrency_Issues" class="collapsible-item">
            <span><span class="item-icon">📖</span>12.7 Other Concurrency Issues</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../csapp/12_12.8_Summary" class="collapsible-item">
            <span><span class="item-icon">📖</span>12.8 Summary</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
    </div>
</div>

<div class="collapsible">
    <div class="collapsible-header">
        <strong><span class="collapsible-icon">🔬</span>CSAPP Labs 实验打卡<span class="collapsible-count">(7)</span></strong>
        <span class="collapsible-toggle"><span>收起</span><span class="toggle-icon">▼</span></span>
    </div>
    <div class="collapsible-content">
        <a href="../csapp/Lab/0-配置环境" class="collapsible-item">
            <span><span class="item-icon">🧪</span>实验相关配置与备注</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="#" class="collapsible-item">
            <span><span class="item-icon">🧪</span>Lab1: DataLab 位运算实验</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="#" class="collapsible-item">
            <span><span class="item-icon">🧪</span>Lab2: BombLab 拆炸弹实验</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="#" class="collapsible-item">
            <span><span class="item-icon">🧪</span>Lab3: AttackLab 缓冲区溢出攻击</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="#" class="collapsible-item">
            <span><span class="item-icon">🧪</span>Lab4: CacheLab 高速缓存实验</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="#" class="collapsible-item">
            <span><span class="item-icon">🧪</span>Lab5: ShellLab 简易Shell实现</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="#" class="collapsible-item">
            <span><span class="item-icon">🧪</span>Lab6: MallocLab 动态内存分配</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="#" class="collapsible-item">
            <span><span class="item-icon">🧪</span>Lab7: ProxyLab 并发代理服务器</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
    </div>
</div>




