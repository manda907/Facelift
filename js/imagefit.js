(function($) {
  $.fn.imagefit = function(){
    var bgImg = $(this);		
 
    function resizeImg() {
      var imgwidth = bgImg.width();
      var imgheight = bgImg.height();
 
      var winwidth = $(this).parent().width();
      var winheight = $(this).parent().height();
 
      var widthratio = winwidth / imgwidth;
      var heightratio = winheight / imgheight;
 
      var widthdiff = heightratio * imgwidth;
      var heightdiff = widthratio * imgheight;
 
      if(heightdiff>winheight) {
        bgImg.css({
          width: winwidth+'px',
          height: heightdiff+'px'
        });
      } else {
        bgImg.css({
          width: widthdiff+'px',
          height: winheight+'px'
        });		
      }
    } 
    resizeImg(); 
  };
})(jQuery)