/*
	Author       :	Themesbazer
	Template Name:	Casinno - Online Gambling & Casino HTML5 Landing Page Template
	Version      :	1.0
*/

(function ($) {
	"use strict";
		
		
		/*--------------------------------------------------------------
			START PRELOADER JS
		--------------------------------------------------------------*/
		$(window).on('load', function() { 
			$('.loader').fadeOut();
			$('.atf-preloader').delay(350).fadeOut('slow'); 
		}); 
		/*--------------------------------------------------------------
			END	PRELOADER JS
		--------------------------------------------------------------*/

		/*--------------------------------------------------------------
			Sticky Header
		--------------------------------------------------------------*/
		$(window).on("scroll", function() {
			var scroll = $(window).scrollTop();
			if (scroll < 400) {
				$(".atf-sticky-header").removeClass("atf-sticky-active");
			} else {
				$('.atf-sticky-header').addClass('atf-sticky-active');
			}
		});
		
		/*--------------------------------------------------------------
			Moblie Menu
		--------------------------------------------------------------*/
		const hamburger = document.querySelector(".hamburger");
		const navMenu = document.querySelector(".atf-nav");

		hamburger.addEventListener("click", () => {
		  hamburger.classList.toggle("active");
		  navMenu.classList.toggle("active");
		})

		document.querySelectorAll(".atf-nav-link").forEach(n => n.addEventListener("click", () => {
		  hamburger.classList.remove("active");
		  navMenu.classList.remove("active");
		}))
		
		/*--------------------------------------------------------------
			One Page Navigation
		--------------------------------------------------------------*/
        // Click To Go Top
        $('.atf-nav-link').on('click', function() {
            var thisAttr = $(this).attr('href');
            if ($(thisAttr).length) {
                var scrollPoint = $(thisAttr).offset().top - 50;
                $('body,html').animate({
                    scrollTop: scrollPoint
                }, 800);
            }
            return false;
        });
		
		/*--------------------------------------------------------------
			Scroll UP
		--------------------------------------------------------------*/
			
		$(window).on('scroll', function () { 
			var scrolled = $(window).scrollTop();
			if (scrolled > 400) $('.back-to-top').addClass('active');
			if (scrolled < 400) $('.back-to-top').removeClass('active');
		});
	
		$('.back-to-top').on('click', function () {
			$("html, body").animate({
				scrollTop: "0"
			}, 50);
		});
		
		/* --------------------------------------------------------
			LightCase jQuery Active
		--------------------------------------------------------- */
			$('a[data-rel^=lightcase]').lightcase({
				transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
				swipe: true,
				maxWidth: 1170,
				maxHeight: 600,
			});
			
		/* --------------------------------------------------------
				Porfolio isotope
		--------------------------------------------------------- */

			var portfolioIsotope = $('.atf-main-portfolio').isotope({
				itemSelector: '.atf-grid'
			});

			$('#atf-portfolio-flters li').on('click', function() {
				$("#atf-portfolio-flters li").removeClass('filter-active');
				$(this).addClass('filter-active');

				portfolioIsotope.isotope({
					filter: $(this).data('filter')
				});
			});
			
		/* --------------------------------------------------------
			End	Porfolio isotope
		--------------------------------------------------------- */

		/* --------------------------------------------------------
			Star Counter
		--------------------------------------------------------- */

		$('.counter-number').counterUp({
			delay: 15,
			time: 2000
		});
		
		/* --------------------------------------------------------
			Star Client
		--------------------------------------------------------- */
			$('#atf-testimonial-slider').owlCarousel({
				margin:3,
				autoplay:false,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					767:{
						items:1
					},
					768:{
						items:2
					},
					992:{
						items:3
					}
				}
			})
		/* --------------------------------------------------------
			END CLIENT
		--------------------------------------------------------- */
			
			
		/* --------------------------------------------------------
			Start Partner
		--------------------------------------------------------- */
			$('.atf-brand-active').owlCarousel({
				margin:10,
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				dots:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:5
					}
				}
			})
			
		/* --------------------------------------------------------
			End Partner
		--------------------------------------------------------- */
			
			
		/* --------------------------------------------------------
		Mailchamp jQuery Active
		--------------------------------------------------------- */
		$('#mc-form').ajaxChimp({
			url: 'https://themesfamily.us22.list-manage.com/subscribe/post?u=e056d9c3aeb53b20aff997467&amp;id=e307d7e1b8&amp;f_id=0012cee1f0'
			/* Replace Your AjaxChimp Subscription Link */
		}); 
	
		

		/* --------------------------------------------------------
		WOW Scroll Spy
		--------------------------------------------------------- */
			 var wow = new WOW({
				  //disabled for mobile
					mobile: false
				});

			wow.init();
			
		/* --------------------------------------------------------
		WOW Scroll Spy
		--------------------------------------------------------- */	
			
		
		
})(jQuery);