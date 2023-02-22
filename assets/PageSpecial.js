const cfg = window._rma_page || {};
const { lang = {} } = cfg;

let formData = {};
formData.purchased_at = "2020-12-09";

function valueChange() {
  const event = window.event;
  const { name, value, options, selectedIndex } = event.target;
  formData[name] = (value || '').trim();
  if (name === 'sku') formData.product_name = options[selectedIndex].text;
};

function closeModal() {
  $('#myModal').css("display", "none");
}
function openModal(con) {
  $('#myModal').css("display", "block");
  $('#modal_con').html(`${con}`);
}
function success() {
  $('.formSpin').removeClass('active');
  openModal(`<p>${lang.register_success}</p>`);
}
function error(err) {
  $('.formSpin').removeClass('active');
  openModal(`<p>${err.responseJSON.error || err.responseJSON.exception}</p>`);
}

function registerProduct() {
  const event = window.event;
  event.preventDefault();

  const errors = [];
  if (!formData.sku) errors.push(lang.fill_product);
  else if (!formData.sn) errors.push(lang.fill_serial_number);
  else if (!formData.purchased_at) errors.push(lang.fill_date);

  let html = "";
  for(var i = 0; i < errors.length; i++) {
    html += "<p>" + errors[i] + "</p>";
  }
  if (errors.length) return openModal(html);

  $.ajax({
    headers: Shopify.contentCreator.pastApi.getHeaders(),
    url: '/apps/pp/rainbow/warranties',
    type: 'POST',
    contentType: "application/json",
    dataType:"json",
    data: JSON.stringify(formData),
    success: () => success(),
    error: (err) => error(err)
  });
};



// referral

// referral 活动






