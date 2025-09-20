/**
 * URL:https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150
 */
#include <vector>

using namespace std;

int maxProfit(vector<int> &prices) {
    int res = 0;
    int p1 = 0, p2 = 1;
    while (p2 < prices.size()) {
        if (prices[p2] - prices[p1] < 0) p1 == p2++;
        else if (res < prices[p2] - prices[p1]) {
            res = prices[p2++] - prices[p1];
        } else p2++;
    }
}