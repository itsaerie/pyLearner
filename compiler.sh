#!/bin/bash


chmod 777 test.py

touch output.txt
touch errors.txt
rm output.txt
rm errors.txt
python3 test.py >> output.txt 2&>errors.txt