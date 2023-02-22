"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Shopify.theme.jsAjaxCart = {
  init: function init($section) {
    // Add settings from schema to current object
    Shopify.theme.jsAjaxCart = $.extend(this, Shopify.theme.getSectionData($section));

    if (isScreenSizeLarge() || this.cart_action == 'drawer') {
      this.initializeAjaxCart();
    } else {
      this.initializeAjaxCartOnMobile();
    }

    if (this.cart_action == 'drawer') {
      this.ajaxCartDrawer = $('[data-ajax-cart-drawer]');
      $(document).on('click', '[data-ajax-cart-trigger]', function (e) {
        e.preventDefault();
        Shopify.theme.jsAjaxCart.showDrawer();
        return false;
      });
    } else if (this.cart_action == 'mini_cart') {
      this.showMiniCartOnHover();
    }

    $(document).on('click', '.ajax-submit', function (e) {
      e.preventDefault();
      var $addToCartForm = $(this).closest('form');
      Shopify.theme.jsAjaxCart.addToCart($addToCartForm);
      return false;
    });
    $(document).on('click', '[data-ajax-cart-delete]', function (e) {
      e.preventDefault();
      var lineID = $(this).parents('[data-line-item]').data('line-item');
      Shopify.theme.jsAjaxCart.removeFromCart(lineID);

      if (Shopify.theme.jsCart) {
        Shopify.theme.jsCart.removeFromCart(lineID);
      }

      return false;
    });
    $(document).on('click', '[data-ajax-cart-close]', function (e) {
      e.preventDefault();
      Shopify.theme.jsAjaxCart.hideDrawer();
      Shopify.theme.jsAjaxCart.hideMiniCart();
      return false;
    });
  },
  showMiniCartOnHover: function showMiniCartOnHover() {
    var $el = $('[data-ajax-cart-trigger]');
    $el.hover(function () {
      if (Shopify.theme_settings.header_layout == 'centered' && $('.header-sticky-wrapper').hasClass('is-sticky')) {
        $('.header-sticky-wrapper [data-ajax-cart-trigger]').addClass('show-mini-cart');
      } else {
        $el.addClass('show-mini-cart');
      }
    }, function () {
      $el.removeClass('show-mini-cart');
    });
  },
  hideMiniCart: function hideMiniCart() {
    if (this.cart_action != 'mini_cart') return false;
    var $el = $('[data-ajax-cart-close]').parents('[data-ajax-cart-trigger]');
    $el.removeClass('show-mini-cart');
  },
  toggleMiniCart: function toggleMiniCart() {
    var $el = $('.mobile-header [data-ajax-cart-trigger]'); // Removes url to the cart page so user is not redirected

    $el.attr('href', '#');
    $el.off('click').on('click', function (e) {
      // If user clicks inside the element, do nothing
      if (e.target.closest('[data-ajax-cart-mini_cart]')) {
        return;
      } // Loads content into ajaxCart container for mobile header


      Shopify.theme.jsAjaxCart.initializeAjaxCartOnMobile(); // If user clicks outside the element, toggle the mini cart

      $el.toggleClass('show-mini-cart'); // Calculate height of mini cart

      var announcementHeight = 0;
      var mobileHeaderHeight = parseInt($('.mobile-header').height());

      if (typeof Shopify.theme.jsAnnouncementBar !== 'undefined' && Shopify.theme.jsAnnouncementBar.enable_sticky) {
        announcementHeight = Shopify.theme.jsAnnouncementBar.getAnnouncementHeight();
      }

      $('.mobile-header .theme-ajax-cart').css({
        height: "calc(100vh - ".concat(mobileHeaderHeight + announcementHeight, "px)")
      });
      
    });
  },
  showDrawer: function showDrawer(cart) {
    const { sku } = cart || {}
    const currentScrollPosition = window.scrollY;
    if (this.cart_action != 'drawer') return false;
    window.dataLayer.push({'event': 'cart_recommend'})
    console.log(window.dataLayer[window.dataLayer.length-1])

    if(!this.ajaxCartDrawer.hasClass('is-visible') && this.ajaxCartDrawer.data('is-recomnd-mode') === true){
      this.getRecomdData(sku)
    }
    this.ajaxCartDrawer.addClass('is-visible');
    
    $('body').attr('data-current-position', currentScrollPosition)
    $('html, body').addClass('mobile-menu--opened')
    $('.ajax-cart__overlay').addClass('is-visible');
  },
  hideDrawer: function hideDrawer() {
    if (this.cart_action != 'drawer') return false;
    const lastScrollPosition = $('body').attr('data-current-position')

    this.ajaxCartDrawer.removeClass('is-visible')
    $('.ajax-cart__overlay').removeClass('is-visible');
    $('html, body').removeClass('mobile-menu--opened');
    window.scrollTo(0, +lastScrollPosition);
  },
  removeFromCart: function removeFromCart(lineID, callback) {
    $.ajax({
      type: 'POST',
      url: '/cart/change.js',
      data: 'quantity=0&line=' + lineID,
      dataType: 'json',
      success: function success(cart) {
        Shopify.theme.jsAjaxCart.updateView();
      },
      error: function error(XMLHttpRequest, textStatus) {
        var response = eval('(' + XMLHttpRequest.responseText + ')');
        response = response.description;
      }
    });
  },
  initializeAjaxCart: function initializeAjaxCart() {
    Shopify.theme.asyncView.load(Shopify.routes.cart_url, // template name
      'ajax' // view name (suffix)
    ).done(function (_ref) {
      var html = _ref.html,
        options = _ref.options;
      $('[data-ajax-cart-content]').html(html.content); // Converting the currencies

      // Locate discount box
      if (!jQuery('#shopify-section-cart__main').length) {
        jQuery('body>.theme-ajax-cart .ajax-cart__subtotal').after('<noscript class="tdfPlaceDiscounts"></noscript>');
      }

      if (Currency.show_multiple_currencies) {
        Shopify.theme.currencyConverter.convertCurrencies();
      }
    }).fail(function () {// some error handling
    });
  },
  initializeAjaxCartOnMobile: function initializeAjaxCartOnMobile() {
    this.toggleMiniCart();
    Shopify.theme.asyncView.load(Shopify.routes.cart_url, // template name
      'ajax' // view name (suffix)
    ).done(function (_ref2) {
      var html = _ref2.html,
        options = _ref2.options;
      $('.mobile-header [data-ajax-cart-content]').html(html.content);
    }).fail(function () {// some error handling
    });
  },
  addToCart: function addToCart($addToCartForm) {
    var $addToCartBtn = $addToCartForm.find('.button--add-to-cart');
    const data = $addToCartForm.serialize();
    $.ajax({
      url: '/cart/add.js',
      dataType: 'json',
      cache: false,
      type: 'post',
      data,
      beforeSend: function beforeSend() {
        $addToCartBtn.attr('disabled', 'disabled').addClass('disabled');
        $addToCartBtn.find('span').removeClass("fadeInDown").addClass('animated zoomOut');
      },
      success: function success(cart) {
        fbq('track', 'AddToCart',
          // begin required parameter object
          {
            value: cart.price/100,
            num_items: cart.quantity,
            currency:'{{ shop.currency }}',
            content_name:cart.title ,// 产品内容的名字
            content_type: 'product_group', 
            content_ids:cart.variant_id , // 产品的varaint id
            content_category: cart.product_type,  // 产品分类
          }
          // end required parameter object
        );
        window.dataLayerData.cartItems.push(cart);
        var $el = $('[data-ajax-cart-trigger]');
        $addToCartBtn.find('.checkmark').addClass('checkmark-active');
        function addedToCart() {
          if (!isScreenSizeLarge()) {
            $el = $('.mobile-header [data-ajax-cart-trigger]');
            Shopify.theme.scrollToTop($el);
          } else {
            $el = $('[data-ajax-cart-trigger]');
          }

          $el.addClass('show-mini-cart');
          $addToCartBtn.find('span').removeClass('fadeInDown');
        }
        window.setTimeout(function () {
          $addToCartBtn.removeAttr('disabled').removeClass('disabled');
          $addToCartBtn.find('.checkmark').removeClass('checkmark-active');
          $addToCartBtn.find('.text, .icon').removeClass('zoomOut').addClass('fadeInDown');
          $addToCartBtn.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', addedToCart);
        }, 1000);
        Shopify.theme.jsAjaxCart.updateView();
        Shopify.theme.jsAjaxCart.showDrawer(cart);
        const { handle, sku } = cart;
        referralTrack('products', handle, 'click', { name: 'addToCart', sku });

        if (Shopify.theme.jsCart) {
          var _$$ajax;

          $.ajax((_$$ajax = {
            dataType: "json",
            async: false,
            cache: false
          }, _defineProperty(_$$ajax, "dataType", 'html'), _defineProperty(_$$ajax, "url", "/cart"), _defineProperty(_$$ajax, "success", function success(html) {
            var cartForm = $(html).find('.cart__form');
            $('.cart__form').replaceWith(cartForm);
          }), _$$ajax));
        }
      },
      error: function error(XMLHttpRequest) {
        var response = eval('(' + XMLHttpRequest.responseText + ')');
        response = response.description;
        var cartWarning = "<p class=\"cart-warning__message animated bounceIn\">".concat(response.replace('All 1 ', 'All '), "</p>");
        $('.warning').remove();
        $addToCartForm.find('.cart-warning').html(cartWarning);
        $addToCartBtn.removeAttr('disabled').removeClass('disabled');
        $addToCartBtn.find('.icon').removeClass('zoomOut').addClass('zoomIn');
        $addToCartBtn.find('.text').text(Shopify.translation.addToCart).removeClass('zoomOut').addClass('zoomIn');
      }
    });
  },
  // showDiffSku() {
  //   const {country, shop} = Shopify
  //   const countrys = shop.indexOf('beta') > -1 ? {
  //     'US': [{ id: "38017434288297", quantity: 1, sku: "T89000D4" }],
  //     'GB': [{ id: "38017434288297", quantity: 1, sku: "T89000D4" }],
  //     'DE': [{ id: "38017434288297", quantity: 1, sku: "T89000D4" }]
  //   } : {
  //     'US': [{ id: "37765848498362", quantity: 1, sku: "T89000D4" }],
  //     'GB': [{ id: "37778674188481", quantity: 1, sku: "T89000D4" }],
  //     'DE': [{ id: "32243192365158", quantity: 1, sku: "T89000D4" }]
  //   }

  //   return countrys[country]
  // },
  updateView: function updateView() {
    const _this = this
    Shopify.theme.asyncView.load(Shopify.routes.cart_url, // template name
      'ajax' // view name (suffix)
    ).done(function (_ref3) {
      var html = _ref3.html,
        options = _ref3.options;

      if (options.item_count > 0) {
        var itemList = $(html.content).find('.ajax-cart__list');
        var cartDetails = $(html.content).find('.ajax-cart__details-wrapper');
        $('.ajax-cart__list').replaceWith(itemList);
        $('.ajax-cart__details-wrapper').replaceWith(cartDetails);
        $('.ajax-cart__empty-cart-message').addClass('is-hidden');
        $('.ajax-cart__content-wrap').removeClass('is-hidden');
        $('[data-ajax-cart-trigger]').addClass('has-cart-count');
        $('[data-bind="itemCount"]').text(options.item_count);
      } else {
        $('.ajax-cart__empty-cart-message').removeClass('is-hidden');
        $('.ajax-cart__content-wrap').addClass('is-hidden');
        $('[data-ajax-cart-trigger]').removeClass('has-cart-count');
        $('[data-bind="itemCount"]').text('0');
        $('.ajax-cart__product').remove()
        _this.ajaxCartDrawer.removeClass('is-recomd-full-mode')
      }

      if (Currency.show_multiple_currencies) {
        Shopify.theme.currencyConverter.convertCurrencies();
      }

      // Locate discount box
      if (!jQuery('#shopify-section-cart__main').length) {
        jQuery('body>.theme-ajax-cart .ajax-cart__subtotal').after('<noscript class="tdfPlaceDiscounts"></noscript>');
      }

    }).fail(function () {// some error handling
    });
  },
  unload: function unload($section) {
    // Clear event listeners in theme editor
    $('.ajax-submit').off();
    $('[data-ajax-cart-delete]').off();
  },
  addToCart_CustomBar: function addToCart_CustomBar($addToCartForm) {
    //#移动端改版
    var $addToCartBtn = $addToCartForm.find('.button--add-to-cart');
    const data = $addToCartForm.serialize();
    $.ajax({
      url: '/cart/add.js',
      dataType: 'json',
      cache: false,
      type: 'post',
      data,
      beforeSend: function beforeSend() {
        $addToCartBtn.attr('disabled', 'disabled').addClass('disabled');
        $addToCartBtn.find('span').removeClass("fadeInDown").addClass('animated zoomOut');
      },
      success: function success(cart) {
        window.dataLayerData.cartItems && window.dataLayerData.cartItems.push(cart);
        var $el = $('[data-ajax-cart-trigger]');
        $addToCartBtn.find('.checkmark').addClass('checkmark-active');
        function addedToCart() {
          if (!isScreenSizeLarge()) {
            $el = $('.mobile-header [data-ajax-cart-trigger]');
            // Shopify.theme.scrollToTop($el);
          } else {
            $el = $('[data-ajax-cart-trigger]');
          }

          $el.addClass('show-mini-cart');
          $addToCartBtn.find('span').removeClass('fadeInDown');
        }
        window.setTimeout(function () {
          $addToCartBtn.removeAttr('disabled').removeClass('disabled');
          $addToCartBtn.find('.checkmark').removeClass('checkmark-active');
          $addToCartBtn.find('.text, .icon').removeClass('zoomOut').addClass('fadeInDown');
          $addToCartBtn.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', addedToCart);
        }, 1000);
        Shopify.theme.jsAjaxCart.showDrawer(cart);
        Shopify.theme.jsAjaxCart.updateView();
        const { handle, sku } = cart;
        referralTrack('products', handle, 'click', { name: 'addToCart', sku });

        if (Shopify.theme.jsCart) {
          var _$$ajax;

          $.ajax((_$$ajax = {
            dataType: "json",
            async: false,
            cache: false
          }, _defineProperty(_$$ajax, "dataType", 'html'), _defineProperty(_$$ajax, "url", "/cart"), _defineProperty(_$$ajax, "success", function success(html) {
            var cartForm = $(html).find('.cart__form');
            $('.cart__form').replaceWith(cartForm);
          }), _$$ajax));
        }
      },
      error: function error(XMLHttpRequest) {
        var response = eval('(' + XMLHttpRequest.responseText + ')');
        response = response.description;
        var cartWarning = "<p class=\"cart-warning__message animated bounceIn\">".concat(response.replace('All 1 ', 'All '), "</p>");
        $('.warning').remove();
        $addToCartForm.find('.cart-warning').html(cartWarning);
        $addToCartBtn.removeAttr('disabled').removeClass('disabled');
        $addToCartBtn.find('.icon').removeClass('zoomOut').addClass('zoomIn');
        $addToCartBtn.find('.text').text(Shopify.translation.addToCart).removeClass('zoomOut').addClass('zoomIn');
      }
    });
  },
  setRecomdItem(item) {
    let options = ''

    item.selected_options.map(option => {
      options += `<span class="c__recomd-item-opline">${option.name}: ${option.value}</span>`
    })

    return `<li class="ajax-cart__recomd-item"  data-variant-item="${item.variant_shopify_id}">
    <div class="ajax-cart__recomd-item-content">
      <div class="c__recomd-item-img">
        <a class="js-cart-recomd-link" data-type="image" href="/products/${item.handle}?variant=${item.variant_shopify_id}">
          <img src="${item.variant_image}">
        </a>
      </div>
      <div class="c__recomd-item-info">
        <p class="c__recomd-item-title"><a class="js-cart-recomd-link" data-type="title" href="/products/${item.handle}?variant=${item.variant_shopify_id}">${item.product_title}</a></p>
        <p class="c__recomd-item-variant">${options}</p>
        <p class="c__recomd-item-ctn">
          <span class="c__recomd-item-price">${item.currency_symbol}${item.variant_price}</span>
          <button class="button c__recomd-item-button js-cart-recomd-btn" data-v-id="${item.variant_shopify_id}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-4 h-4 inline-block"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>Add</button>
        </p>
      </div>
    </div>
  </li>`
  },
  setCartRecomdEvent(recomdData) {
    const _this = this
    const filterSkus = this.getFilterSkus()
    
    $('body').find('.js-cart-recomd-btn').unbind()
    $('body').find('.js-cart-recomd-link').unbind()
    $('body').find('.js-cart-recomd-btn').bind('click', function(e) {
      e.preventDefault()
      const id = $(this).data('v-id')
      const item = recomdData.filter(item => +item.variant_shopify_id === id)[0] || {}

      Shopify.theme.addItemsToCart([{
        id,
        quantity: 1
      }], {
        onError: err => $.dialog({ title: err.message, content: err.description, type: 'red' })
      })

      $(`[data-variant-item="${id}"]`).remove()
      _this.mobRecomdSwiperInit()
      if($('.ajax-cart__recomd-item').length === 0){
        _this.ajaxCartDrawer.removeClass('is-recomd-full-mode')
      }

      window.dataLayer.push({ "event_parameters": null });
      window.dataLayer.push({
        "event": "ga4Event",
        "event_name": "add_to_cart",
        "event_parameters": {
          "page_group": `Cart Pop Up_${filterSkus}`, //取侧边栏购物车内的原本的所有SKU
          "position": "Cart Pop Up_Bundle", 
          "currency": item.currency,
          "value": item.variant_price,
          "items": [{
            "item_id": item.sku, //读取被推荐产品的SKU
            "item_name": item.product_title,
            "item_brand": 'eufy',
            "item_variant": item.variant_title,
            "price": item.variant_price,
            "quantity": 1
          }]//取点击推荐产品的信息
        }
      })
    })

    $('body').find('.js-cart-recomd-link').bind('click', function() {
      let idx = 0
      let item = {}
      const type = $(this).data('type')
      const id = $(this).parents('.ajax-cart__recomd-item').data('variant-item')
      
      recomdData.map((t, i) => {
        if(+t.variant_shopify_id === id) {
          idx = i
          item = t
        }
      })

      window.dataLayer.push({ "event_parameters": null });
      window.dataLayer.push({
        "event": "ga4Event",
        "event_name": "bundle",
        "event_parameters": {
          "page_group": `Cart Pop Up_${filterSkus}`, //取侧边栏购物车内的原本的所有SKU
          "position": `Cart Pop Up_Bundle_${type}`, 
          "SKU": item.sku,//读取点击跳转的SKU
          "SKU_name": item.product_title, //产品名
          "SUM": item.variant_price, //读取price
          "SKU_variant": item.variant_title, 
          "SKU_index": idx //bundle顺序，如1、2、……
        }
      })
    })
  },
  mobRecomdSwiperInit() {
    if(!this.recomdSwiper){
      this.recomdSwiper = new Swiper('.ajax-cart__recomd-contain', {
        slideClass: 'ajax-cart__recomd-item',
        slidesPerView: 'auto'
      })
    } else {
      if(this.recomdSwiper.length){
        this.recomdSwiper.map(item => {
          item.update()
        })
      } else {
        this.recomdSwiper.update()
      }
    }
  },
  getFilterSkus() {
    const filterSet = new Set()

    this.ajaxCartDrawer.find('.ajax-cart__product').each(function() {
      const sku = $(this).data('cart-sku')
      filterSet.add(sku)
    })

    return [...filterSet].join(',')
  },
  getRecomdData(sku) {
    const skus = sku || ($('.ajax-cart__product').length && $('.ajax-cart__product').eq(0).data('cart-sku'))
    if(!skus) return
    const limit = 5
    const _this = this
    const {shop} = Shopify
    const filterSkus = this.getFilterSkus()
    const isDevEnv = Shopify.shop.indexOf('beta') > -1
    const subDomain = isDevEnv ? 'rainbowbridge-next' : 'rainbowbridge'
    
    $.ajax({
      url: `https://${subDomain}.anker.com/api/personalize/relation?shopify_domain=${shop}&skus=${skus}&limit=${limit}${filterSkus ? `&filter_skus=${filterSkus}` : '' }`,
      dataType: 'json',
      cache: false,
      type: 'get',
      success({ data }) {
        const recomdData = []
        let html = ''
        const trackSkus = []
        const trackList = []
        for(const item in data) {
          recomdData.push(...data[item])
        }

        if(recomdData.length) {
          recomdData.map((item, idx) => {
            html += _this.setRecomdItem(item)
            trackSkus.push(item.sku)
            trackList.push({
              "item_id": item.sku, //读取被推荐产品的SKU
              "item_name": item.product_title,
              "item_variant": item.variant_title,
              "price": item.variant_price,//读取被推荐产品展示的折扣价
              "index": idx //读取被推荐的位置，如1,2,3
            })
          })
  
          $('.ajax-cart__recomd-list').html(html)
          _this.setCartRecomdEvent(recomdData)
          _this.mobRecomdSwiperInit()
          _this.ajaxCartDrawer.addClass('is-recomd-full-mode')

          // ga
          window.dataLayer.push({ "event_parameters": null });
          window.dataLayer.push({
            "event": "ga4Event",
            "event_name": "view_item_list",
            "event_parameters": {
              "page_group": `Cart Pop Up_${filterSkus || skus}`, //取侧边栏购物车内的原本的所有SKU
              "position":"Cart Pop Up_Bundle",
              "items": trackList
            }
          });
        }
      }
    })
  }
};