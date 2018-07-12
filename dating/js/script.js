$(document).ready(function () {

    $('.how-it-work .carousel').slick({
        infinite: false,
        dots: true,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).attr('data-pag-icon');
            return '<img src="'+thumb+'" />';
        },
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        sped: 1000,
        nextArrow: '.how-it-work .btn.nav.next',
        prevArrow: '.how-it-work .btn.nav.prev',
    });

    $('.love-stories .carousel').slick({
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        sped: 1000,
        nextArrow: '.love-stories .btn.nav.next',
        prevArrow: '.love-stories .btn.nav.prev',
        centerMode: true,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              infinite: true
            }
          }
        ]
    }).on('afterChange', function(event, slick, currentSlide, nextSlide){
        changeStories();
    });

    //chenage slides for love stories
    changeStories();

    //scroll page
    $('.scrollto').on('click', function (e) {
       e.preventDefault();
       var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1200);
    });

    $('.dropdown-toggle').dropdown();

    $('input,select,textarea').not('[type=submit]').jqBootstrapValidation();

});

function changeStories() {
    var currentItem = $('.love-stories .carousel li.slick-center').attr('data-preview');
    $('.love-stories .item').hide();
    $('.love-stories .item[data-id="'+currentItem+'"]').show();

}

// $(window).on('load', function () {
//
// });

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});


// dropdown not close
$(document).on("click.bs.dropdown.data-api", ".noclose", function (e) { e.stopPropagation() });


$(function(){ $('#jcrop_target').Jcrop(); });


jQuery(function($){
    // Create variables (in this scope) to hold the API and image size
    var jcrop_api,
        boundx,
        boundy,

        // Grab some information about the preview pane
        $preview = $('#preview-pane'),
        $pcnt = $('#preview-pane .preview-container'),
        $pimg = $('#preview-pane .preview-container img'),

        xsize = $pcnt.width(),
        ysize = $pcnt.height();
    
    console.log('init',[xsize,ysize]);
    $('#target').Jcrop({
      onChange: updatePreview,
      onSelect: updatePreview,
      aspectRatio: xsize / ysize
    },function(){
      // Use the API to get the real image size
      var bounds = this.getBounds();
      boundx = bounds[0];
      boundy = bounds[1];
      // Store the API in the jcrop_api variable
      jcrop_api = this;

      // Move the preview into the jcrop container for css positioning
      $preview.appendTo(jcrop_api.ui.holder);
    });

    function updatePreview(c)
    {
      if (parseInt(c.w) > 0)
      {
        var rx = xsize / c.w;
        var ry = ysize / c.h;

        $pimg.css({
          width: Math.round(rx * boundx) + 'px',
          height: Math.round(ry * boundy) + 'px',
          marginLeft: '-' + Math.round(rx * c.x) + 'px',
          marginTop: '-' + Math.round(ry * c.y) + 'px'
        });
      }
    };

  });




