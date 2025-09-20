/**
 *  URL:https://leetcode.cn/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150
 */

#include <vector>
using namespace std;

/* 解法一: 反转数组
nums = "----->-->"; k =3
result = "-->----->";

reverse "----->-->" we can get "<--<-----"
reverse "<--" we can get "--><-----"
reverse "<-----" we can get "-->----->"
this visualization help me figure it out :)
*/
void reserve(vector<int> &nums, int left, int right) {
    while (left < right) swap(nums[left++], nums[right--]);
}

void rotate(vector<int> &nums, int k) {
    if (k == 0) return ;
    int n = nums.size();
    if (k >= n) k = k % n;

    reserve(nums, 0, n - k - 1);
    reserve(nums, n - k, n - 1);
    reserve(nums, 0, n - 1);
}

/* 解法二: 环状替代
*/

void rotate(vector<int> &nums, int k) {
    int n = nums.size();
    k = k % n;
    int count = 0;
    int start = 0;
    while (count != n) {
        int current = start;
        int prev = nums[start];
        do {
            int next = (current + k) % n;
            swap(nums[next], prev);
            current = next;
            count++;
        } while (start != current);
        start++;
    }
}