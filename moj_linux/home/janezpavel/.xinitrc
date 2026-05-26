#!/bin/sh
sxhkd &
slstatus &
mpd &

xinput --set-prop 'MSFT0001:00 06CB:CE2D Touchpad' 'libinput Tapping Enabled' 1 # omogoči klikanje s tapom (torej ne nujno klikom) na ploščico
xinput --set-prop 'MSFT0001:00 06CB:CE2D Touchpad' 'libinput Natural Scrolling Enabled' 1 # drsenje v pravo smer s ploščico

export _JAVA_AWT_WM_NONREPARENTING=1 # pove Javi, kakšne vrste je upravljalec oken, da ne prihaja do napak

exec dwm
