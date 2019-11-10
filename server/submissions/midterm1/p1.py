import sys
def getDivergent(words):
	divCount = 0
	nonCount = 0
	for word in words:
		if word[0] == word[-1]:
			divCount += 1
		else:
			nonCount += 1
	print((divCount, nonCount))

eval(sys.argv[1].strip())

    