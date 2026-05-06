#include "utils.h"
#include <cctype>
#include <iostream>

std::string normalizeWord(const std::string& raw) {
    size_t start = 0;
    while (start < raw.size() && !std::isalnum(static_cast<unsigned char>(raw[start]))) {
        ++start;
    }
    if (start == raw.size()) return "";
    size_t end = raw.size() - 1;
    while (end > start && !std::isalnum(static_cast<unsigned char>(raw[end]))) {
        --end;
    }
    std::string result = raw.substr(start, end - start + 1);
    for (char& c : result) c = std::tolower(static_cast<unsigned char>(c));
    return result;
}

Timer::Timer() : start_(std::chrono::steady_clock::now()) {}
void Timer::reset() { start_ = std::chrono::steady_clock::now(); }
double Timer::elapsed() const {
    auto end = std::chrono::steady_clock::now();
    return std::chrono::duration<double>(end - start_).count();
}
Timer::~Timer() {}