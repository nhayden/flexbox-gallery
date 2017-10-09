#!/usr/bin/env python3

with open("sample_wallpapers_list.txt", "r") as f:
	for line in f:
		full, thumb = line.strip().split(",")
		print('<div class="thumb-box"><a class="full-anchor" href="{}"><img class="thumb" data-fullres="{}" src="{}"></a></div>'.format(full, full, thumb))
