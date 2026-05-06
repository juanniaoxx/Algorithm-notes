#include "counter.h"
#include "thread_pool.h"
#include "utils.h"
#include <iostream>
#include <vector>
#include <string>
#include <filesystem>
#include <mutex>
#include <future>
#include <cstring>
#include <atomic>
#include <unordered_set>

namespace fs = std::filesystem;

// 收集所有 .txt 文件（支持文件和目录递归）
std::vector<std::string> collectFiles(const std::vector<std::string>& paths) {
    std::vector<std::string> files;
    // TODO(P7): 遍历 paths，如果是 .txt 文件直接加入，如果是目录则递归遍历所有 .txt 文件
    return files;
}

int main(int argc, char* argv[]) {
    if (argc < 2) {
        std::cerr << "Usage: " << argv[0] << " [--sequential|--pool] <file_or_directory> ... [--stopwords stop.txt] [--min-count N]\n";
        return 1;
    }

    // 解析命令行参数
    bool use_sequential = false;
    bool use_pool = false;
    std::vector<std::string> paths;
    std::string stopwords_file;
    int min_count = 0;

    for (int i = 1; i < argc; ++i) {
        if (std::strcmp(argv[i], "--sequential") == 0) {
            use_sequential = true;
        } else if (std::strcmp(argv[i], "--pool") == 0) {
            use_pool = true;
        } else if (std::strcmp(argv[i], "--stopwords") == 0 && i + 1 < argc) {
            stopwords_file = argv[++i];
        } else if (std::strcmp(argv[i], "--min-count") == 0 && i + 1 < argc) {
            min_count = std::stoi(argv[++i]);
        } else {
            paths.push_back(argv[i]);
        }
    }

    // 收集文件
    std::vector<std::string> files = collectFiles(paths);
    if (files.empty()) {
        std::cerr << "No valid .txt files found.\n";
        return 1;
    }
    std::cout << "Processing " << files.size() << " files...\n";

    // 停用词集合（若有）
    std::unordered_set<std::string> stopwords;
    if (!stopwords_file.empty()) {
        // TODO(P9): 读取 stopwords_file，每行一个词，normalizeWord 后存入 stopwords
    }

    std::unordered_map<std::string, int> globalMap;
    std::mutex globalMutex;
    std::atomic<size_t> completed(0);
    Timer timer;

    if (use_sequential) {
        // TODO(P2): 顺序版本，依次处理每个文件，调用 merge 合并，并更新进度
        std::cout << "Running sequential...\n";
    } 
    else if (use_pool) {
        // TODO(P6): 使用线程池版本
        unsigned int numThreads = std::thread::hardware_concurrency();
        if (numThreads == 0) numThreads = 2;
        ThreadPool pool(numThreads);
        std::cout << "Using thread pool (" << numThreads << " threads)...\n";
    }
    else {
        // TODO(P4): 使用 std::async 版本
        std::cout << "Using std::async...\n";
    }

    double elapsed = timer.elapsed();
    std::cout << "\nTotal time: " << elapsed << " seconds.\n";

    // TODO(P2/P4/P6): 排序并输出结果（频率降序，相同频率按字母升序）
    // 可选: 应用 min_count 过滤，输出到文件等

    return 0;
}