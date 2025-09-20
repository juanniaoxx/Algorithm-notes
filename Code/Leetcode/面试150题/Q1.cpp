/**
 *  URL:https://leetcode.cn/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
 *  
 */

#include <vector>
#include <algorithm>

using namespace std;

// 通常解法 合并后排序,未利用题设的有序的条件
void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    // 考虑最简单的想法
    for (int i = m; i < m + n; ++i) {
        nums1[i] = nums2[i - m];
    }
    sort(nums1.begin(), nums1.end()); // O(nlogn)
}

// 没啥意义的"短代码" O(nlogn)
void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    copy(nums2.begin(), nums2.end(), nums1.begin() + m);
    sort(nums1.begin(), nums1.end());
}

// O(m+n)的解法
// 使用辅助空间的双指针解法
void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    vector<int> temp;
    temp.resize(n + m);
    int p1 = 0, p2 = 0, cur = 0;
    while (p1 < m || p2 < n) {
        if (p1 == m) temp[cur++] = nums2[p2++];
        else if(p2 == n) temp[cur++] = nums1[p1++];
        else if (nums1[p1] < nums2[p2]) temp[cur++] = nums1[p1++];
        else temp[cur++] = nums2[p2++];
    }

    for (int i = 0; i < n + m; ++i) {
        nums1[i] = temp[i];
    }
}

// 不使用辅助空间的逆向双指针 - 类似于剑指Offer的Q5的思路

void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    int p1 = m - 1, p2 = n - 1;
    int tail = m + n - 1;

    while (p1 >= 0 || p2 >= 0) {
        if (p1 == -1) nums1[tail--] = nums2[p2--];
        else if (p2 == -1) nums1[tail--] = nums1[p1--];
        else if (nums1[p1] >= nums2[p2]) nums1[tail--] = nums1[p1--];
        else nums1[tail--] = nums2[p2--];
    }
}
