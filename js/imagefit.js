(function($) {
	$.fn.imagefit = function(options) {
		var fit = {
			one : function(img, container){
				if ($(img).width() < container.width()) {
					$(img).width('100%').height('auto');
				} else if ($(img).height() < container.height()) {
					$(img).height('100%').width('auto');
				}
			}
		};
		
		this.each(function(){
				var container = this;
				
				// store list of contained images (excluding those in tables)
				var imgs = $('img', container).not($("table img"));
				
				// store initial dimensions on each image 
				imgs.each(function(){
					fit.one(this, container);
				});
			});
		return this;
	};
})(jQuery);