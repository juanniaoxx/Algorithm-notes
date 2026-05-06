/*
    类(class) 的基本演示
*/

#include <iostream>

class Vector {
    public:
        Vector(int s): elem{new double[s]}, sz{s} {} // constructor functions(构造函数)
        double& operator[](int i) {return elem[i];} // 重载运算符
        int size() {return sz;} 
    private:
        double* elem;
        int sz;
};