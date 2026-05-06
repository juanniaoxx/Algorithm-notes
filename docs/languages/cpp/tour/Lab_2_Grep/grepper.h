#ifndef GREPPER_H
#define GREPPER_H

#include <string>
#include <regex>
#include <vector>

class Grepper {
public:
    // 编译正则表达式，失败则抛出 std::regex_error
    void setPattern(const std::string& pattern);
    
    // 处理单个文件，将匹配的行写入 results
    // 格式：filename:line_no: line_content（filename为空时只输出 line_no: line_content）
    void processFile(const std::string& filename, std::vector<std::string>& results);
    
    // 处理标准输入（无文件名时调用）
    void processStdin(std::vector<std::string>& results);

private:
    std::regex regex_;
    bool pattern_set_ = false;
};

#endif // GREPPER_H