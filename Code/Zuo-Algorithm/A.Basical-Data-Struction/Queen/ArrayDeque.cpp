/****用数组实现双端循环链表****
 *  Data: 2025.8.28
 *  Lesson: 左程云算法入门-16
 *  Test: https://leetcode.cn/problems/design-circular-deque/description/
**************************/
class MyCircularDeque {
public:
    const static int N = 1010;
    int deque[N];
    int l, r , size , limit; 

    MyCircularDeque(int k) {
        limit = k;
        l = r = size = 0;
    }
    
    bool insertFront(int value) {
        if (isFull()) return false;
        l = (l - 1 + limit) % limit;
        deque[l] = value; 
        ++size;
        return true;
    }
    
    bool insertLast(int value) {
        if (isFull()) return false; 
        deque[r] = value;
        r = (r + 1) % limit;
        ++size;
        return true;
    }
    
    bool deleteFront() {
        if (isEmpty()) return false;
        l = (l + 1) % limit;
        --size;
        return true;
    }
    
    bool deleteLast() {
        if (isEmpty()) return false;
        r = (r - 1 + limit) % limit;
        --size;
        return true;
    }
    
    int getFront() {return isEmpty() ? -1: deque[l];}
    
    int getRear() {return isEmpty() ? -1 : deque[(r - 1  + limit) % limit];}
    
    bool isEmpty() {return size == 0;}
    
    bool isFull() {return size == limit;}
};

