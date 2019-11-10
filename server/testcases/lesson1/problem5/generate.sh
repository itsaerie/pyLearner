#!/bin/bash
for f in input*
do
	cat $f | egrep -o '(\-?[0-9]+, )*?-?[0-9]+' > temp
	
	sed -i 's/,//g' temp
	
	while read line
	do
		arr=( $line )
		echo $f > "repl"
		out="output$(cut -c6- repl)"
		python3 sol.py ${arr[0]} ${arr[1]} > "$out"
		
	done < temp
	
done

rm repl
rm temp
