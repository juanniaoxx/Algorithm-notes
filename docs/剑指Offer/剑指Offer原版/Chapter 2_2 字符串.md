---
tags: [剑指Offer]
---
# 基础知识-字符串

`C-style string` 以`\0`结尾的字符数组在现代cpp中一般不建议使用,除非明确要和老代码兼容.

即使要兼容标准库也提供`c_str()`函数将`string`类对象转换为`c-style`风格的字符数组. 

有关`cpp-string`的更多内容见[std::basic_string](https://en.cppreference.com/w/cpp/string/basic_string.html)

## Q5 替换空格

!!! question "替换空格"
    实现一个函数,把字符串中的每个空格替换成"%20".例如,输入"We are happy",则输出"We%20are%20happy".

这道题主要的难点在于' '只有一个字符而要替换的能容"%20"有三个字符,如果直接覆写会导致原字符串的内容丢失.
### 解法1 从前往后移动
每次遇到空格就移动空格后的 {==所有==} 字符并插入"%20", 考虑最差情况,即n个空格的字符串,此时需要移动的总代价为 $O(n^2)$ ,显然十分糟糕. 

### 解法2 从后往前复制
考虑到最终字符串的长度应该等于 原长度+空格个数*2, 不妨先预设一个足够的字符串.然后设置两个指针`p1,p2`,其中`p2`指向结果字符串的最后一个元素,`p1`指向原字符串的最后一个元素.

- 同步移动`p1,p2`并将非空格内容复制进答案字符串
- 若为空格,则`p2`向前移动并将`%20`加入答案字符串
- 重复上述操作,直到原始字符串复制完毕

时间复杂度 $O(n)$; 空间复杂度 $O(n)$

??? solution "代码"
    === "cpp"

    ```cpp
    #include <string>
    #include <cstddef>

    std::string pathEncryption(std::string path) {
        std::size_t cnt = 0;
        for (auto ch : path) {
            if (ch == ' ') ++cnt;
        }

        if (cnt == 0) return path; // 不含空格

        const std::size_t old_sz = path.size();
        const std::size_t new_sz = old_sz + 2 * cnt;
        std::string ans;
        ans.reserve(new_sz); // 分配内存
        ans.resize(new_sz);

        // 使用方向迭代器
        auto it = path.rbegin(); 
        auto dest = ans.rbegin();

        for(; it != path.rend(); ++it) {
            if (*it == ' ') {
                *dest++ = '0';
                *dest++ = '2';
                *dest++ = '%';
            } else *dest++ = *it;
        }

        return ans;
    }
    ```
