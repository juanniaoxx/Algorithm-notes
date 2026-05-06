#include "counter.h"
#include "utils.h"
#include <fstream>
#include <sstream>
#include <stdexcept>

std::unordered_map<std::string, int> countInFile(const std::string& filename) {
    std::unordered_map<std::string, int> localMap;
    // TODO(P1): 打开文件，逐行读取，分割单词，调用 normalizeWord，计数
    // 提示: std::ifstream file(filename); if (!file.is_open()) throw std::runtime_error(...);
    // 使用 std::getline 和 std::istringstream
    return localMap;
}

void merge(std::unordered_map<std::string, int>& global,
            const std::unordered_map<std::string, int>& local,
            std::mutex& mtx) {
        // TODO(P3): 使用 std::lock_guard<std::mutex> 保护 global，累加 local 中的计数
}