#include "grepper.h"
#include <cassert>
#include <iostream>
#include <sstream>
#include <vector>

void test_setPattern_valid() {
    Grepper g;
    g.setPattern("abc");
    std::cout << "[PASS] setPattern valid\n";
}

void test_setPattern_invalid() {
    Grepper g;
    bool caught = false;
    try {
        g.setPattern("[");
    } catch (const std::regex_error&) {
        caught = true;
    }
    assert(caught);
    std::cout << "[PASS] setPattern invalid throws\n";
}

int main() {
    test_setPattern_valid();
    test_setPattern_invalid();
    std::cout << "All tests passed (basic).\n";
    return 0;
}