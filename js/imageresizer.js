function imageResize(size, imagesize) {
	var size = (size[0] > size[1])?size[0]:size[1];
	var imagesize = (imagesize[0] > size[1])?imagesize[0]:imagesize[1];
	if (size > imageresize) {
		return size/imagesize*100;
	}
}