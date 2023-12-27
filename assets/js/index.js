$(function () {
 var swiper1 = new Swiper(".slider-banner-top", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },
 });
 var swiper2 = new Swiper(".slider-banner-multi", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
 });
 var swiper3 = new Swiper(".slider-category-product", {
  slidesPerView: 4,
  spaceBetween: 0,
  slidesPerColumn: 3,
  navigation: {
    nextEl: ".swiper-button-next-3",
    prevEl: ".swiper-button-prev-3",
  },
  grid: {
    rows: 2,
  },
  breakpoints: {
    768: {
      slidesPerView: 5,
      spaceBetween: 0,
      grid: {
        rows: 2,
      },
    },
    1500: {
      slidesPerView: 8,
      spaceBetween: 0,
      grid: {
        rows: 2,
      },
    },
  },
 });
 var swiper4 = new Swiper(".slider-banner-pr-1", {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next-4",
    prevEl: ".swiper-button-prev-4",
  },
 });
 var swiper5 = new Swiper(".slider-category-text", {
  loop: true,
  spaceBetween: 5,
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next-5",
    prevEl: ".swiper-button-prev-5",
  },
  breakpoints: {
    1500: {
      spaceBetween: 5,
      slidesPerView: 8,
    },
  },
 });
 var swiper6 = new Swiper(".slider-category-text-2", {
  loop: true,
  spaceBetween: 5,
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next-6",
    prevEl: ".swiper-button-prev-6",
  },
  breakpoints: {
    1500: {
      spaceBetween: 5,
      slidesPerView: 8,
    },
  },
 });
 var swiper7 = new Swiper(".slider-banner-three", {
  loop: true,
  spaceBetween: 5,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next-4",
    prevEl: ".swiper-button-prev-4",
  },
  breakpoints: {
    1200: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
  },
 });


 var swiper8 = new Swiper(".slider-project", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
        return current + ' / ' + (total); 
    }
  },
  navigation: {
    nextEl: ".swiper-button-next-5",
    prevEl: ".swiper-button-prev-5",
  },
  breakpoints: {
    768: {
      spaceBetween: 0,
      slidesPerView: 3,
    },
    1200: {
      spaceBetween: 0,
      slidesPerView: 4,
    },
  },
 });
 var swiper9 = new Swiper(".slider-customer", {
  loop: true,
  spaceBetween: 5,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next-6",
    prevEl: ".swiper-button-prev-6",
  },
  breakpoints: {
    768: {
      spaceBetween: 0,
      slidesPerView: 4,
    },
    1200: {
      spaceBetween: 12,
      slidesPerView: 6,
    },
  },
 });
 var swiper10 = new Swiper(".banner-two", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next-10",
    prevEl: ".swiper-button-prev-10",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
  },
 });
 $(window).scroll(function() {
  if ($(window).scrollTop() < 300) {
    $('.btn-back-to-top, .btn-back-to-top-mobile').addClass('hidden');
  } else {
    $('.btn-back-to-top').removeClass('hidden');
  }
});
 $('.btn-back-to-top, .btn-back-to-top-mobile').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
 $('.content-page-cate-pr .woocommerce-ordering input[type="radio"]').each(function(index) {
  $(this).next('label').addBack().wrapAll("<div class='button-box'></div>");
});
$('.dropdown-submenu .sub-m .btn-open').on("click", function(e){
  $(this).parent('.sub-m').next('ul').toggle();
  $(this).toggleClass('active')
  e.stopPropagation();
  e.preventDefault();
});
 $('.btn-feature .btn-green').on("click", function(e){
  $(this).parents('.mod-reviews').find('.comment-h').toggle('active');
  $(this).toggleClass('active')
  e.stopPropagation();
  e.preventDefault();
});
 $('.btn-search-m button').click(function(){
  $('.header-bottom-mobile, .btn-search-m input').toggleClass('active-search');
  $('.btn-search-m input').focus();
});
// $('.box-menu-content-news h4').click(function(){
//   $('.box-menu-content-news').toggleClass('active');
// });
$('.table-of-content li a').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top -100
  }, 'linear');
  return false;
});
 $(".menu-item-has-children")
  .on("mouseover", function () {
   $(this).children(".sub-menu").addClass("active");
  })
  .on("mouseout", function () {
   $(this).children(".sub-menu").removeClass("active");
  });

 $(".menu-aside .menu-item-has-children").append(
  '<div class="icon"><img src="/wp-content/themes/nwstheme/assets/images/arrow-down-s-fill.svg" alt=""></div>'
 );
 $(".menu-aside .menu-item-has-children .icon").on("click", function () {
  $(this).siblings(".sub-menu").slideToggle();
 });

 $("#btn-hamburger").on("click", function () {
  $(".menu-aside-page").toggleClass("show");
  $("body").toggleClass("overflow-hidden-x menu-child-show");
 });
 // menu sp
 $(".menu-aside-page .sub-menu").hide();
 $(".menu-aside-page .text-menu .icon-open").on("click", function () {
  $(this).toggleClass('show-ic')
  $(this).parents(".has-child").find(".sub-menu").slideToggle();
 });
 $(".item__guide").on("click", function () {
  $("body").addClass("overflow-hidden");
  $("#guideModal").addClass("show");
 });

 $(".item__initiative").on("click", function () {
  $("body").addClass("overflow-hidden");
  $("#initiativeModal").addClass("show");
 });

 $(".item__topic").on("click", function () {
  $("body").addClass("overflow-hidden");
  $("#topicModal").addClass("show");
 });

 $("#questionModal .btn").on("click", function () {
  $("body").addClass("overflow-hidden");
  $("#sendSuccess").addClass("show");
 });

 $(".popup-backdrop, .popup-child .close, btn-done").on("click", function () {
  $("body").removeClass("overflow-hidden");
  $("#guideModal").removeClass("show");
  $("#initiativeModal").removeClass("show");
  $("#topicModal").removeClass("show");
  $("#sendSuccess").removeClass("show");
 });
 $(window).scroll(function () {
  const scroll = $(window).scrollTop();
  if (scroll >= 10) {
    $(".header-bottom").addClass("show-a");
    $(".header-bottom-mobile").addClass("show-a");
  } else {
    $(".header-bottom").removeClass("show-a");
    $(".header-bottom-mobile").removeClass("show-a");
  }
});
 document.getElementById("chooseFile").onchange = function () {
  document.getElementById("chooseFile").value = this.value.replace(
   "C:\\fakepath\\",
   ""
  );
 };

 $("#chooseFile").bind("change", function () {
  var filename = $("#chooseFile").val();
  if (/^\s*$/.test(filename)) {
   $(".file-upload").removeClass("active");
   $("#noFile").text("No file chosen...");
  } else {
   $(".file-upload").addClass("active");
   $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
  }
 });
});
