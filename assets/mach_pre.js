$(function () {
  let mach_utils = {
    machRequest: ({ fn, error, params, url, method }) => {
      if (!window.grecaptcha) return;
      if (fn && typeof fn === "function") {
        grecaptcha.ready(() => {
          grecaptcha
            .execute(ShopMetafields.recaptcha, { action: "ActivityCreate" })
            .then((recaptcha) => {
              $.ajax({
                headers: {
                  recaptcha,
                  "X-Application-Name": `${Shopify.shop.split(".")[0]}-shopify`
                },
                url: `/apps/pp/rainbowbridge/activities${url}`,
                type: method,
                contentType: "application/json",
                data: method === 'POST' ? JSON.stringify({
                  ...Shopify.cookie.getAdCookie(),
                  ...params,
                }) : "",
                success: (body) => {
                  fn(body);
                },
                error: (err) => {
                  if (error && typeof error === "function") error(err);
                },
              });
            });
        });
      }
      return "error arguments";
    }
  }
  window.mach_utils = mach_utils

  if($('.mach-pre-hot').hasClass('mach-pre-hot-a')) {
    $('.mach_accessories_div_a').parents('.shopify-section').remove()
    $('.mach_nav_a').parents('.shopify-section').remove()
  } else {
    $('.mach_accessories_div_b').parents('.shopify-section').remove()
    $('.mach_nav_b').parents('.shopify-section').remove()
  }
})