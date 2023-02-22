$(function () {
  gsap.registerPlugin(ScrollTrigger);

  const height = $(window).height()
  const width = $(window).width()
  const isPc = width > 768
  const origin = 'https://cdn.shopifycdn.net/s/files/1/0521/9411/5753/files/'
  // https://cdn.shopifycdn.net/s/files/1/0521/9411/5753/files/mach_pc_frames_15.jpg?v=1675598714
  const pcNameBase = 'mach_pc_frames'
  const mbNameBase = 'mach_frames'
  const pcImageSet = []
  const mbImageSet = []
  const images = []
  const imageCounts = 95
  const frameRate = 10 / imageCounts
  const frames = {
    count: 0
  }
  const secFrames = {
    count: 0
  }
  let ctx

  // canvas
  const canvas = document.getElementById('machFrames')
  if (canvas) {
    ctx = canvas.getContext('2d')
    canvas.width = isPc ? 2116 : 1080
    canvas.height = isPc ? 1080 : 2336
  }

  init()

  function init() {
    initData()
    initImages()
    initVideo()
    swiperInit()
    event()
    if (isPc) {
      pcGsapInit()
    } else {
      mbGsapInit()
    }
  }


  function initData() {
    for (let i = 1; i <= imageCounts; i++) {
      pcImageSet.push(`${origin}${pcNameBase}_${i}.jpg`)
    }

    for (let i = 1; i <= imageCounts; i++) {
      mbImageSet.push(`${origin}${mbNameBase}_${i}.jpg`)
    }
  }

  function initImages() {
    const set = isPc ? pcImageSet : mbImageSet

    set.map(src => {
      const img = new Image()
      img.src = src
      images.push(img)
    })

    images[0].onload = prodsRender
  }

  function initVideo() {
    const $video = isPc ? $('.kv-video') : $('.mb-kv-video')
    let timer = null
    let duration = 0

    // $video[0].load()
    if($video.length){
      duration = $video[0].duration ? Math.floor($video[0].duration * 1000) + 1000 : 3600

      // $video[0].addEventListener('ended', () => {
      //   // if($video[0].currentTime >= 2.5) {
      //     $('.kv-title-wrap').addClass('actived')
      //     timer && clearTimeout(timer)
      //   // }
      // })

      timer = setTimeout(() => {
        $('.kv-title-wrap').addClass('actived')
      }, duration)
    }
  }

  function mbGsapInit() {
    if($('.mach-main-section-1').length){
      const mbTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.mach-main-section-1',
          start: 'top top+=0',
          end: `+=${4 * height + 300}`,
          pin: true,
          scrub: true
        }
      })

      mbTl.to('.kv-video-wrap', {
        opacity: '0',
        duration: '.01'
      }).to(frames, {
        count: imageCounts,
        snap: 'count',
        onUpdate: prodsRender,
        duration: 3
      }).to('.kv-puzzle-wrap', {
        opacity: '1',
        duration: '.3'
      }, '-=.2').to('.puzzle-frist-img', {
        scale: 1,
        opacity: '1',
        duration: '.4'
      }).to('.puzzle-picture-wrap', {
        y: '-36%',
        duration: '.4',
      }, '-=.6').to('.kv-puzzle-wrap', {
        y: '-70%',
        duration: '.5'
      }, '-=.2')
    }

    const mbTl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.js-frist-img-swiper',
        start: `-${height}`,
        end: `+=${1 * height}`,
        scrub: true
      }
    })

    mbTl1.to('.js-frist-img-swiper .image-swiper-box', {
      opacity: '1',
      y: 0,
      scale: 1,
      duration: '.3'
    })

    const mbTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.mach-main-section-2',
        start: 'top top+=0',
        end: `+=${2 * height}`,
        pin: true,
        scrub: true
      }
    })

    mbTl2.to('.cloud-1', {
      x: '-35%',
      y: '-40%',
      duration: '.3'
    }).to('.cloud-2', {
      x: '40%',
      y: '-60%',
      duration: '.3'
    }, '-=.3').to('.cloud-wrap', {
      opacity: '0',
      duration: '.2'
    }, '-=.2').to('.cleaning-wrap .info-box', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.2').to('.cleaning-swiper-wrap', {
      opacity: '1',
      duration: '.1'
    }, '-=.03')

    const mbTl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '#deeperCleanContain',
        start: `-${height}`,
        end: `+=${1 * height}`,
        scrub: true
      }
    })

    mbTl3.to('#deeperCleanContain .tsm-txt', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }).to('#deeperCleanContain .sub-text', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15').to('#deeperCleanContain .sec-video-wrap', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15')

    const mbTl4 = gsap.timeline({
      scrollTrigger: {
        trigger: '#germsContain',
        start: `-${height}`,
        end: `+=${1 * height}`,
        scrub: true
      }
    })

    mbTl4.to('#germsContain .tsm-txt', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }).to('#germsContain .sub-text', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15').to('#germsContain .sec-image-wrap', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15')

    const mbTl5 = gsap.timeline({
      scrollTrigger: {
        trigger: '#nextCleanContain',
        start: `-${height}`,
        end: `+=${1 * height}`,
        scrub: true
      }
    })

    mbTl5.to('#nextCleanContain .tsm-txt', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }).to('#nextCleanContain .sub-text', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15').to('#nextCleanContain .sec-video-wrap', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15')

    const mbTl6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.js-second-img-swiper',
        start: `-${1.2 * height}`,
        end: `+=${1 * height}`,
        scrub: true
      }
    })

    mbTl6.to('.js-second-img-swiper .heading', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }).to('.js-second-img-swiper .image-swiper-banner-wrap', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15')
    // .to('.gasp-mach-btn_0', {
    //   x: 0,
    //   opacity: '1',
    //   duration: '.2'
    // }, '+=.3').to('.gasp-mach-btn_0 .mach-lp-btn-txt', {
    //   x: 0,
    //   duration: '.2'
    // },'-=.2')

    const mbTl7 = gsap.timeline({
      scrollTrigger: {
        trigger: '.tech-wrap',
        start: `-${height * .7}`,
        end: `+=${1 * height}`,
        scrub: true,
      }
    })

    mbTl7.to('.tech-img-wrap', {
      opacity: '1',
      y: 0,
      scale: 1,
      duration: '.3'
    }).to('.tech-img-title', {
      opacity: '1',
      y: 0,
      scale: 1,
      duration: '.2'
    }, '-=.1')

    const mbTl8 = gsap.timeline({
      scrollTrigger: {
        trigger: '.tech-info-wrap',
        start: `-${height * 1.1}`,
        end: `+=${1 * height}`,
        scrub: true,
        // pin: true
      }
    })

    mbTl8.to('.tech-info-wrap .sub-title', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }).to('.tech-info-title', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15').to('.tech-info-desc', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15').to('.tech-info-last', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15')
    // .to('.gasp-mach-btn_1', {
    //   x: 0,
    //   opacity: '1',
    //   duration: '.2'
    // }, '-=.15').to('.gasp-mach-btn_1 .mach-lp-btn-txt', {
    //   x: 0,
    //   duration: '.2'
    // },'-=.2')

    // const mbTl9 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.self-clean-info-wrap',
    //     start: `top`,
    //     end: `+=${ 1 * height }`,
    //     scrub: true,
    //   }
    // })

    // mbTl9.to('.gasp-mach-btn_2', {
    //   x: 0,
    //   opacity: '1',
    //   duration: '.2'
    // },'-=.2').to('.gasp-mach-btn_2 .mach-lp-btn-txt', {
    //   x: 0,
    //   duration: '.2'
    // },'-=.2')

    const mbTl10 = gsap.timeline({
      scrollTrigger: {
        trigger: '.tesla-wrap',
        start: `top`,
        end: `+=${1.5 * height}`,
        scrub: true,
        pin: true
      }
    })

    mbTl10.to('.mixed-img-wrap', {
      scale: 4,
      opacity: '0',
      duration: '.2',
      ease: 'exop.out'
    }).to('.mixed-img-title', {
      scale: 1,
      y: 0,
      opacity: '1',
      duration: '.2'
    }, '-=.2').to('.mixed-video-wrap', {
      opacity: '1',
      y: 0,
      duration: '.1'
    }, '-=.1')

    const mbTl11 = gsap.timeline({
      scrollTrigger: {
        trigger: '.mixed-part-wrap',
        start: `-${height}`,
        end: `+=${1 * height}`,
        scrub: true
      }
    })

    mbTl11.to('.mixed-content-wrap', {
      y: '-200px',
      duration: '.2'
    }).to('.mixed-part-wrap .mach-icon-wrap', {
      y: '-200px',
      duration: '.2'
    }, '-=.17').to('.mixed-info-wrap', {
      y: '-200px',
      duration: '.2'
    }, '-=.17')

    const mbTl12 = gsap.timeline({
      scrollTrigger: {
        trigger: '.mach-main-section-6',
        start: ``,
        end: `+=${1 * height}`,
        scrub: true,
        pin: true
      }
    })

    mbTl12.to('.dry-bgimg-wrap', {
      scale: 2,
      opacity: '0',
      duration: '.2',
      ease: 'exop.out'
    }).to('.dry-img-title', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.1').to('.dry-img-wrap', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.1')
  }

  function pcGsapInit() {
    if($('.mach-main-section-1').length){
      const pcTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.mach-main-section-1',
          start: 'top top+=0',
          end: `+=${5 * height}`,
          pin: true,
          scrub: true
        }
      })

      pcTl.to('.kv-video-wrap', {
        opacity: '0',
        duration: '.01'
      }).to(frames, {
        count: imageCounts,
        snap: 'count',
        onUpdate: prodsRender,
        duration: 3
      }).to('.kv-puzzle-wrap', {
        opacity: '1',
        duration: '.3'
      }, '-=.25').to('.puzzle-frist-img', {
        scale: 1,
        opacity: '1',
        duration: '.4'
      }).to('.puzzle-picture-wrap', {
        y: '-36%',
        duration: '.4',
      }, '-=.6').to('.kv-puzzle-wrap', {
        y: '-120%',
        duration: '1.5'
      }, '-=.2')
    }

    const pcTl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.js-frist-img-swiper',
        start: `-${height}`,
        end: `+=${1 * height}`,
        scrub: true
      }
    })

    pcTl1.to('.js-frist-img-swiper .image-swiper-box', {
      opacity: '1',
      y: 0,
      scale: 1,
      duration: '.3'
    })

    const pcTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.mach-main-section-2',
        start: 'top top+=0',
        end: `+=${1.5 * height}`,
        pin: true,
        scrub: true
      }
    })

    pcTl2.to('.cloud-1', {
      x: '-60%',
      y: '-40%',
      duration: '.2'
    }, '-=.2').to('.cloud-2', {
      x: '47%',
      y: '-60%',
      duration: '.2'
    }, '-=.2').to('.cloud-wrap', {
      opacity: '0',
      duration: '.2'
    }, '-=.2').to('.cleaning-wrap .info-box', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.2').to('.cleaning-swiper-wrap', {
      opacity: '1',
      duration: '.1'
    }, '-=.03')


    const pcTl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '#deeperCleanContain',
        start: `-${height}`,
        end: `+=${1 * height}`,
        scrub: true,
        // markers: true
      }
    })

    pcTl3.to('#deeperCleanContain .tsm-txt', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }).to('#deeperCleanContain .sub-text', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15').to('#deeperCleanContain .sec-video-wrap', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15')

    const pcTl4 = gsap.timeline({
      scrollTrigger: {
        trigger: '#germsContain',
        start: `-${height}`,
        end: `+=${1 * height}`,
        scrub: true
      }
    })

    pcTl4.to('#germsContain .tsm-txt', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }).to('#germsContain .sub-text', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15').to('#germsContain .sec-image-wrap', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15')

    const pcTl5 = gsap.timeline({
      scrollTrigger: {
        trigger: '#nextCleanContain',
        start: `-${height}`,
        end: `+=${1 * height}`,
        scrub: true
      }
    })


    pcTl5.to('#nextCleanContain .tsm-txt', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }).to('#nextCleanContain .sub-text', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15').to('#nextCleanContain .sec-video-wrap', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15')

    const pcTl6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.js-second-img-swiper',
        start: `-${height * .8}`,
        end: `+=${1 * height}`,
        scrub: true
      }
    })

    pcTl6.to('.js-second-img-swiper .heading', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }).to('.js-second-img-swiper .image-swiper-banner-wrap', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15')
    // .to('.gasp-mach-btn_0', {
    //   x: 0,
    //   opacity: '1',
    //   duration: '.2'
    // }, '+=.3').to('.gasp-mach-btn_0 .mach-lp-btn-txt', {
    //   x: 0,
    //   duration: '.2'
    // },'-=.2')

    const pcTl7 = gsap.timeline({
      scrollTrigger: {
        trigger: '.tech-wrap',
        start: `-${height * .7}`,
        end: `+=${1 * height}`,
        scrub: true,
      }
    })

    pcTl7.to('.tech-img-wrap', {
      opacity: '1',
      y: '-10%',
      scale: 1,
      duration: '.2'
    }).to('.tech-img-title', {
      opacity: '1',
      y: '-10%',
      scale: 1,
      duration: '.2'
    }, '-=.05')

    const pcTl8 = gsap.timeline({
      scrollTrigger: {
        trigger: '.tech-info-wrap',
        start: `-${height * 1.1}`,
        end: `+=${1 * height}`,
        scrub: true,
        // pin: true
      }
    })

    pcTl8.to('.tech-info-wrap .sub-title', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }).to('.tech-info-title', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.17').to('.tech-info-desc', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.17').to('.tech-info-last', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.15')
    // .to('.gasp-mach-btn_1', {
    //   x: 0,
    //   opacity: '1',
    //   duration: '.2'
    // }, '-=.15').to('.gasp-mach-btn_1 .mach-lp-btn-txt', {
    //   x: 0,
    //   duration: '.2'
    // },'-=.2')

    // const pcTl9 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.self-clean-info-wrap',
    //     start: `top`,
    //     end: `+=${ 1 * height }`,
    //     scrub: true,
    //   }
    // })

    // pcTl9.to('.gasp-mach-btn_2', {
    //   x: 0,
    //   opacity: '1',
    //   duration: '.2'
    // },'-=.4').to('.gasp-mach-btn_2 .mach-lp-btn-txt', {
    //   x: 0,
    //   duration: '.2'
    // },'-=.35')



    const pctl10 = gsap.timeline({
      scrollTrigger: {
        trigger: '.tesla-wrap',
        start: `top`,
        end: `+=${1.5 * height}`,
        scrub: true,
        pin: true
      }
    })

    pctl10.to('.mixed-img-wrap', {
      scale: 4,
      opacity: '0',
      duration: '.2',
      ease: 'exop.out'
    }).to('.mixed-img-title', {
      scale: 1,
      y: 0,
      opacity: '1',
      duration: '.2'
    }, '-=.2').to('.mixed-video-wrap', {
      opacity: '1',
      y: 0,
      duration: '.1'
    }, '-=.1')

    const pctl11 = gsap.timeline({
      scrollTrigger: {
        trigger: '.mach-main-section-6',
        start: ``,
        end: `+=${1 * height}`,
        scrub: true,
        pin: true
      }
    })

    pctl11.to('.dry-bgimg-wrap', {
      scale: 2,
      opacity: '0',
      duration: '.2',
      ease: 'exop.out'
    }).to('.dry-img-title', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.1').to('.dry-img-wrap', {
      opacity: '1',
      y: 0,
      duration: '.2'
    }, '-=.1')
  }

  function prodsRender() {
    if (!images[frames.count]) return
    $('.kv-title-wrap').css('opacity', 1 - Math.min(frames.count / imageCounts * 10, 1))
    if(ctx){
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(images[frames.count], 0, 0)
    }
  }

  function swiperInit() {
    const cleanSwiper = new Swiper('.cleaning-swiper', {
      effect: 'fade',
      // loop: true,
      fade: {
        crossFade: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
        stopOnLastSlide: false
      },
      on: {
        slideChangeTransitionStart() {
          $('.swiper-tab-item').eq(this.realIndex).addClass('actived').siblings().removeClass('actived')
        }
      }
    })

    const selfCleanVideo = $('#selfCleanVideo')[0]
    const selfCleanSwiper = new Swiper('.self-clean-swiper-container', {
      loop: true,
      speed: 200,
      on: {
        slideChangeTransitionStart() {
          $('.swiper-pages-item').eq(this.realIndex).addClass('actived').siblings().removeClass('actived')
        }
      }
    })

    const appSwiper = new Swiper('.mach-swiper-snippets', {
      loop: true,
      autoplay: true,
      pagination: {
        el: '.mach-snippets-swiper-pagination',
      }
    })

    const popSwiper = []

    $('.mach-lp-pop-contain').each(function (idx) {
      const swiper = new Swiper(`.mach-lp-pop-contain_${idx}`, {
        freeMode: true,
        mousewheel: true,
        slidesPerView: 'auto',
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        on: {
          progress() {
            $(`.mach-pop-content-process_${idx} .swiper-process-inner`).css('transform', `translateX(${-100 + this.progress * 100}%)`)
          }
        },
      })

      popSwiper.push(swiper)
    })

    const points = [0, 3.26, 5.8]
    let flag = 0

    const getIdx = (ct) => {
      if (ct < points[1]) {
        return 0
      } else if (ct >= points[1] && ct < points[2]) {
        return 1
      } else if (ct >= points[2]) {
        return 2
      }
    }

    selfCleanVideo.addEventListener('timeupdate', () => {
      const ct = selfCleanVideo.currentTime
      const idx = getIdx(ct)

      if (idx < flag || idx > flag) {
        selfCleanSwiper.slideToLoop(idx, 200, true)
        flag = idx
      }
    });

    $('.swiper-pre-button').on('click', function () {
      const idx = selfCleanSwiper.realIndex === 0 ? points.length - 1 : selfCleanSwiper.realIndex - 1
      selfCleanVideo.currentTime = points[idx]
    })

    $('.swiper-next-button').on('click', function () {
      const idx = selfCleanSwiper.realIndex === points.length - 1 ? 0 : selfCleanSwiper.realIndex + 1
      selfCleanVideo.currentTime = points[idx]
    })

    $('.swiper-pages-item').on('click', function () {
      const idx = $(this).index()
      selfCleanVideo.currentTime = points[idx]
    })

    $('.swiper-tab-item').on('click', function () {
      const idx = $(this).index()
      $(this).addClass('actived').siblings().removeClass('actived')
      cleanSwiper.slideTo(idx, 0, false)
    })

    $('.mach-snippets-prev-btn').on('click', function () {
      appSwiper.slidePrev()
    })

    $('.mach-snippets-next-btn').on('click', function () {
      appSwiper.slideNext()
    })
  }

  function event() {
    $('.js-pop-close-btn').on('click', function () {
      const lastScrollPosition = $('body').attr('data-current-position')
      $(this).parents('.mach-lp-pop-wrap').removeClass('actived')
      $('html, body').removeClass('mobile-menu--opened')
      window.scrollTo(0, +lastScrollPosition);
    })

    $('.mach-lp-btn-inner').on('click', function () {
      const idx = $(this).parents('.mach-lp-btn').data('idx')
      const currentScrollPosition = window.scrollY;

      if ($(`#machLpPop_${idx}`).length) {
        const $v = isPc ? $(`#machLpPop_${idx}`).find('.mach-lpc-pc-video') : $(`#machLpPop_${idx}`).find('.mach-lpc-mob-video')
        $(`#machLpPop_${idx}`).addClass('actived')
        $('html, body').addClass('mobile-menu--opened')
        $('body').attr('data-current-position', currentScrollPosition);
        $v.each(function () {
          const src = $(this).data('src')
          if (!$(this).attr('src')) $(this).attr('src', src)
        })
      }
    })
  }

})
