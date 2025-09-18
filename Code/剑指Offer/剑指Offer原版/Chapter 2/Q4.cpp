/**
 *  URL: https://leetcode.cn/problems/search-a-2d-matrix-ii/description/
 */
#include <vector>

/**
 *  matrix: m x n 矩阵
 *  target: 目标值
 */
bool searchMatrix(std::vector<std::vector<int>>& matrix, int target) {
    // 从右上角开始搜索
    int m = matrix.size(); 
    int n = matrix[0].size();

    bool found = false;
    
    if (!matrix.empty() && m > 0 && n > 0) {
        int i = 0, j = n - 1;
        while(i < m && j >= 0) {
            if(matrix[i][j] == target) {
                found = true; // 右上角元素是待查找元素
                break;
            }else if(matrix[i][j] > target) --j; // 如果右上角元素大于目标值可以直接舍弃该列的全部元素
            else ++i; // 如果右上角元素小于目标值,则可以舍去这一行的全部元素
        }
    }

    return found;
}