---
hide:
    - toc
    - navigation
title: A tour of C++
---
!!! tip "A tour of C++"
    C++之父 Bjarne Stroustrup 写给“有经验的程序员”的一本小书。全书共 14 章，从基础类型、函数、用户自定义类型讲起，逐步深入到类、模板、容器、算法、流、并发等核心内容。第二版基于 C++11/14，也前瞻性地提到了部分 C++17/20 特性。

<div class="schedule-wrapper">
    <table class="schedule-table">
        <thead>
            <tr>
                <th>日期</th>
                <th>章节</th>
                <th>学习内容</th>
                <th>练习/实验</th>
            </tr>
        </thead>
        <tbody>
            <tr class="week-separator"></tr>
            <tr>
                <td>第1天</td>
                <td><span class="schedule-chap">Ch.1+2</span></td>
                <td>C++基础速览；用户自定义类型（struct/class, enum, union）</td>
                <td></td>
            </tr>
            <tr>
                <td>第2天</td>
                <td><span class="schedule-chap">Ch.3+4</span></td>
                <td>模块化、命名空间；类设计、构造/析构、运算符重载、const正确性</td>
                <td></td>
            </tr>
            <tr>
                <td>第3天</td>
                <td><span class="schedule-chap">Ch.5</span></td>
                <td>模板、泛型编程、Concepts</td>
                <td><span class="schedule-lab"><strong><a href="Lab_1_Generic_Stack/Guide">小练习①：泛型栈</strong></a><br>实现模板类 Stack&lt;T&gt;，支持
                        push/pop/top，并测试</span></td>
            </tr>
            <tr>
                <td>第4天</td>
                <td><span class="schedule-chap">Ch.6+7</span></td>
                <td>标准库概览；字符串与正则表达式</td>
                <td></td>
            </tr>
            <tr>
                <td>第5天</td>
                <td><span class="schedule-chap">Ch.8+9+10</span></td>
                <td>I/O流、容器、算法</td>
                <td><span class="schedule-lab"><strong><a href="Lab_2_Grep/Guide">小练习②：小型 grep 命令行工具</strong></a><br>实现一个简化版的 grep 命令行工具：<br>
                读取一个或多个文本文件，输出其中匹配指定正则表达式的行</span></td>
            </tr>
            <tr>
                <td>第6天</td>
                <td><span class="schedule-chap">Ch.11+12+13</span></td>
                <td>智能指针、并发、数值库</td>
                <td></td>
            </tr>
            <tr>
                <td>第7天及之后</td>
                <td><span class="schedule-chap">Ch.14 + 综合</span></td>
                <td>现代C++思想回顾、项目实战</td>
                <td><span class="schedule-lab"><strong><a href="Project/Guide">大项目：Concurrent Word Counter</strong><br></a>多线程并行统计多个文件，使用智能指针管理资源，输出结果到文件</span></td>
            </tr>
        </tbody>
    </table>
</div>


<div class="collapsible">
    <div class="collapsible-header">
        <strong><span class="collapsible-icon">📚</span>A Tour of C++ (2nd Edition)<span class="collapsible-count">(14)</span></strong>
        <span class="collapsible-toggle"><span>收起</span><span class="toggle-icon">▼</span></span>
    </div>
    <div class="collapsible-content">
        <a href="../tour/1_Basic" class="collapsible-item">
            <span><span class="item-icon">📖</span>1. The Basic</span>
            <span class="item-badge item-badge-incomplete">❌</span>
        </a>
        <a href="../tour/2_User-Defined_Types" class="collapsible-item">
            <span><span class="item-icon">📖</span>2. User-Defined Types</span>
            <span class="item-badge item-badge-complete">✅</span>
        </a>
        <a href="../tour/3_Modularity" class="collapsible-item">
            <span><span class="item-icon">📖</span>3. Modularity</span>
            <span class="item-badge item-badge-complete">✅</span>
        </a>
        <a href="../tour/4_Classes" class="collapsible-item">
            <span><span class="item-icon">📖</span>4. Classes</span>
            <span class="item-badge item-badge-incomplete">❌</span>
        </a>
        <a href="../tour/5_Templates" class="collapsible-item">
            <span><span class="item-icon">📖</span>5. Templates</span>
            <span class="item-badge item-badge-incomplete">❌</span>
        </a>
        <a href="../tour/6_Library_Overview" class="collapsible-item">
            <span><span class="item-icon">📖</span>6. Library Overview</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../tour/7_Strings_and_Regular_Expressions" class="collapsible-item">
            <span><span class="item-icon">📖</span>7. Strings and Regular Expressions</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../tour/8_IO_Streams" class="collapsible-item">
            <span><span class="item-icon">📖</span>8. I/O Streams</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../tour/9_Containers" class="collapsible-item">
            <span><span class="item-icon">📖</span>9. Containers</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../tour/10_Algorithms" class="collapsible-item">
            <span><span class="item-icon">📖</span>10. Algorithms</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../tour/11_Utilities" class="collapsible-item">
            <span><span class="item-icon">📖</span>11. Utilities</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../tour/12_Numerics" class="collapsible-item">
            <span><span class="item-icon">📖</span>12. Numerics</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../tour/13_Concurrency" class="collapsible-item">
            <span><span class="item-icon">📖</span>13. Concurrency</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
        <a href="../tour/14_History_and_Compatibility" class="collapsible-item">
            <span><span class="item-icon">📖</span>14. History and Compatibility</span>
            <span class="item-badge item-badge-incomplete">❌ 🔒</span>
        </a>
    </div>
</div>