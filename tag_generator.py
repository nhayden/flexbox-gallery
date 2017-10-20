#!/usr/bin/env python3

with open("sample_wallpapers_list.txt", "r") as f:
	for line in f:
		full, thumb = line.strip().split(",")
		print('<div class="thumb-box"><div class="bounder"><a class="full-anchor" href="{}"><img class="thumb thumb-low-res" data-fullres="{}" src="{}"></a><div class="thumb-info"><span class="res">placeholder</span></div></div></div>'.format(full, full, thumb))
