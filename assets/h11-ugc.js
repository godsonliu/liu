$(document).ready(function () {
  $(".page-h11-ugc .jsSlideshowClassic")
    .eq(0)
    .find(".banner--full-link")
    .on("click", function () {
      dataLayer.push({
        event: "uaEvent", // Trigger
        eventCategory: "h11_ugc",
        eventAction: "duet_now",
        eventLabel: "1st_banner",
      });
    });

  $(".page-h11-ugc .jsSlideshowClassic")
    .eq(2)
    .find(".banner--full-link")
    .on("click", function () {
      dataLayer.push({
        event: "uaEvent", // Trigger
        eventCategory: "h11_ugc",
        eventAction: "duet_now",
        eventLabel: "3rd_banner",
      });
    });
});
