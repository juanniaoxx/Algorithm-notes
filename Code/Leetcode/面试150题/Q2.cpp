/**
 *  URL:https://leetcode.cn/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
 */

#include <vector>
using namespace std;

int removeElement(vector<int> &nums, int val) {
    int p1 = 0, p2 = nums.size();

    while (p1 < p2) {
        if(nums[p1] == val) nums[p1] = nums[--p2];
        else ++p1;
    }

    return p2;
}