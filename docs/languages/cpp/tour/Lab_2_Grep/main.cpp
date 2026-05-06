#include "grepper.h"
#include <iostream>
#include <vector>

int main(int argc, char* argv[]) {
    if (argc < 2) {
        std::cerr << "Usage: " << argv[0] << " <regex> [files...]" << std::endl;
        return 1;
    }

    Grepper grepper;
    try {
        // TODO: 调用 grepper.setPattern(argv[1])
        // 捕获 std::regex_error 并输出错误信息到 std::cerr，返回 1
    } catch (const std::regex_error& e) {
        // TODO: 输出错误信息并返回 1
    }

    std::vector<std::string> results;

    if (argc == 2) {
        // TODO: 无文件参数，调用 grepper.processStdin(results)
    } else {
        // TODO: 有文件参数，循环调用 grepper.processFile(argv[i], results)
        // 注意：从 i=2 开始，因为第1个参数是正则表达式
    }

    // TODO: 输出 results 中的所有字符串到 std::cout，每个一行

    return 0;
}