#ifndef STACK_TPP
#define STACK_TPP

#include "Stack.h"
#include <new>          // for placement new

// ==================== 构造 / 析构 ====================
template <typename T>
Stack<T>::Stack()
    : Stack(8)   // 委托构造
{
    // TODO: 无需额外代码（委托给 explicit 构造函数）
}

template <typename T>
Stack<T>::Stack(size_t capacity)
    : data_(nullptr), capacity_(capacity), size_(0)
{
    // TODO: 
    // 1. 若 capacity_ == 0，则将其设为 1
    // 2. 使用 ::operator new 分配 capacity_ * sizeof(T) 字节的原始内存
    // 3. 将地址赋给 data_
}

template <typename T>
Stack<T>::~Stack()
{
    // TODO:
    // 1. 调用 destroy() 析构所有元素
    // 2. 使用 ::operator delete 释放 data_ 指向的原始内存
}

// ==================== 拷贝控制 ====================
template <typename T>
Stack<T>::Stack(const Stack& other)
    : data_(nullptr), capacity_(other.capacity_), size_(other.size_)
{
    // TODO:
    // 1. 分配 capacity_ * sizeof(T) 原始内存
    // 2. 对于 i = 0 到 size_-1，使用 placement new 拷贝构造 other.data_[i]
}

template <typename T>
Stack<T>& Stack<T>::operator=(const Stack& other)
{
    // TODO: 使用 copy-and-swap 惯用法
    // 1. 检查自赋值（this == &other）
    // 2. 创建局部副本 Stack<T> tmp(other);
    // 3. 调用 swap(tmp);
    // 4. 返回 *this
    // （已提供结构，请填充）
    if (this == &other) return *this;
    Stack<T> tmp(other);
    swap(tmp);
    return *this;
}

// ==================== 移动语义 ====================
template <typename T>
Stack<T>::Stack(Stack&& other) noexcept
    : data_(nullptr), capacity_(0), size_(0)
{
    // TODO: 直接交换，接管 other 的资源
    swap(other);
}

template <typename T>
Stack<T>& Stack<T>::operator=(Stack&& other) noexcept
{
    // TODO: 
    // 1. 检查自赋值
    // 2. 释放自身资源（destroy + ::operator delete data_）
    // 3. 将自身成员置零（可选）
    // 4. 交换与 other 的内容（或直接移动成员）
    if (this == &other) return *this;
    destroy();
    ::operator delete(data_);
    data_ = nullptr;
    capacity_ = size_ = 0;
    swap(other);
    return *this;
}

// ==================== 核心操作 ====================
template <typename T>
void Stack<T>::push(const T& value)
{
    // TODO:
    // 1. 若 size_ == capacity_，调用 resize()
    // 2. 在 data_ + size_ 位置使用 placement new 拷贝构造 value
    // 3. ++size_;
}

template <typename T>
void Stack<T>::push(T&& value)
{
    // TODO: 类似 push(const T&)，但使用 std::move(value) 进行移动构造
}

template <typename T>
void Stack<T>::pop()
{
    // TODO:
    // 1. 若 empty() 为真，抛出 std::out_of_range("Stack::pop(): empty stack")
    // 2. 调用栈顶元素的析构函数 data_[size_-1].~T()
    // 3. --size_;
}

template <typename T>
T& Stack<T>::top()
{
    // TODO:
    // 1. 若 empty() 为真，抛出 std::out_of_range("Stack::top(): empty stack")
    // 2. 返回 data_[size_-1]
}

template <typename T>
const T& Stack<T>::top() const
{
    // TODO: 同上，返回 const 引用
}

// ==================== 辅助功能 ====================
template <typename T>
bool Stack<T>::empty() const
{
    // TODO: 返回 size_ == 0
}

template <typename T>
size_t Stack<T>::size() const
{
    // TODO: 返回 size_
}

template <typename T>
void Stack<T>::clear()
{
    // TODO: 循环调用 pop() 直至空栈
}

// ==================== 私有辅助方法 ====================
template <typename T>
void Stack<T>::resize()
{
    // TODO:
    // 1. 新容量 new_cap = capacity_ * 2
    // 2. 分配 new_cap * sizeof(T) 原始内存
    // 3. 将旧元素（0 到 size_-1）移动构造到新内存（使用 std::move）
    // 4. 析构旧元素（调用 ~T()）
    // 5. 释放旧内存
    // 6. 更新 data_, capacity_, size_（size_ 不变）
}

template <typename T>
void Stack<T>::destroy()
{
    // TODO:
    // 遍历 i = 0 到 size_-1，调用 data_[i].~T()
    // （注意：不释放 data_ 内存，也不重置 size_，但通常重置 size_=0 更安全）
    for (size_t i = 0; i < size_; ++i) {
        data_[i].~T();
    }
    size_ = 0;
}

template <typename T>
void Stack<T>::swap(Stack& other) noexcept
{
    // TODO: 交换三个成员
    using std::swap;
    swap(data_, other.data_);
    swap(capacity_, other.capacity_);
    swap(size_, other.size_);
}

// ==================== 全局 swap 重载 ====================
template <typename T>
void swap(Stack<T>& lhs, Stack<T>& rhs) noexcept
{
    lhs.swap(rhs);
}

#endif // STACK_TPP