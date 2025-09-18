/****用链表实现双端循环链表****
 *  Data: 2025.8.28
 *  Lesson: 左程云算法入门-16
 *  Test: https://leetcode.cn/problems/design-circular-deque/description/
**************************/

class MyCircularDeque {
public:
    MyCircularDeque(int k) : size(0), limit(k), front(nullptr), rear(nullptr) {}
    
    // 队头插入
    bool insertFront(int value) {
        if (isFull()) return false;
        Node *node = new Node(value);
        if (isEmpty()) {
            front = rear = node;
        } else {
            front->prev = node;
            node->next = front;
            front = node;
        }
        ++size;
        return true;
    }
    
    // 队尾插入
    bool insertLast(int value) {
        if (isFull()) return false;
        Node *node = new Node(value);
        if (isEmpty()) {
            front = rear = node;
        } else {
            rear->next = node;
            node->prev = rear;
            rear = node;
        }
        ++size;
        return true;
    }
    
    // 队头删除
    bool deleteFront() {
        if (isEmpty()) return false;
        if (front == rear) front = rear = nullptr;
        else {
            Node *p = front;
            front = front->next;
            front->prev = nullptr;
            delete(p);
        }
        --size;
        return true;
    }
    
    // 队尾删除
    bool deleteLast() {
        if (isEmpty()) return false;
        if (rear == front) front = rear = nullptr;
        else {
            Node *p = rear;
            rear = rear->prev;
            rear->next = nullptr;
            delete(p);
        }
        --size;
        return true;
    }
    
    // 获取队头元素
    int getFront() {return isEmpty() ? -1 : front->value;}
    
    // 获取队尾元素
    int getRear() {return isEmpty() ? -1 : rear->value;}
    
    // 队列是否为空
    bool isEmpty() {return size == 0;}
    
    // 队列是否为慢
    bool isFull() {return size == limit;}
private: 
    /*双向链表结点*/
    struct Node
    {
        int value;
        Node *next, *prev;
        Node (int value): value(value),next(nullptr), prev(nullptr) {}
    };
    Node *front, *rear;
    int size, limit;
};
