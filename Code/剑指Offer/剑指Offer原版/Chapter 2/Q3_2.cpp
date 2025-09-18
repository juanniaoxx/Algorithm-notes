/**
 *  测试连接: https://leetcode.cn/problems/find-the-duplicate-number/description/
 *  要求: 在不修改数组的情况下,仅仅使用O(1)的额外空间 
 */
#include <vector>
#include <algorithm>
#include <iostream>
// 统计位于左右边界直接的数值
int countRange(const std::vector<int> nums, int l, int r) {
    if (nums.size() == 0) return 0;

    int count = 0;
    for(int i = 0; i < nums.size(); ++i) {
        if(nums[i] >= l && nums[i] <= r) ++count;
    }
    return count;
}

// 被测代码：返回任意重复数字，没有返回 -1
int findDuplicate1(const std::vector<int>& nums)
{
    // 如果不限制使用空间,则可以考虑使用O(N)的哈希这样可以在O(N)的时间复杂度下实现
    if (nums.size() == 0) return -1;
    int l  = 1, r = nums.size() - 1;

    // 采用类似于二分的办法 O(nlogn) O(1)
    while(r >= l) {
        // int mid = l + r >> 1; 
        int mid = ((r - l) >> 1) + l; // 更安全
        int count = countRange(nums, l, mid);

        if (l == r) {
            if (count > 1) return l;
            else break;
        }

        if (count > (mid - l + 1)) r = mid;
        else l = mid + 1;
    }
    return -1;
}

int findDuplicate2(const std::vector<int> &nums) {
    // 位图法 O(nlogn) O(1)

    return -1;
}

int findDuplicate(const std::vector<int> &nums) {
    // Floyd判圈法 O(n) O(1)
    if (nums.size() == 0) return -1;
    int slow = 0, fast = 0;
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);
    fast = 0;
    while (fast != slow) {
        fast = nums[fast];
        slow = nums[slow];
    }
    return fast;
}
// ---------- 简单测试 ----------
struct Test {
    const char* name;
    std::vector<int> in;
    std::vector<int> expect;
};
static const Test tests[] = {
    {"基本场景: {1, 3, 4, 2, 2}", {1, 3, 4, 2, 2}, {2}},
    {"基本场景-最小重复: {2,1,3,1,1}", {2,1,3,1,1}, {1}},
    {"基本场景-最大重复: {2,4,3,1,4}", {2,4,3,1,4}, {4}},
    {"基本场景-多重复: {2, 2, 1, 3 ,1 ,3}", {2, 2, 1, 3 ,1 ,3}, {1, 2,3}},
    {"边界场景-空数组: {}",   {},          {-1}},
};

int main()
{
    bool all = true;
    for (auto& t : tests) {
        auto copy = t.in;
        int got = findDuplicate(t.in);
        if (copy != t.in) {
            printf("Error, Don't allow to modify the numbers of array!");
            return 0;
        }
        bool ok = (std::find(t.expect.begin(), t.expect.end(), got) != t.expect.end());
        std::cout << "[" << (ok ? "PASS" : "FAIL") << "] " << t.name << "\n";
        if (!ok) all = false;
    }
    std::cout << (all ? "\nAll tests passed.\n" : "\nSome tests failed.\n");
    return all ? 0 : 1;
}



