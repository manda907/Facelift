(function($) {
	$.fn.imagefit = function(options) {
		this.each(function(){
				var container = this;
				
				// store list of contained images (excluding those in tables)
				var imgs = $('img', container).not($("table img"));
				
				// store initial dimensions on each image 
				imgs.each(function(){
					adjustRatio(this);
				});
				function adjustRatio(img)
				{
					var container = this;
					if(container.height() < img.height())
					{
						img.css('height', '100%');
						img.css('width', 'auto');
					}
					else if(container.width() < img.width())
					{
						img.css('width', '100%');
						img.css('height', 'auto');
					}
				}
			});
		return this;
	};
})(jQuery);