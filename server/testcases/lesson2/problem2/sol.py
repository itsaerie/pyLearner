def listSwap(items):
	items.sort()
	items.reverse()
	print(items.pop())
	print(items.count('a'))
import sys
if __name__ == "__main__":
	eval(sys.argv[1])