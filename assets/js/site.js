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

var mapStats = (function(){

  const icons = {
    'Organization': 'fa-users',
    'Service': 'fa-desktop',
    'Action': 'fa-gears',
    'Person': 'fa-user',
    'Event': 'fa-calendar',
    'Article': 'fa-comment',
    'WebPage': 'fa-book',
    'Product': 'fa-folder'
  }

  const labels = {
    'Organization': 'Organizations',
    'Service': 'Services',
    'Action': 'Projects',
    'Person': 'People',
    'Event': 'Events',
    'Article': 'Stories',
    'WebPage': 'Publications',
    'Product': 'Tools'
  }

  function buildColumn(bucket) {
    return $(' \
      <div class="col"> \
        <a href="/resource/?filter.about.@type='+bucket.key+'"> \
          <i class="fa '+icons[bucket.key]+'"></i><br/> \
          '+labels[bucket.key]+'<br/> \
          <span class="large">'+bucket.doc_count+'</span> \
        </a> \
      </div> \
    ')
  }

  function init() {
    $.getJSON('/resource.json?size=0', function (data){
      const row = $('<div class="row a-neutral" style="margin-top: 2.5em; line-height: 2;" />');
      data.aggregations['about.@type'].buckets.map(function(bucket){
        row.append(buildColumn(bucket))
      })
      $('#on-the-map div.inner').append(row);
    })
  }

  return {
    init : init
  };

})();


$(function(){

  selectHref.init();
  animateScrollToFragment.init();
  mapStats.init();

  $('[data-slick]').slick();

});
