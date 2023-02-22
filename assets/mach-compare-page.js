$(function () {
  let supnodes = $('.sup-dom');
  supnodes.on('click', function () {
    let h = document.querySelector('#mach_last')?.offsetTop
    $('html, body').animate({
      scrollTop: h - 100
    }, 500)
  })
})