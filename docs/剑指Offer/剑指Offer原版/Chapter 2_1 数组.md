---
tags: [剑指Offer]
---
# 面试需要的基本知识

!!! note "基础知识" 
    - 一门编程语言(比如C++)
      - 例如面向对象,构造函数,析构函数,动态绑定,内存分布等等
    - 软件工程例如:设计模式,UML等等
    - 数据结构与算法: 数组,链表,树,图,排序,查找,动态规划,贪心等; 时空复杂度; 算法设计 
        - 字符串相关的内容考察频率较高
    - 数学知识: 线代和概率(AI)
    - 并发控制
    - 计算机体系结构的基本知识(机组+OS)

## 数据结构

!!! note "本章的重点内容"
    - 数组
    - {==字符串==}
    - {==链表==}
    - {==树==}
    - 栈以及队列
    - 图

## 数据结构
在C++中通常不使用C-style的数组而使用标准库中的`vector`; 数组访问必须要注意是否越界. 

### Q3 数组中的重复数字
!!! Question "剑指Offer 3 数组中的重复数字" 
    
    [LCR 120. 寻找文件副本](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/description/)

    在一个长度为 n 的数组里的所有数字都在 0 到 n-1 的范围内.数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次.请找出数组中任意一个重复的数字.
    
    例如，如果输入长度为 7 的数组 [2,3,1,0,2,5,3]，那么对应的输出是重复的数字2或者3.

具体实现见代码. 这道题比较特殊的点在于数据都位于`0~n-1`之间,考虑`鸽巢原理`,可以通过一种类似于原地hash的办法确定是否有元素重复. 

!!! note "鸽巢原理"
    若有n个鸽巢、超过n只鸽子，则至少有一个巢里≥2只鸽子

!!! Question 3 "不修改数组找出重复数字"

    [Leetcode 287.寻找重复数](https://leetcode.cn/problems/find-the-duplicate-number/description/)

    在一个长度为 n+1 的数组里，所有数字都在 1∼n 的范围内。数组中至少有一个重复.请找出数组中任意一个重复数字,
    但{==不能修改输入==}的数组. 

    例如,如果输入长度为8的数组{2, 3, 5, 4, 3, 2, 6, 7}那么对应的输出是重复数字2或者3.

#### {++Solution 1: 类二分查找++}
算法思路: 由于数组长度为`n+1`,而数据范围是`1~n`则必然存在至少一个重复数字, 不妨考虑如下情况,将{==数字==}划分为`1~m`和`m+1~n`, 如果{==数组==}中位于 $1 \leq x \leq m$ 的数字大于m则重复数字必然位于 `1~m`中;否则必然位于 `m+1~n` 中,类似于二分. 

注意这个算法并不能求出 {++所有++}重复的数字,例如对于输入 `{2, 3, 5, 4, 3, 2, 6, 7}` 这是由于`1~2`范围内出现的次数为2,无法确定是出现了`1,2`还是`2`重复了两次.
#### {++Solution 2: Floyd判圈法++}
算法思路: 为每个位置`i`建立一条`i->nums[i]`的边,由于必然存在重复数字,故一定会有环. 此时问题就变成了对于有环的链表如何确定其入口(Floyd判断法 相关习题连接 [leetcode 142.环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode/)).

!!! note "Floyd判圈法"
    
    - 判断链表是否有环
    - 若存在,则找出环的入口
    - 时间复杂度O(n) 空间复杂度O(1)

    算法流程: 
    
    - 令 `slow = fast = head`
    - 循环 `slow = slow->next, fast = fast->next->next` 快指针一次走两步,慢指针一次走一次
        - 若`fast == nullptr || fast->next == nullptr`
        - 若`fast == slow` 则必然有环
    - 令`fast = head`,然后循环`fast = fast->next, slow = slow->next`, 即快慢指针同步移动
        - 再次相遇点即为环入口 

    {++证明++} 设`L`链表头到环入口的距离,`C`为环的长度,`P`相遇的时候慢指针在环内走的距离 

    - 速度关系 $2s_{慢} = s_{快}$, 在相遇的情况下 $s_{慢} = L + P, s_{快} = L + P + kC$,其中
    k是快指针走过的圈数, 联立上面可以解出 $L=kC-P$
    - 此时将`fast`移会链表头,再到入口的时候快慢指针同步移动`L`,而通过上述结论可知 `L = -P(mod\ C)` 恰好位于入口处
#### {++Solution 3: 位图法++}

### Q4 二维数组中的查找
[leetcode 240 搜索二维矩阵II](https://leetcode.cn/problems/search-a-2d-matrix-ii/description/)

!!! question "二维数组中的查找"

    在一个二维数组中,每一行,每一列均按照递增的顺序排序.完成一个函数,输入这样的一个二维数组和一个
    整数,判断数组中是否含有该整数.

    Input:

    1 2 8 9

    2 4 9 12
    
    4 7 10 13
    
    6 8 11 15
    
    7 
    
    Output:
    
    Yes

??? solution "解答"
    === "cpp"

    ```cpp
    bool searchMatrix(std::vector<std::vector<int>>& matrix, int target) {
        // 从右上角开始搜索
        int m = matrix.size(); 
        int n = matrix[0].size();

        bool found = false;
        
        if (!matrix.empty() && m > 0 && n > 0) {
            int i = 0, j = n - 1;
            while(i < m && j >= 0) {
                if(matrix[i][j] == target) {
                    found = true; // 右上角元素是待查找元素
                    break;
                }else if(matrix[i][j] > target) --j; // 如果右上角元素大于目标值可以直接舍弃该列的全部元素
                else ++i; // 如果右上角元素小于目标值,则可以舍去这一行的全部元素
            }
        }

        return found;
    }
    ```