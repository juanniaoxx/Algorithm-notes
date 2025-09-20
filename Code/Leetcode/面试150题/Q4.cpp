/**
 *  URL:https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150
 */
#include <vector>

using namespace std;

int removeDuplicates(vector<int> &nums) {
    int n = nums.size();
    int stack_size = 2;
    for (int i = 2; i < n; ++i) {
        if (nums[i] != nums[stack_size - 2]) nums[stack_size++] = nums[i];
    }

    return min(stack_size, n);
}