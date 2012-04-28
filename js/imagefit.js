(function($) {
	$.fn.imagefit = function(options) {
		function adjustRatio(img)
		{
			if(window.innerHeight < img.height)
			{
				img.style.height = '100%';
				img.style.width = 'auto';
			}
			else if(window.innerWidth < img.width)
			{
				img.style.width = '100%';
				img.style.height = 'auto';
			}
		}
		
		this.each(function(){
				var container = this;
				
				// store list of contained images (excluding those in tables)
				var imgs = $('img', container).not($("table img"));
				
				// store initial dimensions on each image 
				imgs.each(function(){
					adjustRatio(this);
				});
			});
		return this;
	};
})(jQuery);