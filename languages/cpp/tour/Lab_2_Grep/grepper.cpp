#include "grepper.h"
#include <fstream>
#include <iostream>
#include <regex>

void Grepper::setPattern(const std::string& pattern) {
    // TODO: 用 pattern 构造 std::regex 对象，赋值给 regex_
    // 如果抛出 std::regex_error，捕获后重新抛出（保持原异常类型）
    // 提示：直接 try { regex_ = std::regex(pattern); } catch (...) { throw; }
}

void Grepper::processFile(const std::string& filename, std::vector<std::string>& results) {
    // TODO: 
    // 1. 打开文件（std::ifstream），若失败则输出错误到 std::cerr 并返回
    // 2. 逐行读取，行号从1开始
    // 3. 对每行使用 std::regex_search 检查是否匹配 regex_
    // 4. 若匹配，构造字符串：filename + ":" + std::to_string(line_no) + ": " + line
    // 5. 将构造的字符串压入 results
}

void Grepper::processStdin(std::vector<std::string>& results) {
    // TODO:
    // 从 std::cin 逐行读取，行号从1开始
    // 匹配逻辑同 processFile，输出格式为：std::to_string(line_no) + ": " + line
}