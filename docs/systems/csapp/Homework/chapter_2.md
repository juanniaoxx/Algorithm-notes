---
hide:
    - toc
    - navigation
title: Chapter 2 Homework
---

=== "Bit-Level Integer Coding Rules"
    In serveral of the following problems, we will artificially restrict what programming constructs you can use to help you gain a better understanding of the bit-level, logic, and arithmetic operations of C. In answering these problems, you code must follow these rules:

    **Assumptions**

    - Integers are represented in two’s-complement form.
    - Right shifts of signed data are performed arithmetically.
    - Data type int is w bits long. You can use `sizeof(int)<<3` to compute w.

    **Forbidden**

    - Conditionals (if or ?:), loops, switch statements, function calls, macro invocations.
    - Division, modulus, and multiplication.
    - Relative comparison operators (<, >, <=, >=).

    **Allowed**

    - All bit-level and logic operations.
    - Left and right shifts (shift amount 0 ~ w-1).
    - Addition and subtraction.
    - Equality (==) and inequality (!=) tests (some problems forbid these).
    - Integer constants INT_MIN and INT_MAX.
    - Casting between int and unsigned.

=== "字节序与内存表示"
    对应知识点: 
    
    - [字节序-大小端表示法](../02_2.1_Information_Storage.md#大小端表示法)
    === "2.55 🌟"
        Compile and run the sample code that uses show_bytes (file show-bytes.c) on different machines to which you have access. Determine the byte orderings used by these machines.
        

    === "2.57 🌟"
        Write procedures show_short, show_long, and show_double that print the byte representations of C objects of types short, long, and double, respectively. Try these out on several machines.

    === "2.58 🌟"
        Write a procedure is_little_endian that will return 1 when compiled and run on a little-endian machine, and will return 0 when compiled and run on a big-endian machine. This program should run on any machine, regardless of its word size.

=== "位操作基础与掩码"
    === "2.59 🌟🌟"
        Write a C expression that will yield a word consisting of the least significant byte of x and the remaining bytes of y.
        For operands x = 0x89ABCDEF and y = 0x76543210, this would give 0x765432EF.

    === "2.60 🌟🌟"
        Suppose we number the bytes in a w-bit word from 0 (least significant) to w/8 − 1 (most significant).
        Write code for the following C function, which will return an unsigned value in which byte i of argument x has been replaced by byte b:
        ```c
        unsigned replace_byte(unsigned x, int i, unsigned char b);
        ```
        Here are some examples showing how the function should work:
        
        - replace_byte(0x12345678, 2, 0xAB) --> 0x12AB5678
        - replace_byte(0x12345678, 0, 0xAB) --> 0x123456AB

        Even with these rules, you should try to make your code readable by choosing descriptive variable names and using comments to describe the logic behind your Solutions. As an example, the following code extracts the most significant byte from integer argument x:

        ```c
        /* Gunsigned sr1(unsigned x, int k) et most significant byte from x*/{
            // Perform shift arithmetically
            unsigned xsra = (int) x >> k; 
            // to do 
        }

        int sra(int x, int k) {
            // perform shift logically
            int xsrl = (unsigned) x >> k;
            // to do 
        }
        int get_msb(int x) {


            // Shift by w-8
            int shift_val = (sizeof(int) -1) << 3;
            // Arithmetic shift
            int xright = x >> shift_val;
            // zero all but lsb
            return xright & 0xFF;
        }
        ```
    === "2.61 🌟🌟"
        Write C expressions that evaluate to 1 when the following conditions are true and to 0 when they are false. Assume x is of type int.

        - A. Any bit of x equals 1.
        - B. Any bit of x equals 0.
        - C. Any bit in the least significant byte of x equals 1.
        - D. Any bit in the most significant byte of x equals 0.

        your code should follow the bit-level integer coding rules(page 164), with the additional restriction that you may not use equality (==) or inequality (!=)test.

    === "2.64 🌟🌟"

        Write code to implement the following function (assume w=32):
        
        ```c
        /* Return 1 when any odd bit of x equals 1; 0 otherwise.  Assume w=32 */
        int any_odd_one(unsigned x);
        ```
        Your function should follow the bit-level integer coding rules, except that you may assume that data type `int` has w = 32 bits.


    === "2.81 🌟🌟"
        Generate bit patterns (w-bit word):
        A. 1^(w−k) 0^k
        B. 0^(w−k−j) 1^k 0^j

=== "复杂位运算（有限操作数）"
    === "2.65 🌟🌟🌟"
        Write code to implement the following function (assume w=32):
        ```c
        /* Return 1 when x contains an odd number of 1s; 0 otherwise. */
        int odd_ones(unsigned x);
        ```
        Your code should contain at most **12 arithmetic, bitwise, and logical operations**.

    === "2.66 🌟🌟🌟"
        Write code to implement the following function (assume w=32):
        ```c
        /*
        * Generate mask indicating leftmost 1 in x.
        * Example: 0xFF00 -> 0x8000, 0x6600 -> 0x4000
        * If x = 0, return 0.
        */
        int leftmost_one(unsigned x);
        ```
        At most **15 operations**.
        Hint: First transform x into a bit vector of the form [0…011…1].

    === "2.68 🌟🌟"
        ```c
        /*
        * Mask with least significant n bits set to 1
        * Example: n=6 → 0x3F, n=17 → 0x1FFFF
        * Assume 1 ≤ n ≤ w
        */
        int lower_one_mask(int n);
        ```
        Be careful with n = w.

    === "2.69 🌟🌟🌟"
        ```c
        /*
         * Do rotating left shift. Assume 0 ≤ n < w
         * Example: x=0x12345678, w=32
         * n=4 → 0x23456781
         * n=20 → 0x67812345
         */
        unsigned rotate_left(unsigned x, int n);
        ```
        Be careful with n=0.

=== "移位与算术右移"
    === "2.62 🌟🌟🌟"
        Write a function `int_shifts_are_arithmetic()` that yields 1 when run on a machine that uses arithmetic right shifts for data type int and yields 0 otherwise. Your code should work on a machine with any word size. Test your code on several machines.

    === "2.63 🌟🌟🌟"
        Fill in code for the following C functions.
        Function srl performs a logical right shift using an arithmetic right shift (given by value xsra), followed by other operations **not including right shifts or division**.
        Function sra performs an arithmetic right shift using a logical right shift (given by value xsrl), followed by other operations **not including right shifts or division**.

        You may use `8*sizeof(int)` to compute w, the number of bits in int.
        Shift amount k can range from 0 to w−1.

        ```c
        unsigned sr1(unsigned x, int k) {
            // Perform shift arithmetically
            unsigned xsra = (int) x >> k; 
            // to do 
        }

        int sra(int x, int k) {
            // perform shift logically
            int xsrl = (unsigned) x >> k;
            // to do 
        }
        ```


    === "2.67 🌟🌟"
        You must write int_size_is_32() that returns 1 when int is 32 bits, without using sizeof.

        Here is a broken attempt:
        ```c
        int bad_int_size_is_32() {
            int set_msb = 1 << 31;
            int beyond_msb = 1 << 32;
            return set_msb && !beyond_msb;
        }
        ```

        A. In what way does our code fail to comply with the C standard?
        B. Modify to run properly on any machine where int ≥ 32 bits.
        C. Modify to run properly on any machine where int ≥ 16 bits.

=== "整数表示与溢出判断"
    === "2.70 🌟🌟"
        ```c
        /*
        * Return 1 when x can be represented as an n-bit, 2’s-complement number; 0 otherwise
        * Assume 1 ≤ n ≤ w
        */
        int fits_bits(int x, int n);
        ```

    === "2.71 🌟🌟"
        Extract a signed byte from a packed 32-bit unsigned:
        ```c
        typedef unsigned packed_t;
        int xbyte(packed_t word, int bytenum);
        ```

        Failed code:
        ```c
        int xbyte(packed_t word, int bytenum) {
            return (word >> (bytenum << 3)) & 0xFF;
        }
        ```

        A. What is wrong?
        B. Give correct implementation using only shifts and one subtraction.

    === "2.72 🌟🌟"
        This code always copies, even when maxbytes is too small:
        ```c
        void copy_int(int val, void *buf, int maxbytes) {
            if (maxbytes - sizeof(val) >= 0)
                memcpy(buf, &val, sizeof(val));
        }
        ```

        A. Explain why the test always succeeds. (sizeof returns size_t)
        B. Rewrite the condition to make it correct.

    === "2.73 🌟🌟🌟"
        Saturating addition: return TMax on positive overflow, TMin on negative overflow.
        ```c
        int saturating_add(int x, int y);
        ```

    === "2.74 🌟🌟"
        Determine whether x−y can be computed without overflow.
        ```c
        int tsbok(int x, int y);
        ```

=== "乘除优化与近似计算"
    === "2.77 🌟🌟"
        Multiply by K using only +, -, << (at most 3 operations):
        A. K=17
        B. K=-7
        C. K=60
        D. K=-112

    === "2.78 🌟🌟"
        Divide by power of 2, correct rounding:
        ```c
        int divide_power2(int x, int k);
        ```
        Assume 0 ≤ k < w-1.

    === "2.79 🌟🌟"
        Compute 3*x/4, allow overflow in 3*x:
        ```c
        int mul3div4(int x);
        ```

    === "2.80 🌟🌟🌟"
        Compute (3/4)x, no overflow, round toward zero:
        ```c
        int threefourths(int x);
        ```

=== "高精度乘法与溢出安全"
    === "2.75 🌟🌟🌟"
        Compute the high-order w bits of x·y for unsigned x,y using signed_high_prod:
        ```c
        unsigned unsigned_high_prod(unsigned x, unsigned y);
        int signed_high_prod(int x, int y);
        ```

    === "2.76 🌟"
        Implement calloc with no overflow:
        ```c
        void *calloc(size_t nmemb, size_t size);
        ```
        Use malloc and memset. Must handle overflow safely.

=== "浮点数表示与比较"
    === "2.83 🌟🌟"
        Infinite binary fraction 0.yyyyyy..., y is k-bit sequence.
        A. Let Y = B2U_k(y). Give formula for the value.
        B. Compute value for:
        (a) y=101
        (b) y=0110
        (c) y=010011

    === "2.84 🌟🌟"
        Compare floats (no NaN):
        ```c
        int float_le(float x, float y) {
            unsigned ux = f2u(x);
            unsigned uy = f2u(y);
            unsigned sx = ux >> 31;
            unsigned sy = uy >> 31;
            /* Give an expression using only ux, uy, sx, sy */
            return ;
        }
        ```

    === "2.85 🌟🌟"
        Floating-point format: k exponent bits, n fraction bits.
        Give exponent E, significand M, fraction f, value V, and bit representation for:
        A. 7.0
        B. Largest odd integer exactly representable
        C. Reciprocal of the smallest positive normalized value

    === "2.86 🌟"
        80-bit extended precision: 1 sign, 15 exponent, 1 integer, 63 fraction.
        Fill values:
        - Smallest positive denormal
        - Smallest positive normalized
        - Largest normalized

    === "2.87 🌟"
        16-bit half-precision: 1 sign, 5 exponent, 10 fraction, bias=15.
        Fill Hex, M, E, V, D:
        -0, smallest >2, 512, largest denormal, -∞, 0x3BB0.

    === "2.88 🌟"
        Convert 9-bit IEEE float A → B (round toward +∞):
        Format A: 1 sign, 5 exp, 3 frac (bias=15)
        Format B: 1 sign, 4 exp, 4 frac (bias=7)

    === "2.89 🌟"
        Assume int=32, float=IEEE 32, double=IEEE 64.
        Judge if always true:
        A. (float)x == (float)dx
        B. dx - dy == (double)(x - y)
        C. (dx+dy)+dz == dx+(dy+dz)
        D. (dx*dy)*dz == dx*(dy*dz)
        E. dx/dx == dz/dz (dx, dz ≠ 0)

    === "2.90 🌟"
        Construct IEEE float 2^x:
        ```c
        float fpwr2(int x) {
            unsigned exp, frac, u;
            if (x < ___) { exp=___; frac=___; }
            else if (x < ___) { exp=___; frac=___; }
            else if (x < ___) { exp=___; frac=___; }
            else { exp=___; frac=___; }
            u = exp <<23 | frac;
            return u2f(u);
        }
        ```

=== "浮点位级操作（模拟硬件）"
    === "2.91 🌟"
        π ≈ 0x40490FDB:
        A. Fractional binary value.
        B. Binary representation of 22/7.
        C. Bit position where they diverge.

    === "2.92 🌟"
        Compute -f. If f is NaN, return f.
        ```c
        float_bits float_negate(float_bits f);
        ```

    === "2.93 🌟"
        Compute |f|. If f is NaN, return f.
        ```c
        float_bits float_absval(float_bits f);
        ```

    === "2.94 🌟🌟🌟"
        Compute 2*f. If f is NaN, return f.
        ```c
        float_bits float_twice(float_bits f);
        ```

    === "2.95 🌟🌟🌟"
        Compute 0.5*f. If f is NaN, return f.
        ```c
        float_bits float_half(float_bits f);
        ```

    === "2.96 🌟🌟🌟🌟"
        Convert float to int (round toward 0). Return 0x80000000 on overflow/NaN.
        ```c
        int float_f2i(float_bits f);
        ```

    === "2.97 🌟🌟🌟🌟"
        Convert int to float (bit-perfect IEEE).
        ```c
        float_bits float_i2f(int i);
        ```



