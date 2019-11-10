#!/bin/bash
for f in input*
do
	cat $f | egrep -o '(\-?[0-9]+, )*?-?[0-9]+' > temp
	
	sed -i 's/,//g' temp
	
	while read line
	do
		arr=( $line )
		touch wtf
		echo $f >> "wtf"
		out="output$(cut -c6- wtf)"
		echo -n "" > "$out"
		python3 sol.py ${arr[0]} ${arr[1]} >> "$out"
		rm wtf
	done < temp	
	
done

rm temp
