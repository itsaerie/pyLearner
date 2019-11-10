#!/bin/bash

# input is:
#  filename (problem number.py)
#  lesson directory
file="server/submissions/$2/$1.py`
chmod 777 $file

# create files
touch output.txt
touch errors.txt

# initialize array for all files within testcases
testArr=$(server/testcases/$2/$1/*)
fullArr=${#testArr[@]}
halfArr=$(($fullArr/2))
fname=$testDiff.txt
correct=0

# iterating through the array
for((i=0;i<$halfArr;i++))
do
	# for every element
	j=$(($i+$halfArr))
	# send output to output.txt and errors.txt
	python3 $file ${testArr[$i]} >> output.txt 2 &>errors.txt
	truth=$(echo "$(ls -s output)" | head -c1)
	((correct+=truth))
done

echo "correct "$correct"/"$halfArr > server/submissions/$2/answers

# remove excess files
rm output.txt
rm errors.txt