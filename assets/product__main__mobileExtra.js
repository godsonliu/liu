$(document).ready(function () {
  function onScrollMenu() {
    let s = document.documentElement.scrollTop || document.body.scrollTop;
    if (s <= 117) {
      $('.customBar').css('top', '-100px');
    } else {
      $('.customBar').css('top', '0px');
    }
  }

  window.addEventListener('scroll', Shopify.contentCreator.util.throttle(onScrollMenu, 200));
  var button = $(".partners__button__a");
  var buttonLess = $(".partners__button__a_less");
  button.click(function () {
    $('.mobile_special_ul').removeClass('ul_seeMore').addClass('ul_seeLess')
    button.hide();
    buttonLess.show();
  });
  buttonLess.click(function () {
    $('.mobile_special_ul').removeClass('ul_seeLess').addClass('ul_seeMore')
    button.show();
    buttonLess.hide();
  });

  // 最原始的方式 可是为啥你要闪屏
  $('#newCartOnMobile').click(e => {
    e.preventDefault();
    let id = $(e.target).attr('product_id');
    var $addToCartForm = $(`#product_form_${id}`);
    Shopify.theme.jsAjaxCart.addToCart_CustomBar($addToCartForm);
    return false;
  })
})
