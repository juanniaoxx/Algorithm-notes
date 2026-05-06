#ifndef STACK_H
#define STACK_H

#include <cstddef>
#include <stdexcept>
#include <utility>

template <typename T>
class Stack {
public:
    // ----- 构造 / 析构 -----
    Stack();                         // 默认构造，容量初始为 8
    explicit Stack(size_t capacity); // 预分配容量
    ~Stack();

    // ----- 拷贝控制 -----
    Stack(const Stack& other);
    Stack& operator=(const Stack& other);

    // ----- 移动语义 -----
    Stack(Stack&& other) noexcept;
    Stack& operator=(Stack&& other) noexcept;

    // ----- 核心操作 -----
    void push(const T& value);       // 拷贝插入
    void push(T&& value);            // 移动插入
    void pop();                      // 弹出，空栈抛 std::out_of_range
    T& top();                        // 栈顶引用
    const T& top() const;

    // ----- 辅助功能 -----
    bool empty() const;
    size_t size() const;
    void clear();                    // 清空所有元素

    // ----- 交换（供 copy-and-swap 使用）-----
    void swap(Stack& other) noexcept;

private:
    T*      data_;       // 指向动态数组的指针
    size_t  capacity_;   // 已分配内存可容纳的元素个数
    size_t  size_;       // 当前元素个数

    void resize();       // 扩容（容量翻倍）
    void destroy();      // 析构所有存活元素，不释放内存
};

// 提供全局 swap 以便 ADL
template <typename T>
void swap(Stack<T>& lhs, Stack<T>& rhs) noexcept;

#include "Stack.tpp"   // 包含模板实现

#endif // STACK_H