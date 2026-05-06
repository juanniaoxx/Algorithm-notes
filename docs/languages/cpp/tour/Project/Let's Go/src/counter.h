#ifndef COUNTER_H
#define COUNTER_H

#include <string>
#include <unordered_map>
#include <mutex>

// 单文件统计
std::unordered_map<std::string, int> countInFile(const std::string& filename);

// 线程安全合并
void merge(std::unordered_map<std::string, int>& global,
            const std::unordered_map<std::string, int>& local,
            std::mutex& mtx);

#endif // COUNTER_H