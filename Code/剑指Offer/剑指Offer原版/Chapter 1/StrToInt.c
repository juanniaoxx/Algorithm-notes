/*
* 将一个字符串转换为整数
*/
#include <stdio.h>

int StrToInt(char *string) {
    if (string == NULL) {
        printf("Don't input empty string!\n");
        return -1;
    }
    int number = 0;
    while (*string != 0) {
        number = number * 10 + *string - '0';
        ++string;
    }

    return number;
}

int main() {
    printf("Test Example:\n");

    // normal test 
    char *test1 = "1234567890";
    printf("abcdef -> %d\n", StrToInt(test1));

    // empty string 
    printf("Empty string\n");
    StrToInt(NULL);

    // Containing special characters such as : + - and no numbers 
    char *test2 = "+1234";
    char *test3 = "-1234";
    char *test4 = "+ab234";
    printf("+1234 -> %d \n", StrToInt(test2));
    printf("-1234 -> %d \n", StrToInt(test3));
    // printf("+ab234 -> %d\n", StrToInt(test4));

    return 0;
}