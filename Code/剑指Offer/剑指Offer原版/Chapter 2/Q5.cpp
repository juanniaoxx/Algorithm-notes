#include <string>
#include <cstddef>

std::string pathEncryption(std::string path) {
    std::size_t cnt = 0;
    for (auto ch : path) {
        if (ch == ' ') ++cnt;
    }

    if (cnt == 0) return path; // 不含空格

    const std::size_t old_sz = path.size();
    const std::size_t new_sz = old_sz + 2 * cnt;
    std::string ans;
    ans.reserve(new_sz); // 分配内存
    ans.resize(new_sz);

    // 使用方向迭代器
    auto it = path.rbegin(); 
    auto dest = ans.rbegin();

    for(; it != path.rend(); ++it) {
        if (*it == ' ') {
            *dest++ = '0';
            *dest++ = '2';
            *dest++ = '%';
        } else *dest++ = *it;
    }

    return ans;
}