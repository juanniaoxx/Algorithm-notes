#include <iostream>
#include <algorithm>
#include <initializer_list>   // 显式包含

class Vector {
public:
    Vector(int s) : elem{new double[s]}, sz{s} {}
    Vector(std::initializer_list<double> lst) 
        : elem{new double[lst.size()]}, sz{static_cast<int>(lst.size())} {
        std::copy(lst.begin(), lst.end(), elem);
    }
    double& operator[](int i) { return elem[i]; }
    int size() const { return sz; }
private:
    double* elem;
    int sz;
};

class Container {
public:
    virtual double& operator[](int) = 0;
    virtual int size() const = 0;
    virtual ~Container() {}
};

class Vector_container : public Container {
    Vector v;
public:
    Vector_container(int s) : v(s) {}                     // 原有的构造函数
    Vector_container(std::initializer_list<double> lst)   // 新增的构造函数
        : v(lst) {}                                       // 直接传递给 Vector 的 initializer_list 构造函数
    ~Vector_container() {}

    double& operator[](int i) override { return v[i]; }
    int size() const override { return v.size(); }
};

void use(Container& c) {
    const int sz = c.size();
    for (int i = 0; i != sz; ++i)
        std::cout << c[i] << '\n';
}

void g() {
    Vector_container vc {1, 2, 3, 4, 5, 6, 7, 8};   // 现在可以使用花括号初始化
    use(vc);
}

int main() {
    g();
    return 0;
}