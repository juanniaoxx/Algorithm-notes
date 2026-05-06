---
hide:
    - toc
    - navigation
title: User-Defined Types
---

!!! tip "Reading TextBook"
    [Chapter 2 User-Defined Types](PDF/chapter_2.pdf)

!!! info "Core Contents"
    - Structures (struct)
    - Classes & Encapsulation
    - Unions
    - Enumerations (enum / enum class)

!!! info "Further Reading"
    For more advanced and detailed explanations, see:

    - [C++ Primer Chapter 7: Classes](../primer/7_class.md)  
      (Corresponds to struct, class, constructor, interface/implementation separation)
    - [C++ Primer Chapter 19.3: Enumerations](../primer/19_enum.md)  
    - [C++ Primer Chapter 19.4: Unions](../primer/19_union.md)

!!! tip "Key Advice"
    === "Advice 1"
        **Organize related data into structures (struct/class).** 模块化编程
    === "Advice 2"
        **Use classes to separate interface and implementation.** 暴露尽可能少的实现给用户，仅仅让用户知道如何使用即可 
        ```c++
        #include <iostream>

        class Vector {
            public:
            // interface is deined by the public members of a class 
                Vector(int s): elem{new double[s]}, sz{s} {} // constructor functions(构造函数)
                double& operator[](int i) {return elem[i];} // 重载运算符
                int size() {return sz;} 
            private:
            // private members are accessible only through that interface. 
                double* elem;
                int sz;
        };
        ```
    === "Advice 3"
        **A struct is a class with public by default.** 结构体 ｜ 类本质上没有区别. 

    === "Advice 4"
        **Define constructors to guarantee initialization.** 关于构造函数的更详细内容见[C++ primer chapter 7.5 Constructors Revisited](#) 

    === "Advice 5"
        **Avoid naked unions; wrap them with a type field.** 为什么要避免裸的联合体呢？因为 C++并不会跟踪用户如何使用这个联合体，如果用户使用了错误的类型编译器并不会处理，这就可能导致未定义行为甚至错误。 

        联合体`union`,其中的成员共享相同的内存地址，具体数据长度区别距最长的类型。引入联合体的目的是将互斥访问的数据的空间给省下来。

        ```c++
        enum Type {str, num};
        
        struct Entry
        {
            char* name;
            Type t;
            char* s; // use s if t==str
            int i; // use i if t==int  
        };

        void f(Entry* p) {
            if (p->t == str) count << p->s; // 我们发现 s 和 i 不可能同时访问此时就可以将两者压缩一下
            // ....
        }

        // 使用 Union 
        union Value{
            char* s;
            int i;
        };

        struct Entry
        {
            char* name;
            Type t;
            Value v;  
        };

        void f(Entry* p) {
            if(p->t == str) cout << p->v.s // 使用联合体前进行类型检查
        }
        ```
    === "Advice 6"
        **Prefer `enum class` over plain `enum` for type safety** 

        ```c++
        enum class Color {red, blue, green};
        enum class Traffic_light {green, yellow, red};

        Color col = Color::red; // enum class 具有作用域，需要用::来使用
        Traffic_light light = Traffic_light::red; 

        Color x = red; // error: enum class 具有作用域
        Color y = Traffic_light::red; // error: enum class 不允许跨域使用

        // enum 和 enum class 的主要差别在对 int 的处理上面
        enum Color_plain {red, green, blue};
        int col = green; // 会被赋值为 1 
        int i = Color::red; // error Color::red is not an int 
        ```