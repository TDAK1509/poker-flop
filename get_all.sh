#!/bin/bash

files=$(find -f ./src | grep -v "utils.js")
for file in $files;
  do node $file;
done
