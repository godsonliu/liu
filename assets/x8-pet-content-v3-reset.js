$(function() {
  let text_image1 = $('.home_media')
  window.addEventListener('scroll', function() {
    const scrollTop = $(window).scrollTop()
    const offsetTop =  text_image1.offset().top
    if(scrollTop > offsetTop) {
      $('.v2_top_bar_section').addClass('v2_top_bar_section_db')
    }else {
      $('.v2_top_bar_section').removeClass('v2_top_bar_section_db')
    }
  })
})