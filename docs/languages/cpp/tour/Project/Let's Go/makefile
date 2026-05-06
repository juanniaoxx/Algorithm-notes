CXX = g++
CXXFLAGS = -std=c++17 -pthread -Wall -Wextra -O2 -g -Isrc
TARGET = cwc
TEST_TARGET = test_runner

SRCDIR = src
BUILDDIR = build

SOURCES = $(SRCDIR)/main.cpp $(SRCDIR)/counter.cpp $(SRCDIR)/thread_pool.cpp $(SRCDIR)/utils.cpp
OBJECTS = $(addprefix $(BUILDDIR)/, $(notdir $(SOURCES:.cpp=.o)))

TEST_SOURCES = test.cpp $(SRCDIR)/counter.cpp $(SRCDIR)/thread_pool.cpp $(SRCDIR)/utils.cpp
TEST_OBJECTS = $(addprefix $(BUILDDIR)/, $(notdir $(TEST_SOURCES:.cpp=.o)))

all: $(TARGET)

$(BUILDDIR):
	mkdir -p $(BUILDDIR)

$(BUILDDIR)/%.o: $(SRCDIR)/%.cpp | $(BUILDDIR)
	$(CXX) $(CXXFLAGS) -c $< -o $@

$(BUILDDIR)/test.o: test.cpp | $(BUILDDIR)
	$(CXX) $(CXXFLAGS) -c $< -o $@

$(TARGET): $(OBJECTS)
	$(CXX) $(CXXFLAGS) $^ -o $@

$(TEST_TARGET): $(TEST_OBJECTS)
	$(CXX) $(CXXFLAGS) $^ -o $@

# 修正：加上运行命令
test: $(TEST_TARGET)
	./$(TEST_TARGET)

clean:
	rm -rf $(BUILDDIR) $(TARGET) $(TEST_TARGET)

.PHONY: all clean test