#!/bin/bash

for i in ./{components,pages}/**/*.{tsx,ts,json}; do
  lvim -c "normal gg=G" -c "x" $i
done
