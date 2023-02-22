

// window.onload=function(){
  
// };

$(function() {
  $(".banner_finger .images_scale").addClass("active");
  const width = window.innerWidth;
  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  let h = 600;
  if (width > 1920) {
    h = viewPortHeight - 200; 
  }else if (width <=1920 && width > 769) {
    h = viewPortHeight - 92;    
  } else {
    h = viewPortHeight - 60;
  }
  // if (width > 769) {
  //   $('.t8213_banner .banner_1').height(h * 2 + 'px');
  // } else {
  //   $('.t8213_banner .banner_1').height(h * 2 + 'px');
  // }
  const s10_cont1 = h ;

  const T8213_listing = {}

  

  T8213_listing.scrollfn = function (event) {
    const top = $(window).scrollTop();
    if($("div").hasClass("banner_2")){
      const sticky1_position = $('.banner_1').offset().top;
      const ski1 = top - sticky1_position;
      
      // if (ski1 <= 0.2*h){
      //   if (width > 769) {
      //     $(".banner_1 .banner_finger").css('left', `0%`);
      //   }else{
      //     $(".banner_1 .banner_finger").css('left', `-5%`);
      //   }
        
      // }
      // if (ski1 > 0.2*h && ski1 < 0.7*h){
      //   const opacity =1 - 2*(0.7*h - ski1) / h;  
      //   if (width > 769) {
      //     $(".banner_1 .banner_finger").css('left', `${5*opacity}%`);
      //   }else{
      //     $(".banner_1 .banner_finger").css('left', `${-5 + 5*opacity}%`);
      //   }
        
      // }
      // if (ski1 >= 0.7*h){
      //   if (width > 769) {
      //     $(".banner_1 .banner_finger").css('left', `5%`);
      //   }else{
      //     $(".banner_1 .banner_finger").css('left', `0%`);
      //   }
        
      // }
      
      if (width > 769) {
        if (ski1 <= 0){
          // $(".banner_1 .btm").css('opacity', `0`);
          
          $(".banner_1 .banner_1_content").css('transform', `translateY(0px)`);
        }
        //第一屏遮罩和减缓向下位移
        if (ski1 > 0 && ski1 < 0.5*h){
          const opacity =1 - 2*(0.5*h - ski1) / h;  
          // $(".banner_1 .btm").css('opacity', `${0.8*opacity}`);
          $(".banner_1 .banner_1_content").css('transform', `translateY(${200*opacity}px)`);        
        }
        if (ski1 >= 0.5*h){
          // $(".banner_1 .btm").css('opacity', `0.8`);
          $(".banner_1 .banner_1_content").css('transform', `translateY(200px)`);
        }
      }else{
        if (ski1 <= 0.5*h){
          // $(".banner_1 .btm").css('opacity', `0`);
          
          $(".banner_1 .banner_1_content").css('transform', `translateY(0px)`);
        }
        if (ski1 > 0.5*h && ski1 < h){
          const opacity =1 - 2*(h - ski1) / h;  
          // $(".banner_1 .btm").css('opacity', `${0.8*opacity}`);
          $(".banner_1 .banner_1_content").css('transform', `translateY(${120*opacity}px)`);        
        }
        if (ski1 >= h){
          // $(".banner_1 .btm").css('opacity', `0.8`);
          $(".banner_1 .banner_1_content").css('transform', `translateY(120px)`);
        }
      }
      const sticky2_position = $('.banner_2').offset().top;
      const ski2 = top - sticky2_position;
      if (ski2 <= -0.8*h){
        $(".banner_1 .btm").css('opacity', `0`);
        $(".banner_2 .banner_2_font").css('opacity', `0`);
      }
      if (ski2 > -0.8*h && ski2 < -0.6*h){
        const opacity =1 - 5*(-0.6*h - ski2) / h; 
        $(".banner_1 .btm").css('opacity', `${0.8*opacity}`); 
        $(".banner_2 .banner_2_font").css('opacity', `${opacity}`);
      }
      if (ski2 >= -0.6*h){
        $(".banner_1 .btm").css('opacity', `0.8`);
        $(".banner_2 .banner_2_font").css('opacity', `1`);
      }

      if (width > 769) {
        if (ski2 <= -0.6*h){
          $(".banner_2 .item_1").css('opacity', `0`);
          $(".banner_2 .item_2").css('opacity', `0`);
          $(".banner_2 .item_3").css('opacity', `0`);
        }
        if (ski2 > -0.6*h && ski2 < -0.4*h){
          const opacity =1 - 5*(-0.4*h - ski2) / h;  
          $(".banner_2 .item_1").css('opacity', `${opacity}`);
          $(".banner_2 .item_2").css('opacity', `${opacity}`);
          $(".banner_2 .item_3").css('opacity', `${opacity}`);
        }
        if (ski2 >= -0.4*h){
          $(".banner_2 .item_1").css('opacity', `1`);
          $(".banner_2 .item_2").css('opacity', `1`);
          $(".banner_2 .item_3").css('opacity', `1`);
        }
        if (ski2 <= -0.3*h){
          $(".banner_2 .item_4").css('opacity', `0`);
          $(".banner_2 .item_5").css('opacity', `0`);
          $(".banner_2 .item_6").css('opacity', `0`);
        }
        if (ski2 > -0.3*h && ski2 < -0.1*h){
          const opacity =1 - 5*(-0.1*h - ski2) / h;  
          $(".banner_2 .item_4").css('opacity', `${opacity}`);
          $(".banner_2 .item_5").css('opacity', `${opacity}`);
          $(".banner_2 .item_6").css('opacity', `${opacity}`);
        }
        if (ski2 >= -0.1*h){
          $(".banner_2 .item_4").css('opacity', `1`);
          $(".banner_2 .item_5").css('opacity', `1`);
          $(".banner_2 .item_6").css('opacity', `1`);
        }
      }else{
        if (ski2 <= -0.6*h){
          $(".banner_2 .item_1").css('opacity', `0`);
          
        }
        if (ski2 > -0.6*h && ski2 < -0.4*h){
          const opacity =1 - 5*(-0.4*h - ski2) / h;  
          $(".banner_2 .item_1").css('opacity', `${opacity}`);
          
        }
        if (ski2 >= -0.4*h){
          $(".banner_2 .item_1").css('opacity', `1`);
        }
        if (ski2 <= -0.4*h){
          $(".banner_2 .item_2").css('opacity', `0`);
          $(".banner_2 .item_3").css('opacity', `0`);
        }
        if (ski2 > -0.4*h && ski2 < -0.2*h){
          const opacity =1 - 5*(-0.2*h - ski2) / h;  
          $(".banner_2 .item_2").css('opacity', `${opacity}`);
          $(".banner_2 .item_3").css('opacity', `${opacity}`);
        }
        if (ski2 >= -0.2*h){
          $(".banner_2 .item_2").css('opacity', `1`);
          $(".banner_2 .item_3").css('opacity', `1`);
        }
        if (ski2 <= -0.2*h){
          $(".banner_2 .item_4").css('opacity', `0`);
          $(".banner_2 .item_5").css('opacity', `0`);
        }
        if (ski2 > -0.2*h && ski2 < 0){
          const opacity =1 - 5*(0 - ski2) / h;  
          $(".banner_2 .item_4").css('opacity', `${opacity}`);
          $(".banner_2 .item_5").css('opacity', `${opacity}`);
        }
        if (ski2 >= 0){
          $(".banner_2 .item_4").css('opacity', `1`);
          $(".banner_2 .item_5").css('opacity', `1`);
        }
        if (ski2 <= 0){
          $(".banner_2 .item_6").css('opacity', `0`);
        }
        if (ski2 > 0 && ski2 < 0.2*h){
          const opacity =1 - 5*(0.2*h - ski2) / h;  
          $(".banner_2 .item_6").css('opacity', `${opacity}`);
        }
        if (ski2 >= 0.2*h){
          $(".banner_2 .item_6").css('opacity', `1`);
        }
      }
    }
  }
  $(window).scroll(
    // 防抖节流
    Shopify.contentCreator.util.throttle(T8213_listing.scrollfn, 10)
  );
})