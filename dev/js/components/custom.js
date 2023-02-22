/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

$.extend({
  // $.tmpl('script[type="text/template"]', { data: [1, 2] })
  tmpl: function(elem, data) {
    var template = $(elem).text()
    // return doT.template(template).apply(null,[data]);
    return ejs.render(template, data);
  }
});

/* custom css loop function */

const cssLoop = (cssString, id) => {
  const addPrefixToSelector = (selector, prefix) => {
    const newSelectors = []
    for (const item of selector.split(",")) {
      newSelectors.push(prefix + " " + item)
    }
    return newSelectors.join(",")
  }

  const addPrefixToCSS = (css, prefix) => {
    // deep copy
    const newCss = JSON.parse(JSON.stringify(css))
    if (newCss?.type === "media") {
      for (const subStyle of newCss.subStyles) {
        subStyle.selector = addPrefixToSelector(subStyle.selector, prefix)
      }
    } else {
      newCss.selector = addPrefixToSelector(newCss.selector, prefix)
    }
    return newCss
  }

  const stringifyCSSItem = (selector, rules) => {
    /* accept selector and rules then produce a normal css expression  */
    let str = ""
    for (const rule of rules) {
      str += `\t${rule.directive}: ${rule.value};\n`
    }
    return selector + '{\n' + str + '}\n'
  }

  const stringifyCSS = css => {
    /* parsed css to css String */
    const newCss = JSON.parse(JSON.stringify(css))
    let str = ""
    if (newCss?.type === "media") {
      str += newCss.selector + '{\n'
      for (const subStyle of newCss.subStyles) {
        str += stringifyCSSItem(subStyle.selector, subStyle.rules)
      }
      str += '}'
    } else {
      str += stringifyCSSItem(newCss.selector, newCss.rules)
    }
    return str
  }

  const parser = new cssjs()
  const parsed = parser.parseCSS(cssString)

  const addedPrefixCssString = parsed.map(css => addPrefixToCSS(css, `#${id}`))
    .map(css => stringifyCSS(css))
    .join("\n")

  if ($(`#${id} style`).length) {
    $(`#${id} style`).append(addedPrefixCssString)
  } else {
    $(`#${id}`).prepend($("<style>").text(addedPrefixCssString))
  }
}