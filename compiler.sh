#!/bin/bash

# ensure test.py can run
chmod 777 test.py

# remove the files if possible
touch output.txt
touch errors.txt
rm output.txt
rm errors.txt

# test compiler
python3 test.py >> output.txt 2&>errors.txt