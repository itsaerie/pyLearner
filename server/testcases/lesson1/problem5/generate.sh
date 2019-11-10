#!/bin/bash
for f in input*
do
	
	echo $f > "repl"
	out="output$(cut -c6- repl)"
	python3 sol.py "$(cat $f)" > "$out"
	
done

rm repl
