$(function() {
  
  const width = window.innerWidth;
  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  let h = 600;
  if (width > 769) {
    h = viewPortHeight - 92;    
  } else {
    h = viewPortHeight - 60;
  }

  if (width > 769) {
    $('.eufy_dogcam_3 .banner_3').height(h * 2.5 + 'px');
    $('.eufy_dogcam_1 .banner_bg1').height(h * 8 + 'px');
  } else {
    $('.eufy_dogcam_3 .banner_3').height(h * 2.5 + 'px');
    $('.eufy_dogcam_1 .banner_bg1').height(h * 5.5 + 'px');
  }
  const s10_cont1 = h ;

  const dogcam_ct = {};
  dogcam_ct.banner_back = [
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_000.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_001.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_002.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_003.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_004.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_005.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_006.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_007.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_008.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_009.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_010.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_011.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_012.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_013.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_014.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_015.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_016.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_017.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_018.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_019.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_020.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_021.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_022.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_023.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_024.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_025.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_026.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_027.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_028.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_029.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_030.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_031.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_032.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_033.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_034.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_035.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_036.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_037.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_038.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_039.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_040.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_041.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_042.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_043.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_044.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_045.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_046.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_047.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_048.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_049.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_050.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_051.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_052.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_053.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_054.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_055.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_056.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_057.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_058.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_059.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_060.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_061.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_062.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_063.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_064.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_065.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_066.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_067.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_068.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_069.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_070.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_071.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_072.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_073.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_074.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_075.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_076.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_077.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_078.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_079.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_080.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_081.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_082.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_083.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_084.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_085.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_086.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_087.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_088.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_089.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_090.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_091.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_092.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_093.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_094.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_095.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_096.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_097.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_098.png?v=1635147286",
    "https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_099.png?v=1635147286",
  ]
  dogcam_ct.banner_back_mob = [
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_00.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_01.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_02.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_03.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_04.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_05.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_06.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_07.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_08.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_09.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_10.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_11.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_12.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_13.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_14.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_15.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_16.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_17.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_18.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_19.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_20.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_21.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_22.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_23.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_24.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_25.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_26.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_27.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_28.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_29.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_30.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_31.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_32.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_33.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_34.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_35.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_36.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_37.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_38.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_39.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_40.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_41.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_42.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_43.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_44.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_45.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_46.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_47.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_48.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_49.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_50.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_51.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_52.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_53.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_54.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_55.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_56.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_57.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_58.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_59.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_60.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_61.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_62.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_63.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_64.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_65.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_66.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_67.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_68.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_69.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_70.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_71.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_72.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_73.png?v=1635237922",
    "https://cdn.shopify.com/s/files/1/0519/5458/1696/files/3_74.png?v=1635237922",
  ]

  const framePlayer_dh = document.getElementById('framePlayer_dh');
  dogcam_ct.vPlayer_banner = new vFramePlayer({ useCanvas: true, fps: 5, dom: framePlayer_dh, imgArr: dogcam_ct.banner_back });

  const framePlayer_dh_mob = document.getElementById('framePlayer_dh_mob');
  dogcam_ct.vPlayer_banner_mob = new vFramePlayer({ useCanvas: true, fps: 5, dom: framePlayer_dh_mob, imgArr: dogcam_ct.banner_back_mob });

  $(window).scroll(function(){

    const top = $(window).scrollTop();

    
    $('#banner_3 .contain').css("height", `${h}px`);
    const sticky3_position = $('#banner_3')[0].getBoundingClientRect().top
    const ski3 = - (sticky3_position / (3*h));

    const sticky1_position = $('#banner_bg1').offset().top;
    const ski1 = top - sticky1_position;
    if (ski1 <= 0 * h){
      $(`#banner_bg1_all`).css("opacity",`1`);
      $(`#banner_bg1_video`).css("opacity",`1`);
      $(`.banner_bg1_bg`).css("opacity",`1`);
    }
    if (ski1 > 0 * h && ski1 < 0.5 * h ){
      const opacity = 1 - (ski1 * 2)/h;
      $(`#banner_bg1_all`).css("opacity",`${opacity}`);
      $(`#banner_bg1_video`).css("opacity",`${opacity}`);
    }
    if (ski1 >= 0.5 * h){
      $(`#banner_bg1_all`).css("opacity",`0`);
      $(`#banner_bg1_video`).css("opacity",`0`);
      $(`.banner_bg1_bg`).css("opacity",`0`);
    }
    if (width > 769) {
      if (ski1 >= 0.5 * h && ski1 <= 4.5 * h){
        const opacity = ((ski1 - 0.5 * h) * 25)/h;
        const i = parseInt(opacity);
        dogcam_ct.vPlayer_banner.goto(i); 
      }
    }else{
      if (ski1 >= 0.5 * h && ski1 <= 4.5 * h){
        const opacity = ((ski1 - 0.5 * h) * 25)/h;
        const i = parseInt(opacity);
        dogcam_ct.vPlayer_banner_mob.goto(i);
      }
    }
    if (ski1 >= 1.5 * h && ski1 <= 5 * h){
      $(".banner_bg1_dh_p").addClass("active");
    }else{
      $(".banner_bg1_dh_p").removeClass("active");
    }

    
    if( width > 768 ){
      if (ski1 <= 5 * h){
      
        $(`.framePlayer_all`).css("opacity",`1`);
        
      }
      if (ski1 >= 5.5 * h){
        
        $(`.framePlayer_all`).css("opacity",`0`);
        
      }
      if (ski1 > 5 * h && ski1 < 5.5 * h){
        const opacity = 1 - ((ski1 - 5 * h) * 2)/h;
        $(`.framePlayer_all`).css("opacity",`${opacity}`);
        
      }
      if (ski1 >= 6 * h && ski1 <= 8 * h){
        $(".bg_player_content").addClass("active");
      }else{
        $(".bg_player_content").removeClass("active");
      }
    }else{
      if (ski1 >= 2.5 * h){
        $(".bg_player_content").addClass("active");
      }else{
        $(".bg_player_content").removeClass("active");
      }
    }
    if (ski3 <= 0){
      $('#banner_3 .aBox').css('transform', `translateY(0%)`);
      
    }
    if (ski3 > 0 && ski3 < 0.55){
      const opacity = ski3 ;
      $('#banner_3 .aBox').css('transform', `translateY(${-100 * opacity}%)`); 
    }
    if (ski3 >= 0.6 && ski3 < 1){
      $('#banner_3 .aBox').css('transform', `translateY(-55%)`); 
    }
    if (ski3 < 0.2){
      $('#banner_3 .aBox .a1_btm').addClass('active'); 
      $('#banner_3 .aBox .a2_btm').removeClass('active'); 
      $('#banner_3 .aBox .a3_btm').removeClass('active'); 
    }else if(ski3 >= 0.2 && ski3 < 0.4){
      $('#banner_3 .aBox .a1_btm').removeClass('active'); 
      $('#banner_3 .aBox .a2_btm').addClass('active'); 
      $('#banner_3 .aBox .a3_btm').removeClass('active'); 
    }else{
      $('#banner_3 .aBox .a1_btm').removeClass('active'); 
      $('#banner_3 .aBox .a2_btm').removeClass('active'); 
      $('#banner_3 .aBox .a3_btm').addClass('active'); 
    }
  })
})