/** 
 *  URL:https://leetcode.cn/problems/jump-game/?envType=study-plan-v2&envId=top-interview-150
 */

#include <vector>

using namespace std;

bool canJump(vector<int> &nums) {
    int maxReach = 0; // 最远能到达的位置
    for (int i = 0; i < nums.size(); ++i) {
        if (maxReach < i) return false;
        maxReach = max(maxReach, i + nums[i]);
        if (maxReach >= nums.size() - 1) return true;
    }
    return true;
}