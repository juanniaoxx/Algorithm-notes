#include <iostream>

class complex{
    double re, im; // class 默认成员是 private 
    public:
        complex(double r, double i) : re{r}, im{i} {}
        complex(double r) : re{r}, im{0} {}
        complex() : re{0}, im{0} {}

        double real() const { return re; }
        void read(double d) { re = d; }
        double imag() const { return im; }
        void imag(double d) { im = d; }

        // complex a(1, 2), b(3, 4)
        // a += b; 调用 a.operator+=(b)
        // this 指向调用对象即 a
        complex& operator+=(complex z) { re += z.re, im += z.im; return *this; } 

        complex& operator-=(complex z) { re -= z.re, im -= z.im; return *this; }

        complex& operator*=(complex);

        complex& operator/=(complex);
};