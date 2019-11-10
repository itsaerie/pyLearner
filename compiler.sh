#!/bin/bash

# input is:
#  filename (problem number.py)
#  lesson directory
file="server/submissions/$2/$1.py"
chmod 777 $file

# initialize array for all files within testcases
testArr=($(ls server/testcases/$2/$1))
fullArr=${#testArr[@]}
halfArr=$(($fullArr/2))
correct=0

# iterating through the array
for((i=0;i<$halfArr;i++))
do
	# for every element
	j=$(($i+$halfArr))
	# send output to output.txt and errors.txt
  content=$( cat server/testcases/$2/$1/${testArr[$i]} )
	result=$( python3 $file "$content" )
  output=$( cat server/testcases/$2/$1/${testArr[$j]} )
  if [[ "$result" == "$output" ]]
  then
    ((correct++))
  fi
done

echo "Test Cases Passed: $correct/$halfArr" > server/submissions/$2/answers
