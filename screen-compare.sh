#!/bin/bash

if [ $2 ]; then

  for group in $(ls $1); do
    echo $group
    for screen in $(ls $1/$group); do
        echo "     $screen"
        compare "$2/$group/$screen" "$1/$group/$screen" png:- | montage -geometry +4+4 "$2/$group/$screen" - "$1/$group/$screen" png:- | display -title "\"$1/$group/$screen\"" -
    done
  done

else
	echo ""
	echo Usage: screen-compare.sh [current-screenshots-root-folder] [previous-screenshots-root-folder]
	echo     eg ./screen-compare.sh ~/Projects/forms-angular/website/test/screen_tests/screenshots ~/Projects/forms-angular/old-screens/website/test/screen_tests/screenshots
	echo ""
fi

