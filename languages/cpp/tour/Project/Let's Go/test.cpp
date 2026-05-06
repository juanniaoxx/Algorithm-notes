#include "src/counter.h"
#include "src/thread_pool.h"
#include "src/utils.h"
#include <cassert>
#include <iostream>
#include <fstream>
#include <thread>
#include <mutex>

// 辅助函数：创建临时文件 
static std::string createTempFile(const std::string& content) {
    static int id = 0;
    std::string path = "temp_test_" + std::to_string(++id) + ".txt";
    std::ofstream f(path);
    f << content;
    f.close();
    return path;
}

void test_normalizeWord() {
    std::cout << "Testing normalizeWord...\n";
    // 示例： assert(normalizeWord("Hello!") == "hello");
    // 请添加更多断言：
    // - 大小写转换
    // - 首尾标点去除
    // - 纯标点返回空字符串
    // - 数字字母混合保留
    // TODO: 至少写出 5 个测试用例
    assert(normalizeWord("Hello!") == "hello");  // 已给出一个例子，你需要去掉注释并补充其他
    std::cout << "  ✓ normalizeWord passed\n";
}

void test_countInFile() {
    std::cout << "Testing countInFile...\n";
    // 1. 创建一个临时文件，内容如 "Hello world\nHello C++"
    // 2. 调用 countInFile，检查返回的 map 中单词频率是否正确
    // 3. 测试文件不存在时是否抛出 std::runtime_error
    // TODO: 实现完整测试
}

void test_merge_singlethread() {
    std::cout << "Testing merge (single thread)...\n";
    // 创建两个局部 map，合并到全局 map，验证累加正确
    // TODO: 写断言
}

void test_merge_threadsafe() {
    std::cout << "Testing merge (thread safety)...\n";
    // 启动两个线程，各自 merge 不同的局部 map 到同一个全局 map
    // 使用 std::thread 和 lambda，最后验证全局 map 的值正确
    // TODO: 实现
}

void test_thread_pool() {
    std::cout << "Testing ThreadPool...\n";
    // 创建线程池，提交多个任务（如返回整数的 lambda），检查 future 结果
    // TODO: 实现
}

int main() {
    test_normalizeWord();
    test_countInFile();
    test_merge_singlethread();
    test_merge_threadsafe();
    test_thread_pool();
    std::cout << "\n✅ All tests completed. Make sure all assertions passed.\n";
    return 0;
}