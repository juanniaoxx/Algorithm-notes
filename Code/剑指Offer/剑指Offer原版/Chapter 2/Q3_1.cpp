/**
 *  测试连接: https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/description/
 *  方法一: 排序后遍历(O(nlogn), O(log(N)))
 *  方法二: 哈希表  (O(n), O(n))
 *  方法三: 鸽巢原理 (O(n), O(1))
 */

#include <iostream> 
#include <vector>
#include <algorithm>

// 排序(nlogn)
bool solution1(std::vector<int> &numbers, int *duplication) {
    if (numbers.size() == 0) return false; // 判断是否为空 
    std::sort(numbers.begin(), numbers.end());
    for (int i = 0; i < numbers.size() - 1; ++i) {
        if (numbers[i] == numbers[i + 1]) {
            *duplication = numbers[i];
            return true;
        }
    }
    return false;
}

// 哈希法(O(N), O(N))
bool solution2(std::vector<int>& numbers, int* duplication) {
    if (numbers.empty()) return false;

    std::vector<int> hash(numbers.size(), 0);   // 长度为 n，全 0

    for (int x : numbers) {
        if (hash[x] == 1) {   // 已经出现过
            *duplication = x;
            return true;
        }
        ++hash[x];
    }
    return false;
}

// O(N), O(1) 鸽巢原理
bool solution(std::vector<int> &numbers, int *duplication) {
    if (numbers.size() == 0) return false;

    for (int i = 0; i < numbers.size(); ++i) {
        while (numbers[i] != i) {
            if (numbers[i] == numbers[numbers[i]]) {
                *duplication = numbers[i];
                return true;
            }
            else std::swap(numbers[i], numbers[numbers[i]]);
        }
    }
    return false;
}
/*===---- 测试部分 ----===*/
bool contains(std::vector<int> array, int length, int number) {
    for(int i = 0; i < length; ++i) {
        if(array[i] == number) return true;
    }
    return false;
}

void test(std::string testname, std::vector<int> numbers, int lengthNumbers, 
        std::vector<int> expected, int expectedExpected, bool validArgument) {
    printf("%s begins: ", testname.c_str());

    int duplication;
    bool validInput = solution(numbers, &duplication);

    if(validArgument == validInput) {
        if(validArgument) {
            if(contains(expected, expectedExpected, duplication))
                printf("Passed.\n");
            else
                printf("Failed.\n");
        } else {
            printf("Passed.\n");
        }
    } else {
        printf("Failed.\n");
    }
}

// 重复的数字是数组中的最小数字
void test1() {
    std::vector<int> numbers {2, 1, 3, 1, 4};
    std::vector<int> duplications {1};
    test("Test 1", numbers, numbers.size(), duplications, duplications.size(), true);
}

// 重复的数字是数组中的最大数字
void test2() {
    std::vector<int> numbers {2, 4, 3, 1, 4};
    std::vector<int> duplications {4};
    test("Test 2", numbers, numbers.size(), duplications, duplications.size(), true);
}

// 数组中有多个重复数字
void test3() {
    std::vector<int> numbers {2, 4, 2, 1, 4};
    std::vector<int> duplications {2, 4};
    test("Test 2", numbers, numbers.size(), duplications, duplications.size(), true);
}

// 没有重复的数字
void test4(){
    std::vector<int> numbers { 2, 1, 3, 0, 4 };
    std::vector<int> duplications { -1 }; // not in use in the test function
    test("Test 4", numbers, numbers.size(), duplications, duplications.size(), false);
}

// 没有重复的数字
void test5(){
    std::vector<int> numbers { 2, 1, 3, 5, 4 };
    std::vector<int> duplications { -1 }; // not in use in the test function
    test("Test 5", numbers, numbers.size(), duplications, duplications.size(), false);
}

// 无效的输入
void test6() {
    std::vector<int> numbers {};
    std::vector<int> duplications { -1 };
    test("Test 6", numbers, 0, duplications, duplications.size(), false);
}

int main() {
    test1();
    test2();
    test3();
    test4();
    test5();
    test6();
}
