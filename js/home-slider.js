$(document).ready(function () {
    // var swiper;
    // function isTouchDeviceBelowIpadPro() {
    //     return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    // }
    // function initializeSwiper() {
    //     const swiperDirection = (isTouchDeviceBelowIpadPro(),{passive: true}, "horizontal");
    //     swiper = new Swiper(".home-how-it-works-slider-swiper", { enabled: !0, slidesPerView: 1, parallax: !1, spaceBetween: 50, effect: "fade", autoHeight: !0, fadeEffect: { crossFade: !0 }, speed: 600 });
    // }
    // function handleScroll(event) {
    //     var sliderTop = $(".section-home-how-it-works-slider .slider-position-top"),
    //         sliderBottom = $(".section-home-how-it-works-slider .slider-position-bottom");
    //     sliderScrollAmount = (sliderBottom.offset().top - sliderTop.offset().top) / 4;
    //     for (var scrollerArray = [], i = 0; i < 4; i++) scrollerArray.push(sliderTop.offset().top + i * sliderScrollAmount);
    //     $(this).scrollTop() < scrollerArray[1] ? swiper.slideTo(0) : $(this).scrollTop() > scrollerArray[1] && $(this).scrollTop() < scrollerArray[2] ? swiper.slideTo(1) : $(this).scrollTop() > scrollerArray[2] && swiper.slideTo(2);
    // }
    // $("#scrollButton, #scrollButton2").click(function () {
    //     var nextSection = $(this).closest("section").next(".section-confident");
    //     $("html, body").animate({ scrollTop: nextSection.offset().top - 60 }, 1e3);
    // }),
    //     $(".slider").on("init", function (event, slick) {
    //         story_animation();
    //     }),
    //     initializeSwiper(),
    //     document.addEventListener("scroll", handleScroll),
    //     window.addEventListener("resize", handleScroll);
    // var progressBarsContainer = $(".progress-bars"),
    //     totalSlides = swiper.slides.length;
    // function updateProgressBars() {
    //     var activeIndex = swiper.activeIndex + 1;
    //     progressBarsContainer.html("");
    //     for (var i = 0; i < totalSlides; i++) {
    //         var progressBar = $('<div class="progress-bar"></div>');
    //         i < activeIndex && progressBar.addClass("active-progress-bar"), progressBarsContainer.append(progressBar);
    //     }
    // }
    // updateProgressBars(),
    //     progressBarsContainer.on("click", ".progress-bar", function () {
    //         var index = $(this).index();
    //         swiper.slideTo(index);
    //     }),
    //     swiper.on("slideChange", function () {
    //         updateProgressBars();
    //     });
});
