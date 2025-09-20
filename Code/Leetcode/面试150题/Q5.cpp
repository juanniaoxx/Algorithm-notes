/**
 *  URL:https://leetcode.cn/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
 */
#include <vector>
#include <algorithm>
using namespace std;

// 摩尔投票法(Boyer-Moore majority vote algorithm)
// URL: https://zh.wikipedia.org/wiki/%E5%A4%9A%E6%95%B0%E6%8A%95%E7%A5%A8%E7%AE%97%E6%B3%95
int majorityElement(vector<int> &nums) {
    int ans = 0, hp = 0;
    for (auto x : nums) {
        if (hp == 0) {
            ans = x;
            hp = 1;
        } else {
            hp += x == ans ? 1 : -1;
        }
    }

    return ans;
}