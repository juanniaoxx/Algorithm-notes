#!/usr/bin/env python3
import sys

def unlock_p1():
    print("\n=== Problem 1: setPattern ===")
    q = "What exception should be thrown when regex is invalid? (a) std::runtime_error (b) std::regex_error (c) std::logic_error\n> "
    ans = input().strip().lower()
    if ans == 'b':
        print("✅ Correct! Use std::regex_error.")
    else:
        print("❌ Wrong. It's std::regex_error defined in <regex>.")

def unlock_p2():
    print("\n=== Problem 2: processFile error handling ===")
    q = "If a file cannot be opened, what should happen? (a) throw exception (b) print error to stderr and continue (c) exit program\n> "
    ans = input().strip().lower()
    if ans == 'b':
        print("✅ Correct! The program should continue with other files.")
    else:
        print("❌ Wrong. See requirements.")

def unlock_p3():
    print("\n=== Problem 3: regex matching ===")
    q = "Which function do you use to check if a line contains the pattern? (a) std::regex_match (b) std::regex_search (c) std::regex_replace\n> "
    ans = input().strip().lower()
    if ans == 'b':
        print("✅ Correct! regex_search finds substring matches.")
    else:
        print("❌ Wrong. regex_match requires full string match.")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python3 unlock.py P1|P2|P3")
        sys.exit(1)
    prob = sys.argv[1].upper()
    func = globals().get(f"unlock_{prob.lower()}")
    if func:
        func()
    else:
        print(f"Unknown problem {prob}. Available: P1, P2, P3")