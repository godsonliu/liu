$(function () {
  gsap.registerPlugin(ScrollTrigger);

  const height = $(window).height()
  const width = $(window).width()
  const isPc = width > 768
  const isFullScreen = width > 1500
  const isLargeScreen = width > 1920
  const pageType = $('body').hasClass('page-landing-cam3') ? 'cam3' : 'cam3c'
  const origin = 'https://cdn.shopify.com/s/files/1/0583/6419/9101/files/'
  const pcNameBase = 'pc_v2_sun_power'
  const mbNameBase = 'mb_v2_sun_power'
  const pcImageSet = []
  const mbImageSet = []
  const images = []
  const imageCounts = 311
  const frameRate = 10 / imageCounts
  const frames = {
    count: 0
  }
  const zoom = {
    count: 0
  }
  const fourkZoom = {
    count: 0
  }
  let ctx

  // canvas
  const canvas = document.getElementById("sunPowerCanvas")
  if (canvas) {
    ctx = canvas.getContext("2d")
    canvas.width = isPc ? 1920 : 750
    canvas.height = isPc ? 1080 : 1334
  }

  init()

  function init() {
    initData()
    event()
    if (canvas) {
      document.addEventListener('scroll', function() {
        const scrollTop = $(window).scrollTop()
        if(scrollTop >= height - 100) {
          initImages()
        }
      })
    }
    if (isPc) {
      pcGsapInit()
    } else {
      mbGsapInit()
    }
  }

  function mbGsapInit() {
    if ($(".cam3-main-section-1").length) {
      const mbTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cam3-main-section-1",
          start: 'top top+=0',
          end: `+=${ 8 * height + 300}`,
          // markers: true,
          pin: true,
          scrub: true
        }
      })

      

      mbTl.to('.js-cam3-poster', {
          opacity: '0',
          duration: '1'
        }, '+=.5')
        .to('.js-mb-cam3-ele', {
          y: '126%',
          x: '-4%',
          scale: '2.1',
          duration: '1',
          ease: "none"
        })
        .to('.js-power-section', {
          y: '-110%',
          duration: '1'
        }, "-=1")
        .to('.js-mb-cam3-ele', {
          y: '126%',
          x: '-4%',
          scale: '2.1',
          duration: '1',
          ease: "none"
        })
        .to('.js-power-section', {
          y: '-200%',
          duration: '2'
        }, "-=1")
        .to('.js-mb-cam3-ele', {
          opacity: 0,
          duration: '.01',
          ease: "none"
        }, "-=2")
        .to('.canvas-section', {
          opacity: '1',
          duration: '.01'
        }, "-=2")
        .to(frames, {
          count: 40,
          snap: "count",
          onUpdate: prodsRender,
          duration: 40 * frameRate
        }, "-=2")
        .to('.js-canvas-info-1', {
          opacity: '1',
          duration: '.5'
        }, `-=${40 * frameRate }`)
        .to('.js-canvas-info-1', {
          opacity: '1',
          duration: '1.8'
        })
        .to('.js-canvas-info-1', {
          opacity: '0',
          duration: '.5'
        })
        .to(frames, {
          count: 145,
          snap: "count",
          onUpdate: prodsRender,
          duration: 105 * frameRate
        }, '-=2.8')
        .to('.js-canvas-info-2', {
          opacity: '1',
          duration: '.2'
        })
        .to('.js-canvas-info-2', {
          opacity: '1',
          duration: '1.4'
        })
        .to('.js-canvas-info-2', {
          opacity: '0',
          duration: '.2'
        })
        .to(frames, {
          count: 240,
          snap: "count",
          onUpdate: prodsRender,
          duration: 95 * frameRate
        },'-=1.8')
        .to('.js-canvas-info-3', {
          opacity: '1',
          duration: '.2'
        })
        .to('.js-canvas-info-3', {
          opacity: '1',
          duration: '1.8'
        })
        .to(frames, {
          count: imageCounts,
          snap: "count",
          onUpdate: prodsRender,
          duration: 71 * frameRate
        }, '-=2')
    }

    if ($(".cam3-main-section-2").length) {
      const mbTl_2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".cam3-main-section-2",
          start: 'top top+=0',
          end: `+=${ 4 * height }`,
          // markers: true,
          pin: true,
          scrub: true
        }
      })

      mbTl_2.to('.js-cam3-mb-sec-wrap', {
          scale: '1.3',
          y: '10%',
          duration: '.05'
        })
        .to('.js-cam3-wrap', {
          opacity: '0',
          duration: '.05',
          ease: "expo.out"
        }, '-=.05')
        .to('.js-mb-round-wrap', {
          scale: '1.5',
          y: '60%',
          duration: '.1'
        })
        .to('.js-cam-info-section', {
          y: '-120%',
          duration: '.2'
        }, '-=.15')
        .to('.js-mb-round-wrap', {
          scale: '1.5',
          y: '60%',
          duration: '.1'
        })
        .to('.js-cam-info-section', {
          y: '-200%',
          duration: '.2'
        })
        .to('.js-mb-cam-wrap', {
          opacity: '0',
          duration: '.1'
        }, '-=.2')
        .to('.js-mb-round-wrap', {
          y: '-30%',
          duration: '.1'
        }, '-=.1')
        .to('.js-mb-round-wrap', {
          borderRadius: '1px',
          scale: 1,
          width: '270px',
          height: '486px',
          duration: '.6'
        }, '-=.1')
        .to('.js-mb-pic-wrap img', {
          scale: '1.6',
          duration: '.6'
        }, '-=.6')
        .to(zoom, {
          count: 7,
          snap: "count",
          onUpdate: zoomUpdate,
          duration: '.6'
        }, '-=.6')
    }

    if ($('.cam3-main-section-5').length) {
      const mbTl_5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".cam3-main-section-5",
          start: 'top top+=0',
          end: `+=${ 4 * height }`,
          // markers: true,
          pin: true,
          scrub: true
        }
      })

      const aiInfoY = '-128%'

      mbTl_5.to('.js-4k-info-section', {
        y: aiInfoY,
        duration: '.5'
      })
      .to('.js-4k-info-section', {
        y: aiInfoY,
        duration: '.3'
      })
      .to('.js-4k-info-section', {
        y: '-180%',
        duration: '.3'
      })
      // .to('.js-4k-image-section', {
      //   scale: '1.2',
      //   y: 0,
      //   duration: '.2'
      // }, '-=.25')
      .to('.js-4k-mask-wrap', {
        scale: '50',
        x: '-200%',
        duration: '.4'
      }, '-=.2')
      .to('.js-4k-mask-wrap', {
        opacity: '0',
        duration: '.1'
      }, '-=.15')
      .to('.js-4k-bg-wrap', {
        scale: '3',
        x: '90%',
        duration: '.6'
      }, '-=.2')
      .to(fourkZoom, {
        count: 7,
        snap: "count",
        onUpdate: fourkZoomUpdate,
        duration: '.6'
      }, '-=.6')
    }


    if ($('.cam3-main-section-3').length) {
      const mbTl_3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".cam3-main-section-3",
          start: 'top top+=0',
          end: `+=${ 3 * height }`,
          // markers: true,
          pin: true,
          scrub: true
        }
      })

      mbTl_3.to('.img-hard-disk', {
          y: '272px',
          duration: '.5'
        }, '-=.2')
        .to('.img-cap', {
          y: '298px',
          duration: '.6'
        }, '-=.5')
        .to('.img-homebase3', {
          y: '100px',
          duration: '.2'
        }, '-=.6')
        .to('.img-homebase3-main', {
          opacity: '1',
          duration: '.05'
        })
        .to('.img-homebase3-nocap', {
          opacity: '0',
          duration: '.05'
        }, '-=.05')
        .to('.js-homebase-info-section', {
          y: '-128%',
          duration: '.4'
        }, '-=.1')
        .to('.img-homebase3-wrap', {
          y: '30%',
          duration: '.4'
        }, '-=.4')
        .to('.js-homebase-info-section', {
          y: '-200%',
          duration: '.4'
        })
        // .to('.img-homebase3-wrap', { y: '150px', duration: '.4'}, '-=.4')
        // .to('.js-homebase-info-section', { y: '-200%', duration: '.2'}, '-=.1')
        .to('.img-homebase3-wrap', {
          x: `${100}px`,
          y: '140px',
          duration: '.5'
        }, '-=.4')
        .to('.img-homebase3-inner-wrap', {
          scale: `${ .2 }`,
          opacity: 0,
          duration: '.5'
        }, '-=.5')
        .to('.img-scene-wrap', {
          opacity: 1,
          duration: '.5'
        }, '-=.25')
    }

    if ($('.cam3-main-section-4').length) {
      const mbTl_4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".cam3-main-section-4",
          start: 'top top+=0',
          end: `+=${ 3 * height }`,
          // markers: true,
          pin: true,
          scrub: true
        }
      })


      mbTl_4.to('.js-ai-info-section', {
          y: '-180%',
          duration: '.5'
        })
        .to('.js-ai-image-section', {
          scale: '1.2',
          y: 0,
          duration: '.2'
        }, '-=.25')
        .to('.js-ai-mask-wrap', {
          scale: '50',
          duration: '.4',
          y: '-150%'
        }, '-=.2')
        .to('.js-ai-mask-wrap', {
          opacity: '0',
          duration: '.05'
        }, '-=.1')
    }

  }


  function pcGsapInit() {
    if ($('.cam3-main-section-1').length) {
      const pcTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cam3-main-section-1",
          start: 'top top+=0',
          end: `+=${ 8 * height + 300}`,
          // markers: true,
          pin: true,
          scrub: true
        }
      })

      const powerY = isFullScreen ? '-100%' : '-93%'

      pcTl.to('.js-cam3-poster', {
        opacity: '0',
        duration: '1'
      }, '+=.5')
      .to('.js-pc-cam3-ele', {
        x: '-7%',
        y: '61%',
        scale: '1.31',
        duration: '1',
        ease: "none"
      })
      .to('.js-power-section', {
        y: powerY,
        duration: '1'
      }, "-=1")
      .to('.js-pc-cam3-ele', {
        x: '-7%',
        y: '61%',
        scale: '1.31',
        duration: '1',
        ease: "none"
      })
      .to('.js-power-section', {
        y: '-200%',
        duration: '2'
      }, "-=1")
      .to('.js-pc-cam3-ele', {
        opacity: 0,
        duration: '.01',
        ease: "none"
      }, "-=2")
      .to('.canvas-section', {
        opacity: '1',
        duration: '.01',
        ease: "none"
      }, "-=2")
      .to(frames, {
        count: 40,
        snap: "count",
        onUpdate: prodsRender,
        duration: 40 * frameRate
      }, "-=2")
      .to('.js-canvas-info-1', {
        opacity: '1',
        duration: '.5'
      }, `-=${40 * frameRate }`)
      .to('.js-canvas-info-1', {
        opacity: '1',
        duration: '1.8'
      })
      .to('.js-canvas-info-1', {
        opacity: '0',
        duration: '.5'
      })
      .to(frames, {
        count: 145,
        snap: "count",
        onUpdate: prodsRender,
        duration: 105 * frameRate
      }, '-=2.8')
      .to('.js-canvas-info-2', {
        opacity: '1',
        duration: '.2'
      })
      .to('.js-canvas-info-2', {
        opacity: '1',
        duration: '1.4'
      })
      .to('.js-canvas-info-2', {
        opacity: '0',
        duration: '.2'
      })
      .to(frames, {
        count: 240,
        snap: "count",
        onUpdate: prodsRender,
        duration: 95 * frameRate
      }, '-=1.8')
      .to('.js-canvas-info-3', {
        opacity: '1',
        duration: '.2'
      })
      .to('.js-canvas-info-3', {
        opacity: '1',
        duration: '1.8'
      })
      // .to('.js-canvas-info-3', {opacity: '0', duration: '.2'})
      .to(frames, {
        count: imageCounts,
        snap: "count",
        onUpdate: prodsRender,
        duration: 71 * frameRate
      }, '-=2')
    }

    if ($('.cam3-main-section-2').length) {
      const pcTl_2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".cam3-main-section-2",
          start: 'top top+=0',
          end: `+=${ 5 * height }`,
          // markers: true,
          pin: true,
          scrub: true
        }
      })

      const roundScale = isFullScreen ? '.8' : '.6'
      const camInfoY = isFullScreen ? '-95%' : '-86%'
  
      pcTl_2.to('.js-cam3-pc-sec-wrap', {
          scale: '1.3',
          y: '10%',
          duration: '.05'
        })
        .to('.js-cam3-wrap', {
          opacity: '0',
          duration: '.05',
          ease: "expo.out"
        }, '-=.05')
        .to('.js-pc-round-wrap', {
          scale: roundScale,
          y: '40%',
          duration: '.1'
        })
        .to('.js-cam-info-section', {
          y: camInfoY,
          duration: '.2'
        }, '-=.15')
        .to('.js-pc-round-wrap', {
          scale: roundScale,
          y: '40%',
          duration: '.1'
        })
        .to('.js-cam-info-section', {
          y: '-150%',
          duration: '.2'
        })
        .to('.js-pc-cam-wrap', {
          opacity: '0',
          duration: '.1'
        }, '-=.2')
        .to('.js-pc-round-wrap', {
          y: '0',
          // x: '-461px',
          scale: 1,
          borderRadius: '20px',
          width: '923px',
          height: '461px',
          duration: '.6'
        }, '-=.1')
        .to(zoom, {
          count: 3,
          snap: "count",
          onUpdate: zoomUpdate,
          duration: '.6'
        }, '-=.6')
        .to('.js-pc-pic-wrap img', {
          scale: '.66',
          duration: '.6'
        }, '-=.6')
        .to(zoom, {
          count: 7,
          snap: "count",
          onUpdate: zoomUpdate,
          duration: '.6'
        }, '-=.6')
        
    }

    if ($('.cam3-main-section-5').length) {
      const pcTl_5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".cam3-main-section-5",
          start: 'top top+=0',
          end: `+=${ 4 * height }`,
          // markers: true,
          pin: true,
          scrub: true
        }
      })

      const aiInfoY = isFullScreen ? '-120%' : '-110%'

      pcTl_5.to('.js-4k-info-section', {
        y: aiInfoY,
        duration: '.5'
      })
      .to('.js-4k-info-section', {
        y: aiInfoY,
        duration: '.3'
      })
      .to('.js-4k-info-section', {
        y: '-180%',
        duration: '.3'
      })
      // .to('.js-4k-image-section', {
      //   scale: '1.2',
      //   y: 0,
      //   duration: '.2'
      // }, '-=.25')
      .to('.js-4k-mask-wrap', {
        scale: '50',
        x: '-100%',
        duration: '.4'
      }, '-=.2')
      .to('.js-4k-mask-wrap', {
        opacity: '0',
        duration: '.1'
      }, '-=.15')
      .to('.js-4k-bg-wrap', {
        scale: '3',
        duration: '.6'
      }, '-=.2')
      .to(fourkZoom, {
        count: 7,
        snap: "count",
        onUpdate: fourkZoomUpdate,
        duration: '.6'
      }, '-=.6')
    }

    if ($('.cam3-main-section-3').length) {
      const pcTl_3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".cam3-main-section-3",
          start: 'top top+=0',
          end: `+=${ 4 * height }`,
          // markers: true,
          pin: true,
          scrub: true
        }
      })

      const homeBaseInfoY = isFullScreen ? '-100%' : '-90%'

      pcTl_3.to('.img-hard-disk', {
        y: width > 1920 ? '314px' : `${314 / 1920  * width}px`,
        duration: '.5'
      }, '-=.2')
      .to('.img-cap', {
        y: width > 1920 ? '381px' : `${381 / 1920  * width}px`,
        duration: '.6'
      }, '-=.5')
      .to('.img-homebase3', {
        y: width > 1920 ? '-100px' : `${ - 100 / 1920 * width}px`,
        duration: '.2'
      }, '-=.6')
      .to('.img-homebase3-main', {
        opacity: '1',
        duration: '.05'
      })
      .to('.img-homebase3-nocap', {
        opacity: '0',
        duration: '.05'
      }, '-=.05')
      .to('.js-homebase-info-section', {
        y: homeBaseInfoY,
        duration: '.4'
      }, '-=.1')
      .to('.img-homebase3-wrap', {
        y: '30%',
        duration: '.4'
      }, '-=.4')
      .to('.js-homebase-info-section', {
        y: homeBaseInfoY,
        duration: '.2'
      })
      .to('.img-homebase3-wrap', {
        y: '30%',
        duration: '.2'
      })
      .to('.js-homebase-info-section', {
        y: '-200%',
        duration: '1.4'
      }, '-=.1')
      .to('.img-homebase3-wrap', {
        x: `${482 / 1920 * width}px`,
        y: '-20%',
        duration: '.5'
      }, '-=1.25')
      .to('.img-homebase3-inner-wrap', {
        scale: `${ 0.034375 * width / 384 }`,
        opacity: 0,
        duration: '.5'
      }, '-=.5')
      .to('.img-scene-wrap', {
        opacity: 1,
        duration: '.5'
      }, '-=.25')
    }

    if ($('.cam3-main-section-4').length) {
      const pcTl_4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".cam3-main-section-4",
          start: 'top top+=0',
          end: `+=${ 3 * height }`,
          // markers: true,
          pin: true,
          scrub: true
        }
      })

      const aiInfoY = isFullScreen ? '-126%' : '-130%'

      pcTl_4.to('.js-ai-info-section', {
        y: aiInfoY,
        duration: '.5'
      })
      .to('.js-ai-info-section', {
        y: aiInfoY,
        duration: '.3'
      })
      .to('.js-ai-info-section', {
        y: '-180%',
        duration: '.3'
      })
      .to('.js-ai-image-section', {
        scale: '1.2',
        y: 0,
        duration: '.2'
      }, '-=.25')
      .to('.js-ai-mask-wrap', {
        scale: '50',
        duration: '.4'
      }, '-=.2')
      .to('.js-ai-mask-wrap', {
        opacity: '0',
        duration: '.05'
      }, '-=.1')
    }
  }

  function initData() {
    for (let i = 0; i <= imageCounts; i++) {
      pcImageSet.push(`${origin}${pcNameBase}-${i}.jpg`)
    }

    for (let i = 0; i <= imageCounts; i++) {
      mbImageSet.push(`${origin}${mbNameBase}-${i}.jpg`)
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

  function prodsRender() {
    // console.log(frames.count)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(images[frames.count], 0, 0)
  }

  function zoomUpdate() {
    $('.js-cam-zoom-count').text(zoom.count + 1)
  }

  function fourkZoomUpdate() {
    $('.js-4k-zoom-in').text(fourkZoom.count + 1)
  }

  function event() {
    $('.js-cam3-pop-close').on('click', function () {
      popClose()
    })

    $('.js-video-pop-pullup').on('click', function () {
      popShow('.video-image-column')
    })

    $('.js-vision-pop-pullup').on('click', function () {
      popShow('.vision-image-column')
    })

    $('.js-safe-pop-pullup').on('click', function () {
      popShow('.safe-image-column')
    })

    $('.js-storage-pop-pullup').on('click', function () {
      popShow('.storage-image-column')
    })

    $('.js-alerts-pop-pullup').on('click', function () {
      popShow('.alerts-image-column')
    })
  }

  function popShow(target) {
    $('.cam3-common-pop-section').show()
    $(target).each(function () {
      if ($(this).hasClass('image-colunm-content')) {
        $(this).css('display', 'flex')
      } else {
        $(this).show()
      }
    })
    $('html').addClass('over-hide')
  }

  function popClose() {
    $('.cam3-common-pop-section').hide()
    $('.cam3-common-pop-content').hide()
    $('html').removeClass('over-hide')
  }
})