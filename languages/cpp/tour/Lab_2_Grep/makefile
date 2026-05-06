CXX = g++
CXXFLAGS = -std=c++17 -Wall -Wextra -O2
TARGET = grep_lite

all: $(TARGET)

$(TARGET): main.cpp grepper.cpp
	$(CXX) $(CXXFLAGS) -o $(TARGET) main.cpp grepper.cpp

test: $(TARGET)
	@echo "Running tests (manual):"
	@echo "hello world" > test.txt
	@echo "hello c++" >> test.txt
	@echo "goodbye" >> test.txt
	@./$(TARGET) "hello" test.txt || true
	@rm test.txt

clean:
	rm -f $(TARGET)

.PHONY: all clean test