
$(function() {

  $(".banner_1 .banner_bg1_content").addClass("active");

  const width = window.innerWidth;
  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  let h = 600;
  if (width > 769) {
    h = viewPortHeight - 92;    
  } else {
    h = viewPortHeight - 60;
  }
  if (width > 769) {
    $('.eufycare_monitor_3 .banner_3').height(h * 3 + 'px');
    // $('.eufycare_monitor_5 .banner_5').height(h * 4 + 'px');
    $('.eufycare_monitor_7 .banner_7').height(h * 4.5 + 'px');
    // $('.eufycare_monitor_10 .banner_10').height(h * 5 + 'px');
  } else {
    $('.eufycare_monitor_3 .banner_3').height(h * 3 + 'px');
    // $('.eufycare_monitor_5 .banner_5').height(h * 4 + 'px');
    $('.eufycare_monitor_7 .banner_7').height(h * 3.5 + 'px');
    // $('.eufycare_monitor_10 .banner_10').height(h * 5 + 'px');
  }

  const eufycare = {}
  eufycare.banner_back = [
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00002.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00003.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00004.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00005.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00006.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00007.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00008.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00009.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00010.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00011.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00012.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00013.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00014.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00015.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00016.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00017.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00018.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00019.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00020.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00021.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00022.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00023.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00024.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00025.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00026.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00027.png?v=1646809081",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00028.png?v=1646809081",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_29.png?v=1646727341",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_30.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_31.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_32.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_33.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_34.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_35.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_36.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_37.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_38.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_39.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_40.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_41.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_42.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_43.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_44.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_45.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_46.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_47.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_48.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_49.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_00002.png?v=1646809081", 
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_51.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_52.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_53.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_54.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_55.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_56.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_57.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_58.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_59.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_60.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_61.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_62.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_63.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_64.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_65.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_66.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_67.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_68.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_69.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_70.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_71.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_72.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_73.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_74.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_75.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_76.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_77.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_78.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_79.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_80.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_81.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_82.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_83.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_84.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_85.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_86.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_87.png?v=1646727340",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_88.png?v=1646727341",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_89.png?v=1646727341",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_90.png?v=1646727341",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_91.png?v=1646727341",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_92.png?v=1646727341",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_93.png?v=1646727341",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_94.png?v=1646727341",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_95.png?v=1646727341",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_96.png?v=1646727341",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_97.png?v=1646727341",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_98.png?v=1646727341",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_99.png?v=1646727341",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_100.png?v=1646727341",
    "https://cdn.shopify.com/s/files/1/0582/4669/3040/files/1_101.png?v=1646727341",
  ]

  const framePlayer_eufycare = document.getElementById('framePlayer_eufycare');
  eufycare.vPlayer_banner = new vFramePlayer({ useCanvas: true, fps: 5, dom: framePlayer_eufycare, imgArr: eufycare.banner_back });

  

  eufycare.scrollfn = function (event) {
    const top = $(window).scrollTop();
    // const sticky1_position = $('.banner_1').offset().top;
    const sticky2_position = $('.banner_2').offset().top;
    const sticky1_position = $('.banner_3').offset().top;
    const sticky4a_position = $('.banner_4a').offset().top;
    const sticky4b_position = $('.banner_4b').offset().top;
    // const sticky5_position = $('.banner_5').offset().top;
    const sticky6_position = $('.banner_6').offset().top;
    const sticky7_position = $('.banner_7').offset().top;
    const sticky8_position = $('.banner_8').offset().top;
    const sticky9_position = $('.banner_9').offset().top;
    const sticky10_position = $('.banner_10').offset().top;
    const sticky11_position = $('.banner_11').offset().top;

    // const ski1 = top - sticky1_position;
    const ski2 = top - sticky2_position;
    const ski3 = top - sticky1_position;
    const ski4a = top - sticky4a_position;
    const ski4b = top - sticky4b_position;
    // const ski5 = top - sticky5_position;
    const ski6 = top - sticky6_position;
    const ski7 = top - sticky7_position;
    const ski8 = top - sticky8_position;
    const ski9 = top - sticky9_position;
    const ski10 = top - sticky10_position;
    const ski11 = top - sticky11_position;

    // if (ski1 > -0.5*h && ski1 < 0.5*h){
          
    //   $(".banner_1 .banner_bg1_content").addClass("active");
    // }else{
        
    //   $(".banner_1 .banner_bg1_content").removeClass("active");
    // }
    if (ski2 > -0.5*h && ski2 < 0.5*h){
          
      $(".banner_2 .banner_bg2_content").addClass("active");
    }else{
        
      $(".banner_2 .banner_bg2_content").removeClass("active");
    }
    if (ski3 > -0.5*h){
          
      $(".banner_3 .banner_bg3a_content").addClass("active");
    }else{
        
      $(".banner_3 .banner_bg3a_content").removeClass("active");
    }
    if (ski3 > 1.5*h){
          
      $(".banner_3 .banner_bg3b_content").addClass("active");
      $(".banner_3 .banner_bg3b_m").addClass("active");
    }else{
        
      $(".banner_3 .banner_bg3b_content").removeClass("active");
      $(".banner_3 .banner_bg3b_m").removeClass("active");
    }
    if (ski3 <= 0){
          
      $(".banner_3 .banner_3_btm").css("opacity",`0`);
    }
    if (ski3 > 0 && ski3 < 0.5 * h){
      const opacity =1 - 2 * (0.5 * h - ski3) / h;
          
      $(".banner_3 .banner_3_btm").css("opacity",`${0.3 * opacity}`);
    }
    if (ski3 >= 0.5 * h){
          
      $(".banner_3 .banner_3_btm").css("opacity",`0.3`);
    }
    if (ski3 <= 0.5 * h ){
          
      $(`.banner_3 .banner_3_b`).css('clip-path', `inset(100% 0px 0px 0px)`);
    }
    if (ski3 > 0.5 * h && ski3 < 1.5 * h){
      const opacity =1 - (1.5 * h - ski3) / h;
      $(`.banner_3 .banner_3_b`).css('clip-path', `inset(${100 - 100 * opacity}% 0px 0px 0px)`);
    }
    if (ski3 >= 1.5 * h ){
          
      $(`.banner_3 .banner_3_b`).css('clip-path', `inset(0% 0px 0px 0px)`);
    }

    if (ski10 >= 0 && ski10 <= 4 * h){
      // const opacity = (ski10 * 25 * 73)/(100 * h);
      // const i = parseInt(opacity);
      // eufycare.vPlayer_banner.goto(i); 
      eufycare.vPlayer_banner.goto(0)
    }

    if (ski4a > -0.7*h && ski4a < 0.5*h){

      $(".banner_4a .bg4_p").addClass("active");
    }else{
        
      $(".banner_4a .bg4_p").removeClass("active");
    }

    if (ski4a > -0.2*h){
          
      $(".banner_4a .banner_4a_phone_icon1").addClass("active");
      $(".banner_4a .banner_4a_phone_icon2").addClass("active");
    }

    if (ski4b > -0.7*h && ski4b < 0.5*h){
          
      $(".banner_4b .bg4_p").addClass("active");
    }else{
        
      $(".banner_4b .bg4_p").removeClass("active");
    }

    // if (ski5 > -0.5*h && ski5 < 0.5*h){
          
    //   $(".banner_5 .bg5_p1_content").addClass("active");
    // }else{
        
    //   $(".banner_5 .bg5_p1_content").removeClass("active");
    // }
    // if (ski5 <= 0.5*h){
    //   $(".banner_5 .bg5_num").css('opacity', `0`);
    // }
    // if (ski5 > 0.5*h && ski5 < 1.5*h){
    //   const opacity =1 - (1.5 * h - ski5) / h;  
    //   $(".banner_5 .bg5_num").css('opacity', `${opacity}`);
    // }
    // if (ski5 >= 1.5*h){
    //   $(".banner_5 .bg5_num").css('opacity', `1`);
    // }
    // if (ski5 > h){
          
    //   $(".banner_5 .bg5_p2_content").addClass("active");
    // }else{
        
    //   $(".banner_5 .bg5_p2_content").removeClass("active");
    // }
    // if (ski5 <= 1.5*h){
    //   const opacity =1 - (2.5 * h - ski5) / h;  
    //   $(".banner_5 .bg5_mob_content").css('clip-path', `inset(100% 0px 0px 0px)`);
    // }
    // if (ski5 > 1.5*h && ski5 < 2.5*h){
    //   const opacity =1 - (2.5 * h - ski5) / h;  
    //   $(".banner_5 .bg5_mob_content").css('clip-path', `inset(${100 - 100 * opacity}% 0px 0px 0px)`);
    // }
    // if (ski5 >= 2.5*h){
    //   const opacity =1 - (2.5 * h - ski5) / h;  
    //   $(".banner_5 .bg5_mob_content").css('clip-path', `inset(0% 0px 0px 0px)`);
    // }
    if (ski6 > -0.5*h && ski6 < 0.5*h){
          
      $(".banner_6 .banner_bg6_content").addClass("active");
    }else{
        
      $(".banner_6 .banner_bg6_content").removeClass("active");
    }

    if (ski7 > -0.5*h && ski7 < h){
          
      $(".banner_7 .banner_bg7_content").addClass("active");
    }else{
        
      $(".banner_7 .banner_bg7_content").removeClass("active");
    }
    if (ski7 <= 0){
      $(".banner_7 .bg7_32g").css('opacity', `1`);
    }
    if (ski7 > 0 && ski7 < h){
      const opacity =(h - ski7) / h;  
      $(".banner_7 .bg7_32g").css('opacity', `${opacity}`);
    }
    if (ski7 >= h){
      $(".banner_7 .bg7_32g").css('opacity', `0`);
    }
    if (ski7 <= h){
      $(".banner_7 .bg7_32g_svg").css('transform', `scale(1)`);
    }
    if (ski7 > h && ski7 < 2*h){
      const opacity =1 - (2 * h - ski7) / h;  
      $(".banner_7 .bg7_32g_svg").css('transform', `scale(${1 + 9*opacity})`);
    }
    if (ski7 >= 2*h){
      $(".banner_7 .bg7_32g_svg").css('transform', `scale(10)`);
    }

    if (width < 769) {
      if (ski7 <= h){
        $(".banner_7 .bg7_32g_svg").css('top', `0%`);
      }
      if (ski7 > h && ski7 < 2*h){
        const opacity =1 - (2 * h - ski7) / h;  
        $(".banner_7 .bg7_32g_svg").css('top', `-${200*opacity}%`);
      }
      if (ski7 >= 2*h){
        $(".banner_7 .bg7_32g_svg").css('top', `-200%`);
      }
    }


    if (ski7 <= 1.5*h){
      $(".banner_7 .bg7_32g_svg").css('opacity', `1`);
    }
    if (ski7 > 1.5*h && ski7 < 2*h){
      const opacity =1 - 2*(2 * h - ski7) / h;  
      $(".banner_7 .bg7_32g_svg").css('opacity', `${1-opacity}`);
    }
    if (ski7 >= 2*h){
      $(".banner_7 .bg7_32g_svg").css('opacity', `0`);
    }

    if (width < 769) {
      if (ski7 <= 1.5*h){
        $(".banner_7 .baby_all_mob").css('transform', `scale(1.25)`);
      }
      if (ski7 > 1.5*h && ski7 < 2*h){
        const opacity =1 - 2*(2 * h - ski7) / h;  
        $(".banner_7 .baby_all_mob").css('transform', `scale(${1.25 - 0.25*opacity})`);
      }
      if (ski7 >= 2*h){
        $(".banner_7 .baby_all_mob").css('transform', `scale(1)`);
      }
    }

    if (ski8 > -0.5*h && ski8 < 0.5*h){
          
      $(".banner_8 .banner_bg8_content").addClass("active");
    }else{
        
      $(".banner_8 .banner_bg8_content").removeClass("active");
    }

    if (ski8 > -0.2*h){
          
      $(".banner_8 .bg8_icon").addClass("active");
    }else{
        
      $(".banner_8 .bg8_icon").removeClass("active");
    }

    if (ski9 > -0.5*h && ski9 < 0.5*h){
          
      $(".banner_9 .banner_bg9_content").addClass("active");
    }else{
        
      $(".banner_9 .banner_bg9_content").removeClass("active");
    }
    if (ski11 > -0.5*h && ski11 < 0.5*h){
          
      $(".banner_11 .banner_bg11_content").addClass("active");
    }else{
        
      $(".banner_11 .banner_bg11_content").removeClass("active");
    }
  }
  
  $(window).scroll(
    // 防抖节流
    Shopify.contentCreator.util.throttle(eufycare.scrollfn, 50)
  );

  $('.banner_10_content').on('mousemove', function(e) {
    
    const section = {
      left: [0, 17],
      right: [27, 36],
      top: [48, 60],
      bottom: [75, 78]
    }
    const {offsetX, offsetY} = e
    const t = $('.framePlayer_all')
    const left = t[0].offsetLeft
    const top = t[0].offsetTop
    const w = t.width()
    const h = t.height()
    const x = offsetX - left
    const y = offsetY - top
    const xSec = w / 10 
    const center = {
      x: w*.33,
      y: h*.42
    }
    let step

    section.leftFrames = section.left[1] - section.left[0] + 1
    section.rightFrames = section.right[1] - section.right[0] + 1
    section.topFrames = section.top[1] - section.top[0] + 1
    section.bottomFrames = section.bottom[1] - section.bottom[0] + 1

    if(x < center.x && x >= 0) {
      const fps = center.x / section.leftFrames
      step = section.left[1] - parseInt(x / fps)
      eufycare.vPlayer_banner.goto(step)
    }else if(x > center.x && x <= w) {
      const fps = (w - center.x) / section.rightFrames
      step = section.right[0] + parseInt((x - center.x) / fps)
      eufycare.vPlayer_banner.goto(step)
    } 
    
    if(x >= center.x - xSec && x <= center.x + xSec) {
      if(y < center.y && y >= 0) {
        const fps = center.y / section.topFrames
        step = section.top[1] - parseInt(y / fps)
        eufycare.vPlayer_banner.goto(step)
      }else if(y > center.y && y <= h) {
        const fps = (h - center.y) / section.bottomFrames
        step = section.bottom[0] + parseInt((y - center.y) / fps)
        eufycare.vPlayer_banner.goto(step)
      }
    }
  })
})