#!/bin/bash

# ensure test.py can run
chmod 777 test.py

# remove the files if possible
touch output.txt
touch errors.txt
rm output.txt
rm errors.txt

# initialize array for all files within testCases
testArr=$(ls testCases/*)
fullArr=${#testArr[@]}
testArr=$(($fullArr/2))
fname=$testDiff.txt

# iterating through the array
for((i=0;i<$halfArr;i++))
do
	# for every element
	j=$(($i+$halfArr))
	# send output to output.txt and errors.txt
	python3 test.py ${testArr[$i]} >> output.txt 2&>errors.txt
done