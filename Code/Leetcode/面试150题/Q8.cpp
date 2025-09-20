/**
 *  URL:https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150
 */
#include <vector>

using namespace std;

int maxProfit(vector<int> &prices) {
    int res = 0;
    for (int i = 1; i < prices.size(); ++i) {
        if (prices[i] > prices[i - 1]) res += (prices[i] - prices[i - 1]); // 反正没有手续费,涨了就卖
    }
    return res;
}