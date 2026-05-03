#!/bin/sh
sxhkd &
slstatus &
mpd &

xinput --set-prop 'MSFT0001:00 06CB:CE2D Touchpad' 'libinput Tapping Enabled' 1 #omogoči klikanje s tapom (torej ne nujno klikom) na ploščico
xinput --set-prop 'MSFT0001:00 06CB:CE2D Touchpad' 'libinput Natural Scrolling Enabled' 1 #drsenje v pravo smer s ploščico

exec dwm
