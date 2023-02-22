$(function() {
    let code = ''
    let timeOut = ''
    let couponsData = {}
    let sku = $(".with_eufy_btn").eq(0).data('sku') || ''
    const skus = [sku.toLocaleUpperCase()]
    $('.impact-container').find('.buttons').append('<a href="https://ecologi.com/about" class="button button--link-style  brandButtonText" style="margin-left: 30px">About Ecologi >></a>')

    $.ajax({
      type: 'GET',
      url: '/apps/pp/shopifyservices/coupons/by_skus',
      data: { "skus": skus, "shopify_domain": Shopify.shop },
      success: function success(body) {
        couponsData = body;
        skus.forEach(function (sku) {
          ajaxDate = couponsData[sku] && couponsData[sku][0]
          code = ajaxDate.title

          if (ajaxDate) {
            const discount = ajaxDate.value && (parseInt(ajaxDate.value.replace('-', '')) * 100);
            const value_style = ajaxDate.value_style && ajaxDate.value_style;
            const discount_text = ajaxDate.value_type === 'fixed_amount' ? value_style : `${discount / 100}%`;

            $('.spring-clean-2022-withEufy').find('.with_eufy_btn').eq(0).before(`
                <div class="is-flex discount-bar">
                    <p class="code-counts">
                        <span class="code-num">${discount_text}</span>
                        <span class="code-off">OFF</span>
                    </p>
                    <p class="code-info">Code:${code}<p>
                    <span class="copy-btn">Copy</span>
                </div>
            `)
          }
        })
      }
    })

    $('.spring-clean-2022-withEufy').on('click', '.discount-bar', function() {
        const input = document.createElement('input');
        document.body.appendChild(input)
        input.setAttribute('value', code)
        input.select()
        
        if (document.execCommand('copy')) {
            document.execCommand('copy')
            if(timeOut) clearTimeout(timeOut)
            $(this).find('.copy-btn').text('Copied').addClass('actived')
            timeOut = setTimeout(() => {
                $(this).find('.copy-btn').text('Copy').removeClass('actived')
            }, 1000)
        }
        document.body.removeChild(input)
    })
})