(function($) {
	$.fn.imagefit = function(options) {
		var $imgContainer = $(this);
		var $newsImg = $(this + " img");
		$imgContainer.css("width", $imgContainer.parent().width());
		if ($newsImg.length > 0) {
			if ($newsImg.width() < $imgContainer.width()) {
				$imgContainer.width($newsImg.width());
			}
			if ($newsImg.height() < $imgContainer.height()) {
				$imgContainer.height($newsImg.height());
			}
			$newsImg.imgscale({ 
				parent : $(this), 
				center: "true",
				scale: "fill"
			});
		}
	};
})(jQuery);