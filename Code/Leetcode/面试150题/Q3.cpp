/**
 *  URL:https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
 */
#include <vector>

using namespace std;

int removeDuplicates(vector<int> &nums) {
    int p1 = 0, p2 = 1;
    while (p2 < nums.size()) {
        if (nums[p1] == nums[p2]) p2++;
        else {
            nums[++p1] = nums[p2++];
        }
    }
    return p1 + 1;
}