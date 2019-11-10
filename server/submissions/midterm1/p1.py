import sys
def getDivergent(words):
	dCount = 0
	nCount = 0
	for word in words:
		if word[0] == word[-1]:
			dCount += 1
		else:
			nCount += 1
	print((dCount,nCount))

eval(sys.argv[1].strip())

    