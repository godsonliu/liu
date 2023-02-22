
$(function() {
  $(".banner_2_content_all").slick({
    dots: true,
    arrows:false,
    autoplay:true,
    infinite: true,
    initialSlide: 0,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow:1,
    slidesToScroll:1,
    cssEase:'ease',
    pauseOnHover:false,
  });

  const width = window.innerWidth;
  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  let h = 600;
  if (width > 769) {
    h = viewPortHeight - 92;    
  } else {
    h = viewPortHeight - 60;
  }

  $(window).scroll(function(){
    const top = $(window).scrollTop();
    const sticky2_position = $('.banner_2').offset().top;
    const sticky3_position = $('.banner_3').offset().top;
    const sticky2a_position = $('.banner_2_content_all_mob .banner_2_content_a').offset().top;
    const sticky2b_position = $('.banner_2_content_all_mob .banner_2_content_b').offset().top;
    const sticky2c_position = $('.banner_2_content_all_mob .banner_2_content_c').offset().top;

    const ski2 = top - sticky2_position;
    const ski3 = top - sticky3_position;
    const ski2a = top - sticky2a_position;
    const ski2b = top - sticky2b_position;
    const ski2c = top - sticky2c_position;

    
    
    if (width > 769) {
      if (ski2 > -0.5*h && ski2 < 0.5*h){
          
        $(".banner_2 .banner_2_content_a .dog").addClass("active");
        $(".banner_2 .banner_2_content_a .gouliang").addClass("active");
        $(".banner_2 .banner_2_content_b .dog_all_b").addClass("active");
        $(".banner_2 .banner_2_content_b .dog_bg_b").addClass("active");
        $(".banner_2 .banner_2_content_b .banner_2_b_bk").addClass("active");
        $(".banner_2 .banner_2_content_b .banner_2_p_b1").addClass("active");
        $(".banner_2 .banner_2_content_b .banner_2_p_b2").addClass("active");
        $(".banner_2 .banner_2_content_b .dog_b").addClass("active");
        $(".banner_2 .banner_2_content_c .dog_c").addClass("active");
        $(".banner_2 .banner_2_content_c .dog_bg_c").addClass("active");
        $(".banner_2 .banner_2_content_c .dog_all_c").addClass("active");
      }else{
          
        $(".banner_2 .banner_2_content_a .dog").removeClass("active");
        $(".banner_2 .banner_2_content_a .gouliang").removeClass("active");
        $(".banner_2 .banner_2_content_b .dog_all_b").removeClass("active");
        $(".banner_2 .banner_2_content_b .dog_bg_b").removeClass("active");
        $(".banner_2 .banner_2_content_b .banner_2_b_bk").removeClass("active");
        $(".banner_2 .banner_2_content_b .banner_2_p_b1").removeClass("active");
        $(".banner_2 .banner_2_content_b .banner_2_p_b2").removeClass("active");
        $(".banner_2 .banner_2_content_b .dog_b").removeClass("active");
        $(".banner_2 .banner_2_content_c .dog_c").removeClass("active");
        $(".banner_2 .banner_2_content_c .dog_bg_c").removeClass("active");
        $(".banner_2 .banner_2_content_c .dog_all_c").removeClass("active");
      }
    }else{
      if (ski2a > -0.5*h && ski2a < 0.5*h){
        $(".banner_2 .banner_2_content_a .dog").addClass("active");
        $(".banner_2 .banner_2_content_a .gouliang").addClass("active");
        $(".banner_2 .banner_2_content_a .dog").removeClass("active_1");
        $(".banner_2 .banner_2_content_a .gouliang").removeClass("active_1");
      }else{
        $(".banner_2 .banner_2_content_a .dog").removeClass("active");
        $(".banner_2 .banner_2_content_a .gouliang").removeClass("active");
        $(".banner_2 .banner_2_content_a .dog").addClass("active_1");
        $(".banner_2 .banner_2_content_a .gouliang").addClass("active_1");
      }
      if (ski2b > -0.5*h && ski2b < 0.5*h){
        $(".banner_2 .banner_2_content_b .dog_all_b").addClass("active");
        $(".banner_2 .banner_2_content_b .dog_bg_b").addClass("active");
        $(".banner_2 .banner_2_content_b .dog_b").addClass("active");
        $(".banner_2 .banner_2_content_b .banner_2_b_bk").addClass("active");
        $(".banner_2 .banner_2_content_b .banner_2_p_b1").addClass("active");
        $(".banner_2 .banner_2_content_b .banner_2_p_b2").addClass("active");

        $(".banner_2 .banner_2_content_b .dog_all_b").removeClass("active_1");
        $(".banner_2 .banner_2_content_b .dog_bg_b").removeClass("active_1");
        $(".banner_2 .banner_2_content_b .dog_b").removeClass("active_1");
        $(".banner_2 .banner_2_content_b .banner_2_b_bk").removeClass("active_1");
        $(".banner_2 .banner_2_content_b .banner_2_p_b1").removeClass("active_1");
        $(".banner_2 .banner_2_content_b .banner_2_p_b2").removeClass("active_1");

      }else{
        $(".banner_2 .banner_2_content_b .dog_all_b").removeClass("active");
        $(".banner_2 .banner_2_content_b .dog_bg_b").removeClass("active");
        $(".banner_2 .banner_2_content_b .dog_b").removeClass("active");
        $(".banner_2 .banner_2_content_b .banner_2_b_bk").removeClass("active");
        $(".banner_2 .banner_2_content_b .banner_2_p_b1").removeClass("active");
        $(".banner_2 .banner_2_content_b .banner_2_p_b2").removeClass("active");

        $(".banner_2 .banner_2_content_b .dog_all_b").addClass("active_1");
        $(".banner_2 .banner_2_content_b .dog_bg_b").addClass("active_1");
        $(".banner_2 .banner_2_content_b .dog_b").addClass("active_1");
        $(".banner_2 .banner_2_content_b .banner_2_b_bk").addClass("active_1");
        $(".banner_2 .banner_2_content_b .banner_2_p_b1").addClass("active_1");
        $(".banner_2 .banner_2_content_b .banner_2_p_b2").addClass("active_1");

      }
      if (ski2c > -0.5*h && ski2c < 0.5*h){
        $(".banner_2 .banner_2_content_c .dog_c").addClass("active");
        $(".banner_2 .banner_2_content_c .dog_bg_c").addClass("active");
        $(".banner_2 .banner_2_content_c .dog_all_c").addClass("active");
        $(".banner_2 .banner_2_content_c .dog_c").removeClass("active_1");
      }else{
        $(".banner_2 .banner_2_content_c .dog_c").removeClass("active");
        $(".banner_2 .banner_2_content_c .dog_bg_c").removeClass("active");
        $(".banner_2 .banner_2_content_c .dog_all_c").removeClass("active");
        $(".banner_2 .banner_2_content_c .dog_c").addClass("active_1");
      }
    }
    
    if (ski3 > -0.5*h && ski3 < 1.5*h){
          
      $(".banner_3 .banner_3_content .gou_bg_4").addClass("active");
      $(".banner_3 .banner_3_content .shou").addClass("active");
      $(".banner_3 .banner_3_content .gouliang_top").addClass("active");
      $(".banner_3 .banner_3_content .gouliang_top .gouliang_top_y").addClass("active");
      $(".banner_3 .banner_3_content .gouliang_bottom").addClass("active");
      $(".banner_3 .banner_3_content .gouliang_bottom .gouliang_bottom_y").addClass("active");

      $(".banner_3 .banner_3_content .shou").removeClass("active_1");
      $(".banner_3 .banner_3_content .gouliang_top").removeClass("active_1");
      $(".banner_3 .banner_3_content .gou_bg_4").removeClass("active_1");
    }else{
        
      $(".banner_3 .banner_3_content .gou_bg_4").removeClass("active");
      $(".banner_3 .banner_3_content .shou").removeClass("active");
      $(".banner_3 .banner_3_content .gouliang_top").removeClass("active");
      $(".banner_3 .banner_3_content .gouliang_top .gouliang_top_y").removeClass("active");
      $(".banner_3 .banner_3_content .gouliang_bottom").removeClass("active");
      $(".banner_3 .banner_3_content .gouliang_bottom .gouliang_bottom_y").removeClass("active");

      $(".banner_3 .banner_3_content .shou").addClass("active_1");
      $(".banner_3 .banner_3_content .gouliang_top").addClass("active_1");
      $(".banner_3 .banner_3_content .gou_bg_4").addClass("active_1");
    }
  })
})


