def getDivergent(words):
	c = 0
	for word in words:
		if word[0] == word[-1]:
			c += 1
	return (c, len(words)-c)
import sys
if __name__ == "__main__":
	print(eval(sys.argv[1]))