def compare(x, y):
	print(x < y)
	print(x > y)
	print(x <= y)
	print(x >= y)
	print(x == y)
	print(x != y)
import sys
if __name__ == "__main__":
	compare(int(sys.argv[1]), int(sys.argv[2]))