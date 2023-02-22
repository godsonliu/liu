"use strict";

Shopify.theme.jsSlideshowClassic = {
  init: function init($section) {
    // Add settings from schema to current object
    Shopify.theme.jsSlideshowClassic = $.extend(this, Shopify.theme.getSectionData($section)); // Selectors

    var $slideshowClassicEl = $section.find('[data-slideshow-classic]').removeClass('is-hidden');
    var $slideshowClassic = $slideshowClassicEl.flickity({
      wrapAround: true,
      adaptiveHeight: true,
      prevNextButtons: this.number_of_slides > 1 ? this.show_arrows : false,
      pageDots: this.number_of_slides > 1 ? this.show_nav_buttons : false,
      draggable: true,
      imagesLoaded: true,
      fade: this.image_transition == 'fade' ? true : false,
      autoPlay: this.image_slideshow_speed * 1000,
      arrowShape: arrowShape
    }); // Resize flickity when the slider is settled

    function slideAction(targetList, n) {

      var width = window.innerWidth;
      var isVideo = $(targetList.target).find('.gallery-cell').eq(n).find('.video-element').length;
      var video_autoplay = document.getElementsByClassName("video_autoplay")[0];
      if(isVideo > 0 ){
        video_autoplay.currentTime=0;
      }
      
      
      if(width > 769){
        if(isVideo > 0){
          // $('#header').addClass('home');
          // $('#shopify-section-header-classic').addClass('home');
          $('.video_autoplay').trigger('play');
        }else{
          // $('#header').removeClass('home');
          // $('#shopify-section-header-classic').removeClass('home');
          $('video').trigger('pause');
        } 
      }else{
        if(isVideo > 0){
          $('.video_autoplay').trigger('play');
        }else{
          $('video').trigger('pause');
        }
      }
    }
    $slideshowClassicEl.on('settle.flickity', function (targetList, n) {
      $slideshowClassicEl.flickity('resize');
      slideAction(targetList, n);
    });
  },
  blockSelect: function blockSelect($section, blockId) {
    var $slider = $section.find('[data-image-slideshow]');
    var $sliderIndex = $('#shopify-section-' + blockId).data('slide-index');
    $slider.flickity('select', $sliderIndex, true, true);
  },
  unload: function unload($section) {}
};