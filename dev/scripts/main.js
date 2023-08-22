jQuery(document).ready(function ($) {
  $(".tabs").lightTabs();

  $(".birthday-input").mask("99.99.9999");
  $("[type=tel]").mask("+7 (999) 999-99-99");

  $(".count__plus").click(function () {
    let count = $(this).parent().find("input").val();
    count++;
    $(this).parent().find("input").val(count);
  });
  $(".count__minus").click(function () {
    let count = $(this).parent().find("input").val();
    if (count <= 1) {
      count = 1;
    } else {
      count--;
    }
    $(this).parent().find("input").val(count);
  });

  $(".clear-input").click(function () {
    $(this).parent().find("input").val("");
  });

  $(".lk-order__top").click(function () {
    $(this).parent().toggleClass("open");
  });
  $(".catalog__filters-caption").click(function () {
    $(this).parent().toggleClass("open");
  });

  $(".nav-catalog").click(function () {
    $(".hamburger").toggleClass("is-active");
    $("body").toggleClass("open-menu");
  });

  $(document).on("click", function (e) {
    if ($(e.target).closest(".nav-catalog").length === 0) {
      $(".hamburger").removeClass("is-active");
      $("body").removeClass("open-menu");
    }
  });

  // $(".section-addition__left ul li").click(function () {
  //   const id = $(this).data("block");
  //   $(".section-addition__left ul li").removeClass("active");
  //   $(".section-addition__slide").removeClass("active");
  //   $(this).addClass("active");
  //   $(".section-addition__slide[data-id=" + id + "]").addClass("active");
  // });
  $(".catalog__items-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,

    autoplaySpeed: 2000,
    prevArrow: "<button type='button' class='slick-prev'></button>",
    nextArrow: "<button type='button' class='slick-next'></button>",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".catalog__img-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    prevArrow: "",
    nextArrow: "",
  });
  $(".section-hero__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    autoplaySpeed: 2000,
    prevArrow: "",
    nextArrow: "",
  });
  $(".product-slider_for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".product-slider_nav",
  });
  $(".product-slider_nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".product-slider_for",
    dots: false,
    arrows: true,
    focusOnSelect: true,
    // prevArrow: "<button type='button' class='slick-prev-product'></button>",
    // nextArrow: "<button type='button' class='slick-next-product'></button>",
    prevArrow: "",
    nextArrow: "",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
