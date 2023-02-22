$(function () {

  const width = window.innerWidth;
  console.log('width', width);
  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  let h = 600;
  if (width > 769) {
    h = viewPortHeight - 92;
  } else {
    h = viewPortHeight - 60;
  }

  if (width > 769) {
    $('.t8423listing_4 .banner_bg4').height(h * 2.5 + 'px');
    $('.t8423listing_5 .banner_bg5').height(h * 6 + 'px');
  } else {
    $('.t8423listing_4 .banner_bg4').height(h * 2.5 + 'px');
    $('.t8423listing_5 .banner_bg5').height(h * 6 + 'px');
  }


  $(window).scroll(function () {
    const top = $(window).scrollTop();
    const sticky3_position = $('.banner_bg3').offset().top;
    const sticky4_position = $('.banner_bg4').offset().top;
    const sticky5_position = $('.banner_bg5').offset().top;

    const ski3 = top - sticky3_position;
    const ski4 = top - sticky4_position;
    const ski5 = top - sticky5_position;

    if (ski3 > -0.5 * h) {
      $(".banner_bg3 .bg3_btm").addClass("active");
    } else {
      $(".banner_bg3 .bg3_btm").removeClass("active");
    }
    if (ski3 > -0.2 * h) {
      $(".banner_bg3 .bg3_content").addClass("active");
    } else {
      $(".banner_bg3 .bg3_content").removeClass("active");
    }
    if (ski4 <= 0) {
      $(`.bg4_dh`).css("transform", `translateX(0vw)`);
    }
    if (ski4 > 0 && ski4 < h) {
      const opacity = 1 - ((h - ski4) / h);
      $(`.bg4_dh`).css("transform", `translateX(${-100 * opacity}vw)`);
    }
    if (ski4 >= h) {
      $(`.bg4_dh`).css("transform", `translateX(-100vw)`);
    }
    if (ski5 <= 0) {
      $(`.bg5_a2`).css("opacity", `0`);
      $(`.light_content`).css("width", `1vw`);
    }
    if (ski5 > 0 && ski5 < h) {
      const opacity = 1 - ((h - ski5) / h);
      $(`.bg5_a2`).css("opacity", `${opacity}`);
      $(`.light_content`).css("width", `${1 + 7 * opacity}vw`);
    }

    if (ski5 >= h) {
      $(`.bg5_a2`).css("opacity", `1`);
      $(`.light_content`).css("width", `8vw`);
    }
    if (ski5 <= 1.5 * h) {
      $(`.bg5_b`).css("clip-path", `inset(100% 0px 0px 0px)`);
    }
    if (ski5 > 1.5 * h && ski5 < 2.5 * h) {
      const opacity = 1 - ((2.5 * h - ski5) / h);
      $(`.bg5_b`).css("clip-path", `inset(${100 - 100 * opacity}% 0px 0px 0px)`);
    }
    if (ski5 >= 2.5 * h) {
      $(`.bg5_b`).css("clip-path", `inset(0% 0px 0px 0px)`);
    }
    if (ski5 <= 3 * h) {
      $(`.bg5_a4`).css("opacity", `0`);
      $(`.qh_yellow_a`).css("transform", `scale(0.7)`);
      $(`.qh_blue_a`).css("transform", `scale(1)`);
    }
    if (ski5 > 3 * h && ski5 < 4 * h) {
      const opacity = 1 - ((4 * h - ski5) / h);
      $(`.bg5_a4`).css("opacity", `${opacity}`);
      $(`.qh_yellow_a`).css("transform", `scale(${0.7 + 0.3 * opacity})`);
      $(`.qh_blue_a`).css("transform", `scale(${1 - 0.3 * opacity})`);
    }
    if (ski5 >= 4 * h) {
      $(`.bg5_a4`).css("opacity", `1`);
      $(`.qh_yellow_a`).css("transform", `scale(1)`);
      $(`.qh_blue_a`).css("transform", `scale(0.7)`);
    }
  })
})