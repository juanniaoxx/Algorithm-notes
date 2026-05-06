#include "Stack.h"
#include <iostream>
#include <string>
#include <stdexcept>

// 简易测试宏
#define TEST_ASSERT(cond, msg) \
    do { \
        if (!(cond)) { \
            std::cerr << "❌ FAILED: " << msg << " (line " << __LINE__ << ")" << std::endl; \
            return false; \
        } \
    } while(0)

#define TEST_SECTION(name) \
    std::cout << "=== Running test: " << name << " ===" << std::endl;

bool test_basic_ops() {
    TEST_SECTION("Basic push/pop/top");
    Stack<int> s;
    TEST_ASSERT(s.empty(), "new stack should be empty");
    TEST_ASSERT(s.size() == 0, "size should be 0");

    s.push(42);
    TEST_ASSERT(!s.empty(), "stack should not be empty");
    TEST_ASSERT(s.size() == 1, "size should be 1");
    TEST_ASSERT(s.top() == 42, "top should return 42");

    s.push(100);
    TEST_ASSERT(s.size() == 2, "size should be 2");
    TEST_ASSERT(s.top() == 100, "top should return 100");

    s.pop();
    TEST_ASSERT(s.size() == 1, "size should be 1 after pop");
    TEST_ASSERT(s.top() == 42, "top should return 42 after pop");

    s.pop();
    TEST_ASSERT(s.empty(), "stack should be empty after popping all");
    return true;
}

bool test_exceptions_on_empty() {
    TEST_SECTION("Exceptions on empty stack");
    Stack<double> s;
    bool caught = false;
    try {
        s.pop();
    } catch (const std::out_of_range&) {
        caught = true;
    }
    TEST_ASSERT(caught, "pop on empty should throw out_of_range");

    caught = false;
    try {
        s.top();
    } catch (const std::out_of_range&) {
        caught = true;
    }
    TEST_ASSERT(caught, "top on empty should throw out_of_range");
    return true;
}

bool test_copy_semantics() {
    TEST_SECTION("Copy constructor and assignment");
    Stack<std::string> s1;
    s1.push("hello");
    s1.push("world");

    Stack<std::string> s2 = s1;   // copy constructor
    TEST_ASSERT(s2.size() == 2, "copied stack size should be 2");
    TEST_ASSERT(s2.top() == "world", "copied top should be 'world'");

    s2.pop();
    TEST_ASSERT(s2.size() == 1, "original stack unchanged after modifying copy?");
    TEST_ASSERT(s1.size() == 2, "original stack size should remain 2");

    Stack<std::string> s3;
    s3 = s1;                      // copy assignment
    TEST_ASSERT(s3.size() == 2, "assigned stack size should be 2");
    TEST_ASSERT(s3.top() == "world", "assigned top should be 'world'");
    return true;
}

bool test_move_semantics() {
    TEST_SECTION("Move constructor and assignment");
    Stack<int> s1;
    for (int i = 1; i <= 5; ++i) s1.push(i);

    Stack<int> s2 = std::move(s1);  // move construct
    TEST_ASSERT(s2.size() == 5, "moved-to stack should have 5 elements");
    TEST_ASSERT(s1.empty(), "moved-from stack should be empty");

    Stack<int> s3;
    s3 = std::move(s2);             // move assignment
    TEST_ASSERT(s3.size() == 5, "move-assigned stack should have 5 elements");
    TEST_ASSERT(s2.empty(), "move-from should be empty after assignment");
    return true;
}

bool test_resize_growth() {
    TEST_SECTION("Automatic capacity growth");
    Stack<char> s(2);   // small initial capacity
    for (char c = 'a'; c <= 'z'; ++c) {
        s.push(c);
    }
    TEST_ASSERT(s.size() == 26, "size should be 26 after pushing many elements");
    // pop back a few and verify order
    for (int i = 0; i < 5; ++i) s.pop();
    TEST_ASSERT(s.size() == 21, "size after popping should be 21");
    TEST_ASSERT(s.top() == 'u', "top should be 'u' (a..z, pop last 5 -> 'u')");
    return true;
}

bool test_clear() {
    TEST_SECTION("Clear method");
    Stack<int> s;
    for (int i = 0; i < 10; ++i) s.push(i);
    s.clear();
    TEST_ASSERT(s.empty(), "stack should be empty after clear");
    TEST_ASSERT(s.size() == 0, "size should be 0 after clear");
    // Still usable after clear
    s.push(999);
    TEST_ASSERT(s.top() == 999, "stack should work after clear");
    return true;
}

int main() {
    std::cout << "Starting Stack tests...\n\n";
    bool all_passed = true;

    all_passed = test_basic_ops() && all_passed;
    all_passed = test_exceptions_on_empty() && all_passed;
    all_passed = test_copy_semantics() && all_passed;
    all_passed = test_move_semantics() && all_passed;
    all_passed = test_resize_growth() && all_passed;
    all_passed = test_clear() && all_passed;

    std::cout << "\n========================================\n";
    if (all_passed) {
        std::cout << "✅ All tests passed!\n";
        return 0;
    } else {
        std::cout << "❌ Some tests failed.\n";
        return 1;
    }
}