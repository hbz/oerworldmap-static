var selectHref = (function(){

  function init() {
    $('[data-select-href]').each(function(){
      init_one(this);
    });
  }
  
  function init_one(one) {
    $select = $(one).find('select');
    $a = $(one).find('a');
    $select.on('change', function(){
      update($select, $a);
    });
    update($select, $a);
  }
  
  function update($select, $a) {
    $a[0].href = $select.val();
  }
  
	return {
		init : init
	};
	
})();


var animateScrollToFragment = (function(){
  
  var additional_offset = 0;

  function init() {
    $('[data-animate-scroll-to-fragment]').each(function(){
      init_one(this);
    });
  }
  
  function init_one(one) {
    $(one).click(function(){
  		$('html, body').animate({
  			scrollTop : $('#' + one.href.split('#')[1]).offset().top - additional_offset
  		}, 1000);
    });
  }
  
	return {
		init : init
	};
	
})();


$(function(){
  
  selectHref.init();
  animateScrollToFragment.init();
  
  $('[data-slick]').slick();
  
});