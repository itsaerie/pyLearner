#!/bin/bash

# ensure test.py can run
chmod 777 test.py

# create files
touch output.txt
touch errors.txt

# initialize array for all files within testCases
testArr=$(ls testCases/*)
fullArr=${#testArr[@]}
testArr=$(($fullArr/2))
fname=$testDiff.txt
correct=0

# iterating through the array
for((i=0;i<$halfArr;i++))
do
	# for every element
	j=$(($i+$halfArr))
	# send output to output.txt and errors.txt
	python3 test.py ${testArr[$i]} >> output.txt 2&>errors.txt
	truth=$(echo "$(ls -s output)" | head -c1)
	((correct+=truth))
done

echo "correct "$correct"/"$halfArr > answers

# remove excess files
rm output.txt
rm errors.txt