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
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
 });
 var swiper3 = new Swiper(".slider-category-product", {
  slidesPerView: 8,
  spaceBetween: 0,
  slidesPerColumn: 3,
  navigation: {
    nextEl: ".swiper-button-next-3",
    prevEl: ".swiper-button-prev-3",
  },
  grid: {
    rows: 2,
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
  slidesPerView: 8,
  navigation: {
    nextEl: ".swiper-button-next-5",
    prevEl: ".swiper-button-prev-5",
  },
 });
 var swiper6 = new Swiper(".slider-category-text-2", {
  loop: true,
  spaceBetween: 5,
  slidesPerView: 8,
  navigation: {
    nextEl: ".swiper-button-next-6",
    prevEl: ".swiper-button-prev-6",
  },
 });
 var swiper7 = new Swiper(".slider-banner-three", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next-4",
    prevEl: ".swiper-button-prev-4",
  },
 });


 var swiper8 = new Swiper(".slider-project", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 4,
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
 });
 var swiper9 = new Swiper(".slider-customer", {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 6,
  navigation: {
    nextEl: ".swiper-button-next-6",
    prevEl: ".swiper-button-prev-6",
  },
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
  $("body").addClass("overflow-hidden");
 });
 // menu sp
 $(".menu-aside-page .sub-menu").hide();
 $(".menu-aside-page .icon").on("click", function () {
  $(this).parents(".has-child").siblings(".sub-menu").slideToggle();
 });

 $(".backdrop , .menu-aside-close, .menu-aside-page a").on(
  "click",
  function () {
   $(".menu-aside-page").removeClass("show");
   $("body").removeClass("overflow-hidden");
   $(".menu-aside-page .sub-menu").hide();
  }
 );
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
  } else {
    $(".header-bottom").removeClass("show-a");
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
