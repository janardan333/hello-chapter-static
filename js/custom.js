let selectedEmp = null;
jQuery(document).ready(function ($) {
    // Cookie code
    var jQueryScript = document.createElement('script');
    jQueryScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js');
    document.head.appendChild(jQueryScript);
    //console.log(jQueryScript)
    function custom_cookie() {
        if (Cookies.get('HelloChapterContactPath') === undefined) {
            Cookies.set('HelloChapterContactPath', window.location.href, { expires: 30, path: '' })
        }
    }
    setTimeout(custom_cookie, 1000);

    var mainurl = window.location.href;
    const urlAfterSlash = mainurl.split('/').pop();
    // console.log("urlAfterSlash", urlAfterSlash);
    function extractAndSaveUrlAfterSlash(urlAfterSlash) {
        if (urlAfterSlash) {
            Cookies.remove('ExtractedUrlAfterSlash')
        }
        if (!Cookies.get('ExtractedUrlAfterSlash')) {
            Cookies.set('ExtractedUrlAfterSlash', urlAfterSlash, { expires: 30, path: '/' });
            return urlAfterSlash;
        }
    }
    extractAndSaveUrlAfterSlash(urlAfterSlash);
    // Header sticky
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 15) {
        jQuery("body").addClass("header-sticky");
    } else {
        jQuery("body").removeClass("header-sticky");
    }
    jQuery(window).scroll(function () {
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 15) {
            jQuery("body").addClass("header-sticky");
        } else {
            jQuery("body").removeClass("header-sticky");
        }
    });
    count_box = $('.count-box');
    if (count_box.length) {
        var intTotalHeight = count_box.offset().top;
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() >= intTotalHeight) {
            $('.count-number').each(function () {
                var $this = $(this), countTo = $this.attr('data-count');
                $({ countNum: $this.text() }).animate({ countNum: countTo },
                    {
                        duration: 1500, easing: 'linear', step: function () { $this.text(Math.floor(this.countNum)); },
                        complete: function () { $this.text(this.countNum); }
                    });
            });
        }
    });
    // Counter number js end
    // About team click js
    $(".desktop-team-wrapper .team-image").click(function () {
        var current_item = $(this).attr("data-point-id");
        if ($(".team-clickable-content")[current_item].classList.contains('d-block')) {
            // just remove 'd-block' and add 'd-none' to all elements and return here
            $(".team-clickable-content").removeClass('d-block');
            $(".team-clickable-content").addClass('d-none');
            $(".col-team").removeClass("active-member");
            return false;
        }
        // check if div has class 'd-block'
        $(".team-clickable-content").removeClass('d-block');
        $(".team-clickable-content").addClass('d-none');
        $(".team-clickable-content")[current_item].classList.remove('d-none');
        $(".team-clickable-content")[current_item].classList.add('d-block');
        $(".col-team").removeClass("active-member");
        $(this).parent(".col-team").addClass("active-member");
    });
    // About team click js ends
// for header open close for mobile device
    $(".menu-btn-toggle").click(function () {
        $("body").toggleClass("header-open");
    });
    $(".accordion .card .card-content").css(
        "display",
        "none"
    );
    $(".accordion .card-title button").click(function () {
        $(".active-btn")
            .not(this)
            .removeClass("active-btn")
            .parent()
            .next()
            .slideUp(300);
        $(this).toggleClass("active-btn").parent().next().slideToggle(300);
    });
    // accordion js end
    $('.home-image-content-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 800,
        autoplaySpeed: 3000,
        dots: true,
        fade: true,
        cssEase: 'ease-in-out',
    });
    // get insppired section slider
    $('.get-inspired-section-slider').slick({
        infinite: true,
        slidesToShow: 3,
        variableWidth: true,
        arrows: true,
        centerMode:true
    });
    // get insppired section slider ends
    // Home slider end
    $('.home-new-projects-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 0,
        autoplaySpeed: 3000,
        fade: true,
        dots: true,
        nextArrow: $('.custom-arrow .slick-next'),
        appendDots: $('.custom-slick-dots'),
        cssEase: 'ease-in-out',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    adaptiveHeight: true
                }
            },
        ],
    });
    var activeClass = 'slick-active',
        ariaAttribute = 'aria-hidden';
    $('.home-new-projects-slider')
        .on('init', function () {
            $('.slick-dots li:first-of-type').addClass(activeClass).attr(ariaAttribute, false);
        })
        .on('afterChange', function (event, slick, currentSlide) {
            var $dots = $('.slick-dots');
            $('li', $dots).removeClass(activeClass).attr(ariaAttribute, true);
            $dots.each(function () {
                $('li', $(this)).eq(currentSlide).addClass(activeClass).attr(ariaAttribute, false);
            });
        });
    // home-new-projects-slider end
    $('.home-client-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 800,
        autoplaySpeed: 3000,
        dots: true,
        fade: true,
        // variableWidth:true,
        nextArrow: '.custom-next-arrow',
        cssEase: 'ease-in-out',
    });
    // home-client-slider end
    var sectionInView = false;
    calculate_slider_height();
    // home-how-it-works-slider end
    $('.after-before-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 1000,
        autoplaySpeed: 3000,
        dots: true,
        fade: true,
        cssEase: 'ease-in-out',
        draggable: false,
        swipeToSlide: false,
        touchMove: false,
        swipe: false,
    });
    // after-before-slider end
    $('.review-slider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        speed: 10000,
        autoplaySpeed: 0,
        dots: false,
        centerMode: true,
        variableWidth: false,
        centerPadding: "250px",
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerPadding: '150px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 1,
                }
            }
        ]
    });
    // Review slider end
    $('.new-projects-card-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 600,
        autoplaySpeed: 3000,
        autoplay: false,
        dots: true,
        fade: true,
        cssEase: 'ease-in-out',
    });
    // new projects pages card slider end
    setTimeout(() => {
        $('.announcement-bar').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 35000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: false,
            variableWidth: true,
            centerMode: false,
            cssEase: 'linear',
        });
    }, 800);
    // announcement-bar slider end
    setTimeout(() => {
        AOS.init({
            duration: 1200,
        });
    }, 300);
    // Aos Animate
    //NYC projects more cards
    $('.show-lesss-btn').hide();
    $(".expand-project-nyc-btn .show-all-btn").click(function (event) {
        $(this).hide();
        $('.expand-project-nyc-btn .show-lesss-btn').show();
        $(".expand-all-nyc-projects").slideDown();
        $('.new-projects-card-slider').slick('reinit');
    });
    $(".expand-project-nyc-btn .show-lesss-btn").click(function (event) {
        $(this).hide();
        $('.expand-project-nyc-btn .show-all-btn').show();
        $(".expand-all-nyc-projects").slideUp();
        $('.new-projects-card-slider').slick('reinit');
    });
    //Miami projects more cards
    $('.show-lesss-btn').hide();
    $(".miami-card-groups .expand-project-btn .show-all-btn").click(function (event) {
        $(this).hide();
        $('.miami-card-groups .show-lesss-btn').show();
        $(".miami-card-groups .expand-all-projects").slideDown();
        $('.new-projects-card-slider').slick('reinit');
    });
    $(".miami-card-groups .expand-project-btn .show-lesss-btn").click(function (event) {
        $(this).hide();
        $('.miami-card-groups .show-all-btn').show();
        $(".miami-card-groups .expand-all-projects").slideUp();
        $('.new-projects-card-slider').slick('reinit');
    });
    jQuery(".location-link-hover").hover(function () {
        jQuery(this).parents(".col-location").toggleClass("hover-link");
    });
    kitchen_plan_design_slider();
    // kitchen-plan-design-build-slider end
    recent_project_bt_chapter()
    // recent-project-bt-chapter-slider function call
    in_the_news_slider_scetion()

    in_the_news_slider_scetion_wrapper_for_tablet_mobile()
});
/*Ready function end*/
// Js for global after before
$('body').on('input change', '.range-slider', function (e) {
    const sliderPos = e.target.value;
    setTimeout(() => {
        // Update the width of the foreground image
        e.target.parentElement.parentElement.querySelector(".foreground-img").style['width'] = `${sliderPos}%`;
        // Update the position of the slider button
        e.target.parentElement.parentElement.querySelector(".slider-button").style['left'] = `calc(${sliderPos}% - 28px)`;
        // $(this).parents('.two-joint-images').children('.slider-button').css('left', `calc(${sliderPos}% - 28px)`)
    }, 0);
});
$(".after-before-btn-wrap .before-btn").click(function (e) {
    // const sliderPos = e.target.value;
    setTimeout(() => {
        // Update the width of the foreground image
        const sliderPos = e.target.parentElement.parentElement.querySelector(".range-slider").value = "100";
        $(this).parents('.two-joint-images').find(".foreground-img").css('width', '100%');
        // Update the position of the slider button
        $(this).parents('.two-joint-images').find('.slider-button').css('left', `calc(100% - 40px)`);
    }, 10);
});
$(".two-joint-images .after-before-btn-wrap .after-btn").click(function (e) {
    setTimeout(() => {
        const sliderPos = e.target.parentElement.parentElement.querySelector(".range-slider").value = "0";
        $(this).parents('.two-joint-images').find(".foreground-img").css('width', '0%');
        $(this).parents('.two-joint-images').find('.slider-button').css('left', `calc(0px)`);
    }, 10);
});
// After Before Js end
window.addEventListener('resize', function (event) {
    calculate_slider_height();
}, true);
function calculate_slider_height() {
    var divHeight = $('.home-how-it-works-slider-swiper .slider-item').height();
    // detect screen size here and adjust div height accordingly
    var viewportWidth = window.innerWidth;
    const magicScrollNumber = 170;
    var divTotalHeight = divHeight * (viewportWidth / magicScrollNumber);
    var setHeight = $('.empty-height-div');
    setHeight.height(divTotalHeight);
}
// Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, delay);
    };
}
// Attach a debounced event listener to the window resize event
window.addEventListener('resize', debounce(kitchen_plan_design_slider, 200));
function kitchen_plan_design_slider() {
    if ($('.kitchen-plan-design-build-slider').length) {
        $('.kitchen-plan-design-build-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            variableWidth: false,
            arrows: false,
            centerMode: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 1197,
                    settings: {
                        dots: true
                    }
                }
            ],
            beforeChange: function (event, slick, currentSlide, nextSlide) {
                if (nextSlide === slick.slideCount - 1) {
                    $('.slick-next').hide();
                } else {
                    $('.slick-next').show();
                }
                if (nextSlide === 0) {
                    $('.slick-prev').hide();
                } else {
                    $('.slick-prev').show();
                }
            }
        });
    }
}
// kitchen-plan-design-build-slider end
$(window).on('load', function () {
    AOS.refresh();
});
const submitNewsletterForm1 = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = document.getElementById("zcampaignOptinForm");
    const formData = new FormData(form);

    fetch("https://zymul-zgpm.maillist-manage.com/weboptin.zc", {
        method: "POST",
        body: formData
    })
        .then(data => {
            if (data.status === 200) {
                document.getElementById("Zc_SignupSuccess").style.display = "block";
                const firstNameInput = document.getElementById('EMBED_FORM_EMAIL_LABEL');
                firstNameInput.value = '';
                setTimeout(function () {
                    document.getElementById("Zc_SignupSuccess").style.display = "none";
                }, 6000);
            } else {
                console.error("Form submission failed:", data.result.message);
            }
        })
        .catch(error => {
            console.error("Error submitting form:", error);
        });
}
// Js for header submenu toggle

document.addEventListener('DOMContentLoaded', function () {
    var menuLocations = document.querySelectorAll('.menu-locations');
    var bodyScroll = document.querySelector('body');

    $(document).click(function (e) {
        if (!$(e.target).is('header *, footer .links-col *')) {
            $(".menu-locations").removeClass('active-submenu');
            bodyScroll.classList.remove('body-header-submenu-active');
        }
    });

    menuLocations.forEach(function (menuItem) {
        menuItem.addEventListener('click', function (e) {
            // Prevent the default action of the click
            e.preventDefault();

            // Toggle the 'active' class
            this.classList.toggle('active-submenu');
            setTimeout(function () {
                bodyScroll.classList.toggle('body-header-submenu-active');
            }, 600);

            // Close other submenus
            menuLocations.forEach(function (otherItem) {
                if (otherItem !== menuItem) {
                    otherItem.classList.remove('active-submenu');
                    setTimeout(function () {
                        //bodyScroll.classList.remove('body-header-submenu-active');
                    }, 600);
                }
            });
        });

        // Prevent submenu from closing when clicking inside it
        var subMenu = menuItem.querySelector('.header-full-submenu-wrap');
        if (subMenu) {
            subMenu.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        }
    });
});

// Js for footer submenu toggle
jQuery(document).ready(function ($) {
    $("footer .menu-locations").click(function () {
            $('header .menu-locations a[title="Locations"]').parent().toggleClass("active-submenu");
            $("body").toggleClass("header-open");
    });
})

// });

// For footer compass
jQuery(document).ready(function ($) {
    // event delegation is used here
    $("#footer").on("click", ".new-menu-locations", function (e) {
        var section = $("#scroll-to-location");
        if (section.length) {
            $("html, body").animate({
                scrollTop: section.offset().top - 100
            }, 800);
        } else {
            window.location.href = "/#scroll-to-location";  
        }
    });
});

jQuery(document).ready(function ($) {
    if (window.location.hash === "#scroll-to-location") {
        var section = $("#scroll-to-location");
        if (section.length) {
            $("html, body").animate({
                scrollTop: section.offset().top - 127
            },200);
// This is added  and 200 also up
            // if(window.innerWidth <= 767){
            setTimeout(function () {
                $("html, body").animate({
                    scrollTop: section.offset().top - 30  
                },200);
            },800); 
        // }
// This is added 
        }
    }
});
// for recent project by chapter - Interior Page design slider
window.addEventListener('resize', debounce(recent_project_bt_chapter, 200));
function recent_project_bt_chapter(){
if ($('.recent-project-by-chapter-cards').length) {
 $('.recent-project-by-chapter-cards').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            arrows: false,
            variableWidth: false,
            centerMode: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint:1024,
                    settings:{
                    variableWidth: true,
                    centerMode: true,
                    dots:true,
                    }
                },
                {
                    breakpoint: 1197,
                    settings: {
                        dots: true,
                    }
                }
            ],
            beforeChange: function (event, slick, currentSlide, nextSlide) {
                if (nextSlide === slick.slideCount - 1) {
                    $('.slick-next').hide();
                } else {
                    $('.slick-next').show();
                }
                if (nextSlide === 0) {
                    $('.slick-prev').hide();
                } else {
                    $('.slick-prev').show();
                }
            }
        });
}
}
// for recent project by chapter - Interior Page design slider ends

// In the news slider starts 
window.addEventListener('resize', debounce(in_the_news_slider_scetion, 200));
function in_the_news_slider_scetion(){
    if($('.in-the-news-slider-section').length){
        $(".in-the-news-slider-section").slick({
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: true,
            autoplaySpeed: 3000,
            variableWidth: false,
            dots:true,
        })
    }
}

// in-the-news-slider-section-wrapper-for-tablet-mobile
window.addEventListener('resize', debounce(in_the_news_slider_scetion_wrapper_for_tablet_mobile, 200));
function in_the_news_slider_scetion_wrapper_for_tablet_mobile(){
    if($('.in-the-news-slider-section-wrapper-for-tablet-mobile').length){
            $(".in-the-news-slider-section-wrapper-for-tablet-mobile").slick({
                infinite: true,
                slidesToScroll: 1,
                slidesToShow: 2,
                arrows: true,
                autoplaySpeed: 3000,
                variableWidth: false,
                dots:false,
                responsive:[
                {
                    breakpoint:1024,
                    settings:{
                        slidesToShow: 2,
                        variableWidth:true,
                        arrows: true,
                        centerMode:false,
                    }
                }
            ]
        })
    }
}

// In the news slider ends