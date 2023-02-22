const cfg = window._rma_page || {};
const { lang = {} } = cfg;

// 交互动画
$('.act').click(e => {
  const dom = e.target.getElementsByClassName('add') && e.target.getElementsByClassName('add')[0];
  const addDom = e.target.parentNode.getElementsByClassName('more') && e.target.parentNode.getElementsByClassName('more')[0];
  if (dom.classList.contains('active')) {
    dom.classList.remove('active');
    addDom.classList.remove('active');
  } else {
    dom.classList.add('active');
    addDom.classList.add('active');
  }
});

// 数据准备
const sourceDefault = $('#amazon_form .sources_label label:first-child input').attr('value');
const storeDefault = $(".scrollnav").find("h5").first().attr("id");
let storeData = {
  store: storeDefault,
  orderHash: '',
  formData: {},
  official: {
    captcha: '',
    order_id: '', // 选中的orderID
    email: '',
    name: '',
    line_items: [], // 选中的orderID里的商品列表
    other: '',
    orders: '', // 获取的订单
    products: []
  },
  amazon: {
    captcha: '',
    order_id: '',
    email: '',
    name: '',
    source: sourceDefault,
    other: '',
    products: [{ name: '', sku: '', series_no: '' }]
  },
  ex: {
    captcha: '',
    email: '',
    name: '',
    line_items: [], // 选中的orderID里的商品列表
    source: sourceDefault,
    where_to_purchase: '',
    other: '',
    channel: 'others',
    orders: '', // 获取的订单
    products: [{ name: '', series_no: '' }]
  }
}
const addressFields = ['address1', 'address2', 'country_id', 'state_id', 'city', 'zip_code', 'phone'];

// init
$(`#${storeData.store}_form`).css("display", "block");
$(`#${storeData.store}`).addClass('curr');
$('.scrollnav').find('h5').click(e => toggleStore(e));
$('.sources_label label:first-child input').attr('checked', true);

getCaptchaCode('amazon');
getCaptchaCode('official');
getCaptchaCode('ex');

// 附件模块 将上传过的图渲染出来
loadAttachs('official');
loadAttachs('amazon');
loadAttachs('ex');

// fun
function valueChange(store, json) {
  const event = window.event;
  // 表单值更改(input/textarea/select)
  const { name, value } = json ? json.target : event.target;
  const data = storeData[store];
  data[name] = value;
  const exClass = event.target.getAttribute('class');
  $(`.${exClass}`).val(value);
}

function toggleStore(e) {
  const store = e.target.getAttribute('id');
  storeData.store = store;
  $('.scrollnav').find('h5').attr('class', '');
  $('.forms').find('form').css("display", "none");
  $(`#${storeData.store}`).addClass('curr');
  $(`#${storeData.store}_form`).css("display", "block");
  const arr = {
    others: lang.rma_ex_others.split('|'),
    walmart: lang.rma_ex_walmat.split('|')
  }[store] || [];
  if (arr.length) valueChange('ex', { target: { name: 'where_to_purchase', value: arr[0] } });
};

function closeModal() {
  $('#myModal').css("display", "none");
}
function openModal(con) {
  $('#myModal').css("display", "block");
  $('#modal_con').html(`${con}`);
}

function loadAttachs(store) {
  const data = storeData[store];
  const images = JSON.parse(localStorage.getItem(`rma_images_${store}`));
  data.attachs = Array.isArray(images) ? images : [];
  // 最多只能上传5个附件
  const imagesDom = $(`.${store}_form .images`);
  if (data.attachs && data.attachs.length >= 5) {
    imagesDom.find('i.upBox').css("display", "none");
  }
  // 在images里面塞入imgDom
  if (data.attachs && data.attachs.length > 0) {
    data.attachs.forEach(item => {
      const imgDom = `<i class="item" data-id=${item.id}><i class="img" style="background-image: url(&quot;${item.url}&quot;);"></i><b class="iconfont">&#xe723;</b></i>`
      $(`.${store}_form`).find('.images').prepend(imgDom);
    });
  }
  $('.upload').find('b').click(e => rmaDeleteAttach(e));
  storeData[store] = data;
}

function uploadAttach(store) {
  const e = window.event;
  const { files = [] } = e.target;
  const file = files[0];
  if (!file) return;
  if (!['image', 'pdf', 'video'].find(t => file.type.includes(t))) {
    openModal(`<p>${lang.file_format_error}</p>`);
    return;
  } if (file.size > 1024 * 1024 * 10) {
    openModal(`<p>${lang.file_size_error}</p>`);
    return;
  }

  const data = new FormData();
  data.append('picture', file);
  $('.attachSpin').addClass('active');

  $.ajax({
    headers: Shopify.contentCreator.pastApi.getHeaders(),
    url: '/apps/pp/rainbow/rma/upload_attachment',
    type: 'POST',
    cache: false,
    data: data,
    processData: false,
    contentType: false,
    success: function(body) {
      // 最多只能上传5个附件
      const imagesDom = $(`.${store}_form .images`);
      if (imagesDom[0].getElementsByClassName('item').length >= 5) {
        imagesDom.find('i.upBox').css("display", "none");
      }

      // dom插入
      const imgDom = `<i data-id=${body.id} class="item"><i class="img" style="background-image: url(&quot;${body.url}&quot;);"></i><b class="iconfont"></b></i>`
      $(`.${store}_form`).find('.images').prepend(imgDom);
      $('.upload').find('b').click(e => rmaDeleteAttach(e));
  
      // 数据储存
      const json = storeData[store];
      const attachs = (json.attachs || []).concat(body);
      json.attachs = attachs;
      storeData[store] = json;
      localStorage.setItem(`rma_images_${store}`, JSON.stringify(attachs));

      $('.attachSpin').removeClass('active');
      e.target.value = "";
    }
  });
}

function rmaDeleteAttach(e) {
  $('.attachSpin').addClass('active');
  const dom = e.target.parentNode;
  const storeCode = (storeData.store === 'official' || storeData.store === 'amazon') ? storeData.store : 'ex';
  const data = storeData[storeCode];
  const { attachs = [] } = data;
  const deleteId = Number(dom.getAttribute('data-id'));
  const domArr = $(`.${storeCode}_form .images`).find(`i[data-id=${deleteId}]`);
  const deleteAttach = (attachs && attachs.length > 0) ? attachs.filter(item => item.id === deleteId) : [];
  const retainAttachs = (attachs && attachs.length > 0) ? attachs.filter(item => item.id !== deleteId) : [];
  data.attachs = retainAttachs;

  const params = { "attachment_id": deleteAttach.id };
  $.ajax({
    headers: Shopify.contentCreator.pastApi.getHeaders(),
    url: '/apps/pp/rainbow/rma/delete_attachment',
    type: 'delete',
    contentType: "application/json",
    dataType:"json",
    data: params,
    success: function() {
      // 最多只能上传5个附件
      const imagesDom = $(`.${storeCode}_form .images`);
      if (imagesDom[0].getElementsByClassName('item').length <= 5) {
        imagesDom.find('i.upBox').css("display", "inline-block");
      };
      domArr.each((i, ele) => ele.remove());

      localStorage.setItem(`rma_images_${storeCode}`, JSON.stringify(retainAttachs));
      storeData[storeCode] = data;
      $('.attachSpin').removeClass('active');
    }
  });
}

function createCity(store, data) {
  let html = "<option value=''></option>";
  if (data) {
    for(var i = 0; i < data.length; i++) {
      html += "<option value='" + data[i].id + "'>" + data[i].name + "</option>";
    }
  }
  $(`.${store}_state_id`).html(html);
}

function countryChange(store) {
  $('.addressSpin').addClass('active');
  const event = window.event;
  const value = event.target.value;
  const data = storeData[store];
  data.country_id = value;
  storeData[store] = data;
  const exClass = event.target.getAttribute('class');
  $(`.${exClass}`).val(value);

  if (!value) {
    createCity(store);
    $('.addressSpin').removeClass('active');
  } else if (data[`state_${value}`]) {
    createCity(store, data[`state_${value}`]);
    $('.addressSpin').removeClass('active');
  } else if (data.country_id) {
    $.ajax({
      headers: Shopify.contentCreator.pastApi.getHeaders(),
      url: `/apps/pp/mars/countries/${data.country_id}/all_states`,
      type: 'GET',
      success: function(body) {
        // 渲染城市选项
        createCity(store, body);
        $('.addressSpin').removeClass('active');
        // 储存数据
        storeData[store] = { ...storeData[store], [`state_${value}`]: body };
      }
    })
  };
}

function resetForm(store) {
  // 表单内容清空
  $(`.${store}_form`).each((i, ele) => ele.reset());
  $(`.${store}_form .prods_info`).html("");
  $(`.${store}_form select[name='state_id']`).html("");
  $(`.${store}_form .upload .images`).find('i.item').remove();
  $(`.${store}_form select[name='country_id'] > option[value=${cfg.country_id}]`).removeAttr('selected');

  // 数据清空
  const data = storeData[store];
  if (store === 'official') {
    data.line_items = [];
    addressFields.forEach(k => {
      data[k] = '';
    }); // Shipping address
  } else if (store === 'amazon' || store === 'ex') {
    data.source = sourceDefault;
    data.products = [{ name: '', sku: '', series_no: '' }];
    addressFields.forEach(k => {
      data[k] = '';
    }); // Shipping address
    data.verifyed = false;
  }
  data.attachs = [];
  storeData[store] = {
    ...data,
    order_id: '',
    first_name: '',
    last_name: '',
    email: '',
    email_confirm: '',
    captcha: '',
    other: '' // 公共字段
  }
  localStorage.setItem(`rma_images_${store}`, JSON.stringify([]));
}

function getCaptchaCode(store) {
  $('.captchaSpin').addClass('active');
  $.ajax({
    headers: Shopify.contentCreator.pastApi.getHeaders(),
    url: '/apps/pp/rainbow/users/obtain_captcha',
    type: 'GET',
    success: function(body) {
      const { captcha_url, captcha_code } = body;
      storeData[store] = { ...storeData[store], captcha: '', captcha_url, captcha_code };
      $(`.${store}_captcha_img`).append(`<img src='/apps/pp/rainbow${storeData[store].captcha_url}'>`);
      $('.captchaSpin').removeClass('active');
    }
  })
}

genOrderHash = orders => orders.reduce((obj, item) => ({ ...obj, [item.number]: item }), {})
range = (_n = 0) => {
  const n = parseInt(_n, 10);
  const ret = Array.from(Array(n + 1).keys());
  ret.shift();
  return ret; // reverse();
};

function drawingProd(store, data) {
  const prods = data.line_items || [];
  
  let html = '';
  prods.forEach((item, index) => {
    let optionHtml = '';
    range(item.quantity).reverse().map((val, idx) => {
      optionHtml += "<option value=" + val + " key=" + idx + ">" + `${val === item.quantity ? 'All' : val}` + "</option>";
    });
    html += "<div><p class='name'><label for='prodSelect'><input key='"
    + index +
    "' class='prodSelect' type='checkbox'><span>"
    + item.name +
    "</span></label></p><div><div class='col2'><p class='select-normal col data-qty='"
    + item.quantity +
    "'><span class='placeholder'>"
    + lang.field_quantity +
    "<i class='requiredFlag'>*</i></span><select key='"
    + index +
    "' name='quantity'>"
    + optionHtml +
    "</select></p><p class='input-normal col'><span class='placeholder'>"
    + lang.rma_series_no_tip +
    "</span><input key='"
    + index +
    "' autocomplete='nope' type='text' maxlength='200' name='series_no' value=''></p></div></div></div>";
  });
  $(`.${store}_form .prods_info`).html(html);

  $(".prodSelect").change(e => selectProd(e));
  $("select[name='quantity']").change(e => changeProd('official', e));
  $("input[name='series_no']").change(e => changeProd('official', e));
}

function selectProd(event) {
  const store = 'official';
  const elem = event.target;
  const data = storeData[store];
  const i = elem.getAttribute('key');
  data.line_items[i].selected = elem.checked;
  storeData[store] = data;
}
function changeProd(store) {
  const elem = window.event.target;
  const data = storeData[store];
  const i = elem.getAttribute('key') || 0;
  data.products[i][elem.name] = elem.value;
  storeData[store] = data;
  const exClass = elem.getAttribute('class');
  $(`.${exClass}`).attr('value', elem.value);
}

function verifyOrder(store) {
  const data = storeData[store];
  const order_id = (data.order_id || '').trim();
  const errors = [];
  if (!order_id) errors.push(lang.fill_order_number);
  let html = "";
  for(var i = 0; i < errors.length; i++) {
    html += "<p>" + errors[i] + "</p>";
  }
  if (errors.length) return openModal(html);
  data.verifyed = false;
  storeData[store] = data;
  $('.orderSpin').addClass('active');
  
  const params = { order_id };
  return $.ajax({
    headers: Shopify.contentCreator.pastApi.getHeaders(),
      url: '/apps/pp/rainbow/rma/user_orders',
      type: 'GET',
      contentType: "application/json",
      dataType:"json",
      data: params,
    })
    .done(function(body) {
      const { orders = [] } = body;
      const orderHash = genOrderHash(orders);
      const order = orderHash[order_id];
      if (!order) {
        data.line_items = [];
        storeData[store] = data;
        $('.orderSpin').removeClass('active');
        return openModal(`<p>${lang.rma_order_error}</p>`);
      }
      const items = order.line_items;
      data.products = items.map(obj => ({
        line_item_id: obj.id,
        name: obj.name,
        quantity: obj.quantity,
        series_no: ''
      }));
      data.line_items = items;
      data.verifyed = true;

      storeData[store] = data;
      storeData.orderHash = orderHash;
      $('.orderSpin').removeClass('active');
      drawingProd(store, data);
      return;
    })
    .fail(function() {
      data.line_items = [];
      storeData[store] = data;
      $('.orderSpin').removeClass('active');
    });
}

const rmaRegExp = {
  nick_name: /^[a-zA-Z\s\&\/\.\(\)\-\,\']+$/,
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: {
    us: null,
    jp: /^[0][1-9]\d{8,9}$|^[0][1-9]\d{0,3}-\d{1,4}-\d{3,4}$|^[0][1-9][0]\d{8}$|^[0][1-9][0]-\d{4}-\d{4}$/,
    ru: /^\d{10,11}$/,
  },
  zipcode: {
    us: /^(\d{5}|\d{5}-\d{4})$/,
    jp: /^\d{7}$|([\d]{3})-([\d]{4})$/,
    ru: /^(\d{6})$/,
  },
  firstname: /^[a-zA-Z\s\&\/\.\(\)\-\,\']+$/,
  lastname: /^[a-zA-Z\s\&\/\.\(\)\-\,\']+$/,
  address1: /^[0-9a-zA-Z\s\#\.\,\;\:\'\°]+$/,
  address2: /^[0-9a-zA-Z\s\#\.\,\;\:\'\°]+$/,
  city: /^[a-zA-Z\s\-\,\.\;\'\&\/\(\)]$/,
  state_name: /^[\w\s\-\,\.\;\’\&\/\(\)]+$/,
  state_id: /^.*[^\s]+.*$/,
  password: /^.{8,20}$/,
  url: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
  date: /^(\d\d\/\d\d\/\d\d\d\d|\d\d\d\d\-\d\d\-\d\d|\d\d\d\d\/\d\d\/\d\d|\d\d\-\d\d\-\d\d\d\d|)$/,
  order_id: /^[a-zA-Z0-9-_]+$/,
  amz_orderid: /^\d{3}-\d{7}-\d{7}$/,
  tracking_number: /^[a-zA-Z0-9]+$/,
};

isStringNull = str => {
  if (typeof str === 'string' && str.constructor === String) return !!str.trim();
  return false;
};
isEmail = val => rmaRegExp.email.test(val);
isAmzOrderID = val => rmaRegExp.amz_orderid.test(val);

function rmaConfirm(store) {
  const e = window.event;
  e.preventDefault();
  const data = storeData[store];
  const ex_type = storeData.store;
  const isAmazon = store === 'amazon';
  const isEx = store === 'ex';
  const missing = {}; // 缺少必填
  formData = {
    // 公共字段
    first_name: (data.first_name || '').trim(),
    last_name: (data.last_name || '').trim(),
    email: (data.email || '').trim(),
    email_confirm: (data.email_confirm || '').trim(),
    code: (data.captcha_code || '').trim(),
    zip_code: (data.zip_code || '').trim(),
    value: (data.captcha || '').trim()
  };
  formData.products = data.products.filter((p, idx) => {
    if (isAmazon && !p.name) return false;
    if (!isAmazon && !isEx && !data.line_items.length) return false;
    if (!isAmazon && !isEx && !data.line_items[idx].selected) return false;
    return p;
  });
  if (isAmazon && data.products && !data.products[0].name.trim()) missing.name = true;
  if (!isEx) formData.order_id = (data.order_id || '').trim();
  if (isEx && data.products && !data.products[0].name.trim()) missing.name = true;
  if (isEx && (ex_type === 'Walmart' || ex_type === 'Others')) formData.where_to_purchase = data.where_to_purchase;
  
  const { attachs = [] } = data;
  const attachMsg = attachs.length > 0 ? `\nImages:\n${attachs.map(o => o.url).join('\n')}` : '';
  formData.other = data.other + attachMsg;
  formData.source = data.source;
  addressFields.forEach(k => {
    formData[k] = data[k] || '';
  }); // Shipping address
  if (isEx) {
    const value = ['ebay', 'walmart', 'best_buy', 'target', 'apple_store', 'others'];
    const key = ['eBay', 'Walmart', 'BestBuy', 'Target', 'Apple Store', 'Others'].indexOf(ex_type);
    formData.channel = key >= 0 ? value[key] : 'others';
  }

  // validation
  const errors = [];
  if ((data.other || '').trim().toLowerCase() === 'defective') errors.push(lang.rma_fill_defective);
  if (isAmazon && !formData.source) errors.push(lang.rma_fill_purchase_site);
  if (!formData.email) errors.push(lang.fill_email);
  else if (!isEmail(formData.email)) errors.push(lang.invalid_email);
  if (!formData.email_confirm) errors.push(lang.fill_confirm_email);
  if (formData.email && formData.email_confirm && formData.email_confirm !== formData.email) errors.push(lang.rma_email_confirm_tips);
  if (!formData.first_name) errors.push(lang.fill_firstname);
  if (!formData.last_name) errors.push(lang.fill_lastname);
  if (!isEx && !formData.order_id) errors.push(lang.fill_order_number);
  else {
    if (isAmazon && !isAmzOrderID(formData.order_id)) errors.push(lang.rma_error_order_format);
    // official 无历史订单
    if (!isEx && !isAmazon && data.orders.length < 1 && !data.verifyed) errors.push(lang.rma_pls_verify_order);
  }
  if (isAmazon && missing.name) errors.push(lang.fill_product_name);
  if (isEx && !attachs.length) errors.push(lang.rma_ex_fill_images);
  if (isAmazon && !attachs.length) errors.push(lang.rma_ex_fill_images);
  if (!isAmazon && formData.products.length < 1) errors.push(lang.rma_select_product);
  if (!isStringNull(data.other)) errors.push(lang.rma_fill_issue);
  if (!formData.value) errors.push(lang.fill_captcha);
  let html = "";
  for(var i = 0; i < errors.length; i++) {
    html += "<p>" + errors[i] + "</p>";
  }
  if (errors.length) return openModal(html);

  rmaSubmit(store);
}

function success(store) {
  resetForm(store);
  getCaptchaCode(store);
  localStorage.removeItem(`rma_images_${store}`);
  $('.formSpin').removeClass('formActive');
  openModal(`<p>${lang.request_success}</p>`);
}

function error(store, err) {
  getCaptchaCode(store);
  $('.formSpin').removeClass('formActive');
  openModal(`<p>${err.responseJSON.error || err.responseJSON.exception}</p>`);
}

function rmaSubmit(store) {
  formData.zip_code = (formData.zip_code || '').trim();
  $('.formSpin').addClass('formActive');
  if (store === 'official') {
    $.ajax({
      headers: Shopify.contentCreator.pastApi.getHeaders(),
      url: '/apps/pp/rainbow/rma/rma_store',
      type: 'POST',
      contentType: "application/json",
      dataType:"json",
      data: JSON.stringify(formData),
      success: () => success(store),
      error: (err) => error(store, err)
    });
  } else if (store === 'amazon') {
    $.ajax({
      headers: Shopify.contentCreator.pastApi.getHeaders(),
      url: '/apps/pp/rainbow/rma/rma_amazon',
      type: 'POST',
      contentType: "application/json",
      dataType:"json",
      data: JSON.stringify(formData),
      success: () => success(store),
      error: (err) => error(store, err)
    });
  } else if (store === 'ex') {
    $.ajax({
      headers: Shopify.contentCreator.pastApi.getHeaders(),
      url: '/apps/pp/rainbow/rma/channels',
      type: 'POST',
      contentType: "application/json",
      dataType:"json",
      data: JSON.stringify(formData),
      success: () => success(store),
      error: (err) => error(store, err)
    });
  }
}

