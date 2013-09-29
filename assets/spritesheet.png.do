#!/usr/bin/env bash
redo-ifchange 'back.png' *.jpg

rm -rf 'screenshot.png.do.temp.d'
mkdir 'screenshot.png.do.temp.d'

ranks=10

montage 'back.png' -tile 6x1 -geometry +0+0 'screenshot.png.do.temp.d/0-.png'
for (( i=1; i <= "$ranks"; i++ ))
do
	montage "$i"-[0-9].jpg -tile 6x1 -geometry +0+0 "screenshot.png.do.temp.d/$i-.png"
done

rows='screenshot.png.do.temp.d/0-.png'
for (( j=1; j < i; j++ ))
do
	rows="$rows screenshot.png.do.temp.d/$j-.png"
done

montage $rows -tile 1x -geometry +0+0 $3

rm -rf 'screenshot.png.do.temp.d'
