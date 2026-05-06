#ifndef UTILS_H
#define UTILS_H

#include <string>
#include <chrono>

// 单词规范化：转小写，去除首尾非字母数字字符
std::string normalizeWord(const std::string& raw);

// 简单的计时器（RAII风格）
class Timer {
public:
    Timer();
    ~Timer();
    void reset();
    double elapsed() const;  // 返回秒数
private:
    std::chrono::steady_clock::time_point start_;
};

#endif // UTILS_H