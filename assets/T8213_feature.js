function openVideo(val) {
    let $block = $('.'+ val);
    var isActive = $block.is('.check-button-active');
    if(!isActive) {
      if(val === "check-button-lf"){
        $('.check-button-rg').removeClass('check-button-active');
        $('.check-button-lf').addClass('check-button-active');
          $('.img-lf').removeClass('active');
          $('.img-lf_hover').addClass('active');
          $('.img-rg').addClass('active');
          $('.img-rg_hover').removeClass('active');
        $('.video_1').removeClass('is-hidden');
        $('.video_2').addClass('is-hidden');
        video1.play();
        video2.load();
      }else{
        $('.check-button-lf').removeClass('check-button-active');
        $('.check-button-rg').addClass('check-button-active');
        $('.img-lf').addClass('active');
        $('.img-lf_hover').removeClass('active');
        $('.img-rg').removeClass('active');
        $('.img-rg_hover').addClass('active');
        $('.video_2').removeClass('is-hidden');
        $('.video_1').addClass('is-hidden');
        video2.play();
        video1.load();
        
      }
    } 
  }

  // 监听视频播放完切换视频
  var video1 = document.getElementById("video_1");
  var video2 = document.getElementById("video_2");

  video1.addEventListener("ended", function(){
    openVideo('check-button-rg')
  });
  video2.addEventListener("ended", function(){
    openVideo('check-button-lf')
  });
  $(document).ready(function(){
    const width = window.innerWidth;
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let h = 600;
    if (width > 769) {
      h = viewPortHeight - 92;    
    } else {
      h = viewPortHeight - 60;
    }
    const t8213_feature = {}

    if (width >= 798 ){
      // hover切换按钮动画
      $(".check-button-lf").hover(
        function(){
          //当鼠标放上去的时候,程序处理
          $(".check-button-lf").addClass("check-button-hover")
          $(".check-button-rg").removeClass("check-button-hover")
          $(".check-button-rg").addClass("check-button-unhover")
          var isActive = $(".check-button-lf").is('.check-button-active')
          if(!isActive){
            $('.img-lf').removeClass('active');
            $('.img-lf_hover').addClass('active');
          }
        },function(){
          //当鼠标离开的时候,程序处理
          $(".check-button-lf").removeClass("check-button-hover")
          $(".check-button-rg").removeClass("check-button-unhover")
          var isActive = $(".check-button-lf").is('.check-button-active')
          if(!isActive){
            $('.img-lf_hover').removeClass('active');
            $('.img-lf').addClass('active');
          }
        }
      );
      $(".check-button-rg").hover(
        function(){
          //当鼠标放上去的时候,程序处理
          $(".check-button-rg").addClass("check-button-hover")
          $(".check-button-lf").removeClass("check-button-hover")
          $(".check-button-lf").addClass("check-button-unhover")
          var isActive = $(".check-button-rg").is('.check-button-active')
          if(!isActive){
            $('.img-rg').removeClass('active');
            $('.img-rg_hover').addClass('active');
          }
        },function(){
          //当鼠标离开的时候,程序处理
          $(".check-button-rg").removeClass("check-button-hover")
          $(".check-button-lf").removeClass("check-button-unhover")
          var isActive = $(".check-button-rg").is('.check-button-active')
          if(!isActive){
            $('.img-rg_hover').removeClass('active');
            $('.img-rg').addClass('active');
          }
        }
      );
    }

    t8213_feature.scrollfn = function (event) {
    const top = $(window).scrollTop();
    const sticky1_position = $('.accurateImg').offset().top;
    const sticky2_position = $('.contain_8').offset().top;

    const ski1 =  sticky1_position - top;
    const ski2 =  sticky2_position - top;
    if (ski1 <= 0.6*h ){
      const opacity = 1;
      $(".t8213-feature_3 .right-description").css('opacity', `${opacity}`);
    }
    if (ski1 > 0.6*h && ski1 < 0.8*h){
      var opacity = 2*(h - ski1) / h;
      $(".t8213-feature_3 .right-description").css('opacity', `${opacity}`);
    }
    if (ski1 >= 0.8*h ){
      const opacity = 0;
      $(".t8213-feature_3 .right-description").css('opacity', `${opacity}`);
    }

    // accurateImg伸缩
    if(ski1 < 0.4*h){
      $(".t8213-feature_3 .right-description").css('transform', "translateY("+ 0 +"px)");
      $(".t8213-feature_3 .accurateImg img").css('transform', "translateY(0px)");
      $(".t8213-feature_3 .left-description").css('transform', "translateY("+ 0 +"px)");
    }
    if(ski1 < h && ski1 >= 0.5*h){
      const y =-200*(0.5*h - ski1) / h;
      $(".t8213-feature_3 .right-description").css('transform', "translateY("+ y +"px)");
      $(".t8213-feature_3 .accurateImg img").css('transform', "translateY("+ y +"px)");
      $(".t8213-feature_3 .left-description").css('transform', "translateY("+ y +"px)");
    }
    if(ski1 >= h){
      $(".t8213-feature_3 .accurateImg img").css('transform', "translateY(100px)");
      $(".t8213-feature_3 .right-description").css('transform', "translateY(100px)");
      $(".t8213-feature_3 .left-description").css('transform', "translateY(100px)");
    }

    if (ski1 <= 0.3*h ){
      $(".t8213-feature_3 .left-description").css('opacity', '1');
    }
    if (ski1 > 0.3*h && ski1 < 0.6*h){
      var opacity = 4*(0.6*h - ski1) / h;
      $(".t8213-feature_3 .left-description").css('opacity', `${opacity}`);
    }
    if (ski1 >= 0.6*h ){
      $(".t8213-feature_3 .left-description").css('opacity', '0');
    }

    if (width >= 798 ){
      if(ski2 < 100){
        $(".t8213-feature_8 .contain_8 .right-block .banner_finger").css('left', `0%`);
      }
      if(100 <= ski2 &&  ski2 <= h ){
        var left = 20 - 20*(h - ski2 + 100) / h;
        $(".t8213-feature_8 .contain_8 .right-block .banner_finger").css('left', `${left}%`);
      }
      if(ski2 > h){
        $(".t8213-feature_8 .contain_8 .right-block .banner_finger").css('left', '20%');
      }
    }else{
      if(ski2 < -0.1*h){
        $(".t8213-feature_8 .contain_8 .right-block .banner_finger").css('left', `0%`);
      }
      if(-0.1*h <= ski2 &&  ski2 <= h ){
        var left = 40 - 40*(h - ski2) / h;
        if(left <= 0){
          left = 0;
        }
        $(".t8213-feature_8 .contain_8 .right-block .banner_finger").css('left', `${left}%`);
      }
      if(ski2 > h){
        $(".t8213-feature_8 .contain_8 .right-block .banner_finger").css('left', '40%');
      }
    }
    setTranslateY('.reminders-img', '.reminders-img_pc', '.reminders-img_mob', top, h, width)
    setTranslateY('.scans-img', '.scans-img_pc', '.reminders-img_mob', top, h, width)
    setTranslateY('.topBlock-img', '.topBlock-img_pc', '.topBlock-img_mob', top, h, width)
    setTranslateY('.bottomBlock-img', '.bottomBlock-img_pc', '.bottomBlock-img_mob', top, h, width)
    setTranslateY('.feature_6_block', '.feature_6-img_pc', '.feature_6-img_mob', top, h, width)
    setTranslateY('.feature_9_block', '.feature_9-img_pc', '.feature_9-img_mob', top, h, width)
  }
  $(window).scroll(
    // 防抖节流
    Shopify.contentCreator.util.throttle(t8213_feature.scrollfn, 50)
  );

  setInterval(function(){
    if($(".decide-img .top-img").is(".active")){
      $(".bottom-img").addClass("active")
      $(".top-img").removeClass("active")

      $(".icon_bottom_active").addClass("active")
      $(".icon_bottom").removeClass("active")
      $(".icon_top").addClass("active")
      $(".icon_top_active").removeClass("active")
      $(".icon_bottom_text").addClass("active")
      $(".icon_top_text").removeClass("active")   
    }else{
      $(".top-img").addClass("active")
      $(".bottom-img").removeClass("active")

      $(".icon_top_active").addClass("active")
      $(".icon_top").removeClass("active")
      $(".icon_bottom").addClass("active")
      $(".icon_bottom_active").removeClass("active")
      $(".icon_top_text").addClass("active")
      $(".icon_bottom_text").removeClass("active")    
      
    }
  },5000);
  if($("section").hasClass("t8213_images2")){
  // gsap
  ScrollTrigger.create({
    trigger: ".banner_2_content-pc",
    // start: "top center+=10%",
    start: "top center-=40%",
    end: '+=0',
    //markers: true,
    onEnter: () => {
      gsap.to(".banner_2_content-pc .content_left .cover", { bottom:'100%', duration: '0.8' });
      gsap.to(".banner_2_content-pc .content_right .cover", { bottom:'0', duration: '0.8' });
      gsap.to('.banner_2_content-pc .desc p', { scale: '1'});
      gsap.to(".banner_2_content-pc .content_desc .left-line", { opacity: '1', duration: '1', delay: '0.8'  });
      gsap.to(".banner_2_content-pc .content_desc .right-line", { opacity: '1', duration: '1', delay: '0.8'  });
      gsap.to(".banner_2_content-pc .content_desc .content-text", { opacity: '1', duration: '1', delay: '0.8' });
    },
    onEnterBack: () => {
      gsap.to(".banner_2_content-pc .content_left .cover", { bottom:'0', duration: '0.8' });
      gsap.to(".banner_2_content-pc .content_right .cover", { bottom:'100%', duration: '0.8' });
      gsap.to('.banner_2_content-pc .desc p', { scale: '0.8'});
      gsap.to(".banner_2_content-pc .content_desc .left-line", { opacity: '0', duration: '0', delay: '0' });
      gsap.to(".banner_2_content-pc .content_desc .right-line", { opacity: '0', duration: '0', delay: '0' });
      gsap.to(".banner_2_content-pc .content_desc .content-text", { opacity: '0', duration: '0', delay: '0' });
    }
  });
  ScrollTrigger.create({
    trigger: ".banner_2_content-mobile",
    start: "top center-=40%",
    end: '+=0',
    //markers: true,
    onEnter: () => {
      gsap.to(".banner_2_content-mobile .content_left .cover", { bottom:'100%'});
      gsap.to(".banner_2_content-mobile .content_right .cover", { bottom:'0' });
      gsap.to('.banner_2_content-mobile .desc p', { scale: '1'});
      gsap.to(".banner_2_content-mobile .content_desc .left-line", { opacity: '1', duration: '0.8', delay: '0.6'   });
      gsap.to(".banner_2_content-mobile .content_desc .right-line", { opacity: '1', duration: '0.8', delay: '0.6'  });
      gsap.to(".banner_2_content-mobile .content_desc .content-text", { opacity: '1', duration: '0.8', delay: '0.6' });
    },
    onEnterBack: () => {
      gsap.to(".banner_2_content-mobile .content_left .cover", { bottom:'0' });
      gsap.to(".banner_2_content-mobile .content_right .cover", { bottom:'100%' });
      gsap.to('.banner_2_content-mobile .desc p', { scale: '0.8'});
      gsap.to(".banner_2_content-mobile .content_desc .left-line", { opacity: '0', duration: '0', delay: '0' });
      gsap.to(".banner_2_content-mobile .content_desc .right-line", { opacity: '0', duration: '0', delay: '0' });
      gsap.to(".banner_2_content-mobile .content_desc .content-text", { opacity: '0', duration: '0', delay: '0' });
    }
  });
  }
})
function setTranslateY(blockEle, imgEle1, imgEle2, top, h, width){
  const sticky_position = $(blockEle).offset().top;
  const ski =  sticky_position - top;

  var blockHeight = $(blockEle).height();
  var imgHeight = $(imgEle1).height()
  if (width < 768) {
    imgHeight = $( imgEle2).height()
  } 
  var height = imgHeight - blockHeight

  if(ski < 0){
    var y = -height;
    $(`${blockEle} img`).css('transform', "translateY("+ y +"px)");
  }
  if(0 <= ski &&  ski <= h ){
    var y = height*(ski - h) / h;
    $(`${blockEle} img`).css('transform', "translateY("+ y +"px)");
  }
  if(ski > h){
    var y = 0;
    $(`${blockEle} img`).css('transform', "translateY("+ y +"px)");
  }
}

$('.decide-btn_top').click(() => {
  var isActive = $('.top-img').is('.active')
  if(!isActive){
    $(".top-img").addClass("active")
    $(".bottom-img").removeClass("active")

    $(".icon_top_active").addClass("active")
    $(".icon_top").removeClass("active")
    $(".icon_bottom").addClass("active")
    $(".icon_bottom_active").removeClass("active")
    $(".icon_top_text").addClass("active")
    $(".icon_bottom_text").removeClass("active")
  }
})
$('.decide-btn_bottom').click(() => {
  var isActive = $('.bottom-img').is('.active')
  if(!isActive){
    $(".bottom-img").addClass("active")
    $(".top-img").removeClass("active")

    $(".icon_bottom_active").addClass("active")
    $(".icon_bottom").removeClass("active")
    $(".icon_top").addClass("active")
    $(".icon_top_active").removeClass("active")
    $(".icon_bottom_text").addClass("active")
    $(".icon_top_text").removeClass("active")
  }
})
$('.icon_top_text').click(() => {
  var isActive = $('.top-img').is('.active')
  if(!isActive){
    $(".top-img").addClass("active")
    $(".bottom-img").removeClass("active")

    $(".icon_top_active").addClass("active")
    $(".icon_top").removeClass("active")
    $(".icon_bottom").addClass("active")
    $(".icon_bottom_active").removeClass("active")
    $(".icon_top_text").addClass("active")
    $(".icon_bottom_text").removeClass("active")
  }
})
$('.icon_bottom_text').click(() => {
  var isActive = $('.bottom-img').is('.active')
  if(!isActive){
    $(".bottom-img").addClass("active")
    $(".top-img").removeClass("active")

    $(".icon_bottom_active").addClass("active")
    $(".icon_bottom").removeClass("active")
    $(".icon_top").addClass("active")
    $(".icon_top_active").removeClass("active")
    $(".icon_bottom_text").addClass("active")
    $(".icon_top_text").removeClass("active")
  }
})
