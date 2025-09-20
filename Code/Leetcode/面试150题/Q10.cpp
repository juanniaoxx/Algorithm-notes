/**
 *  URL:https://leetcode.cn/problems/jump-game-ii/description/?envType=study-plan-v2&envId=top-interview-150
 */

#include <vector>
using namespace std;

int jump(vector<int> &nums) {
    int maxReach = 0, end = 0, res = 0;
    for (int i = 0; i < nums.size() - 1; ++i) {
        if (maxReach >= i) {
            maxReach = max(maxReach, i + nums[i]);
            if (i == end) {
                end = maxReach;
                ++res;
            }
        }
    }
    return res;
}