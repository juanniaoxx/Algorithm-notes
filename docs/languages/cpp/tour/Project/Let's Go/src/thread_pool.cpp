#include "thread_pool.h"

ThreadPool::ThreadPool(size_t numThreads) : stop_(false) {
    // TODO(P5.1): 创建 numThreads 个工作线程，每个线程运行循环:
    // while (true) {
    //    std::function<void()> task;
    //    {
    //        std::unique_lock<std::mutex> lock(queue_mutex_);
    //        condition_.wait(lock, [this] { return stop_ || !tasks_.empty(); });
    //        if (stop_ && tasks_.empty()) return;
    //        task = std::move(tasks_.front());
    //        tasks_.pop();
    //    }
    //    task();
    // }
}

ThreadPool::~ThreadPool() {
    // TODO(P5.1): 设置 stop_ = true，condition_.notify_all()，然后 join 所有线程
}