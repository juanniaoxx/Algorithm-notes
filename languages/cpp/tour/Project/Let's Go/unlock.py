#!/usr/bin/env python3
import sys

def unlock_p0():
    print("\n=== Problem 0: Understanding normalizeWord ===")
    q = "normalizeWord(\"C++11\") should return? (a) \"c++11\" (b) \"c11\" (c) \"c\" (d) \"\"\n> "
    ans = input(q).strip().lower()
    if ans == 'b':
        print("✅ Correct! It strips non-alnum from ends and lowercases.")
    else:
        print("❌ Incorrect. Read utils.cpp carefully.")

def unlock_p1():
    print("\n=== Problem 1: countInFile behavior ===")
    q = "What should countInFile do when the file does not exist? (a) return empty map (b) throw std::runtime_error (c) crash (d) print error and return empty map\n> "
    ans = input(q).strip().lower()
    if ans == 'b':
        print("✅ Correct! It must throw an exception.")
    else:
        print("❌ Incorrect. See problem statement.")

def unlock_p2():
    print("\n=== Problem 2: Sequential processing ===")
    q = "In sequential version, do we need a mutex when merging? (a) yes (b) no (c) depends on the OS\n> "
    ans = input(q).strip().lower()
    if ans == 'b':
        print("✅ Correct! Only one thread, so no mutex needed.")
    else:
        print("❌ Incorrect. Think about concurrency risks.")

def unlock_p3():
    print("\n=== Problem 3: Thread-safe merge ===")
    q = "Which lock should you use to protect the global map? (a) std::unique_lock (b) std::lock_guard (c) both work (d) no lock needed\n> "
    ans = input(q).strip().lower()
    if ans in ['b', 'c']:
        print("✅ Correct! lock_guard is sufficient; unique_lock also works but heavier.")
    else:
        print("❌ Incorrect. Use RAII lock.")

def unlock_p4():
    print("\n=== Problem 4: Using std::async ===")
    q = "When using std::async, how do you get the result from a future? (a) .wait() (b) .get() (c) .result() (d) .value()\n> "
    ans = input(q).strip().lower()
    if ans == 'b':
        print("✅ Correct! future.get() returns the value and waits.")
    else:
        print("❌ Incorrect. Review std::future.")

def unlock_p5():
    print("\n=== Problem 5: Thread pool ===")
    q = "In thread pool destructor, what must you do before joining threads? (a) clear task queue (b) set stop_ flag and notify_all (c) delete workers (d) nothing\n> "
    ans = input(q).strip().lower()
    if ans == 'b':
        print("✅ Correct! Set stop_ and notify condition variable.")
    else:
        print("❌ Incorrect. Read the pattern.")

def unlock_p6():
    print("\n=== Problem 6: Using thread pool in main ===")
    q = "How do you submit a task to the thread pool? (a) pool.submit (b) pool.enqueue (c) pool.add (d) pool.run\n> "
    ans = input(q).strip().lower()
    if ans == 'b':
        print("✅ Correct! enqueue returns a future.")
    else:
        print("❌ Incorrect. Check thread_pool.h")

def unlock_p7():
    print("\n=== Problem 7: Directory recursion ===")
    q = "Which C++17 feature is used to recursively traverse directories? (a) std::directory_iterator (b) std::recursive_directory_iterator (c) std::filesystem::walk (d) std::glob\n> "
    ans = input(q).strip().lower()
    if ans == 'b':
        print("✅ Correct! recursive_directory_iterator.")
    else:
        print("❌ Incorrect. Review std::filesystem.")

def unlock_p8():
    print("\n=== Problem 8: Progress display ===")
    q = "Which type is suitable for a counter accessed by multiple threads without lock? (a) int (b) volatile int (c) std::atomic<size_t> (d) std::mutex guarded int\n> "
    ans = input(q).strip().lower()
    if ans == 'c':
        print("✅ Correct! std::atomic provides atomic operations.")
    else:
        print("❌ Incorrect. Use atomic to avoid data races.")

def unlock_p9():
    print("\n=== Problem 9: Stopwords filtering ===")
    q = "Where should you apply stopwords filtering? (a) during countInFile (b) during merge (c) after sorting (d) both a and b\n> "
    ans = input(q).strip().lower()
    if ans == 'b':
        print("✅ Correct! Filtering during merge avoids adding them to global map.")
    else:
        print("❌ Incorrect. Think about efficiency.")

def unlock_p10():
    print("\n=== Problem 10: Performance tuning ===")
    q = "Which is NOT a good way to improve performance? (a) use move semantics for local maps (b) increase thread pool size beyond CPU cores (c) use mmap for large files (d) use a concurrent hashmap\n> "
    ans = input(q).strip().lower()
    if ans == 'b':
        print("✅ Correct! Too many threads cause overhead, not linear speedup.")
    else:
        print("❌ Incorrect. Consider the trade-offs.")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python3 unlock.py P0|P1|...|P10")
        sys.exit(1)
    problem = sys.argv[1].upper()
    func = globals().get(f"unlock_{problem.lower()}")
    if func:
        func()
    else:
        print(f"No unlock for {problem}. Available: P0 through P10.")