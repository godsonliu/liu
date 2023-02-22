$(function() {
  window.addEventListener('scroll', function() {
    const scrollTop = $(window).scrollTop()
    if(scrollTop > 10) {
      $('.v2_top_bar_section').addClass('v2_top_bar_section_db')
    }else {
      $('.v2_top_bar_section').removeClass('v2_top_bar_section_db')
    }
  })
})