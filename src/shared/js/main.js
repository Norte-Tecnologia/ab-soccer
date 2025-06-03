'use strict';

(function ($) {
    // Função para aguardar o DOM estar completamente carregado
    function waitForDOM(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            // DOM já está carregado, aguarda um pouco mais para Angular renderizar
            setTimeout(callback, 100);
        }
    }

    // Função para aguardar elementos específicos do Angular
    function waitForAngularElements(callback) {
        let attempts = 0;
        const maxAttempts = 50; // 5 segundos máximo

        function checkElements() {
            attempts++;

            // Verifica se pelo menos alguns elementos principais existem
            const hasElements = $('.set-bg').length > 0 ||
                              $('#preloder').length > 0 ||
                              $('.canvas-open').length > 0 ||
                              $('.mobile-menu').length > 0;

            if (hasElements || attempts >= maxAttempts) {
                callback();
            } else {
                setTimeout(checkElements, 100);
            }
        }

        checkElements();
    }

    // Função para inicialização segura de elementos
    function safeInitialize(selector, callback) {
        const element = $(selector);
        if (element.length) {
            try {
                callback(element);
            } catch (error) {
                console.error(`Error initializing ${selector}:`, error);
            }
        } else {
            console.warn(`Element not found: ${selector}`);
        }
    }

    // Função para verificar se plugin está disponível
    function isPluginAvailable(pluginName) {
        if (typeof $ === 'undefined' || typeof $.fn[pluginName] === 'undefined') {
            console.warn(`${pluginName} plugin not loaded`);
            return false;
        }
        return true;
    }

    // Função principal de inicialização
    function initializeComponents() {
        /*------------------
            Preloader
        --------------------*/
        safeInitialize('#preloder', function() {
            $(window).on('load', function () {
                $(".loader").fadeOut();
                $("#preloder").delay(200).fadeOut("slow");
            });
        });

        /*------------------
            Background Set
        --------------------*/
        safeInitialize('.set-bg', function() {
            $('.set-bg').each(function () {
                var bg = $(this).data('setbg');
                if (bg) {
                    $(this).css('background-image', 'url(' + bg + ')');
                }
            });
        });

        //Canvas Menu
        safeInitialize('.canvas-open', function() {
            $(".canvas-open").on('click', function () {
                $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
                $(".offcanvas-menu-overlay").addClass("active");
            });
        });

        safeInitialize('.canvas-close, .offcanvas-menu-overlay', function() {
            $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
                $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
                $(".offcanvas-menu-overlay").removeClass("active");
            });
        });

        // Search model
        safeInitialize('.search-switch', function() {
            $('.search-switch').on('click', function () {
                $('.search-model').fadeIn(400);
            });
        });

        safeInitialize('.search-close-switch', function() {
            $('.search-close-switch').on('click', function () {
                $('.search-model').fadeOut(400, function () {
                    $('#search-input').val('');
                });
            });
        });

        //Masonry
        safeInitialize('.gallery', function() {
            if (typeof Masonry !== 'undefined' && typeof imagesLoaded !== 'undefined') {
                $('.gallery').imagesLoaded(function() {
                    $('.gallery').masonry({
                        itemSelector: '.gs-item',
                        columnWidth: '.grid-sizer',
                        gutter: 10
                    });
                });
            } else {
                // Fallback para versão jQuery do Masonry
                if (isPluginAvailable('masonry')) {
                    $('.gallery').masonry({
                        itemSelector: '.gs-item',
                        columnWidth: '.grid-sizer',
                        gutter: 10
                    });
                }
            }
        });

        /*------------------
            Navigation
        --------------------*/
        safeInitialize('.mobile-menu', function() {
            if (isPluginAvailable('slicknav')) {
                $(".mobile-menu").slicknav({
                    prependTo: '#mobile-menu-wrap',
                    allowParentLinks: true
                });
            }
        });

        /*------------------
            Carousel Slider
        --------------------*/
        safeInitialize(".hs-slider", function() {
            if (isPluginAvailable('owlCarousel')) {
                $(".hs-slider").owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: true,
                    items: 1,
                    dots: false,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    smartSpeed: 1200,
                    autoHeight: false,
                    autoplay: false
                });
            }
        });

        /*------------------
            Team Slider
        --------------------*/
        safeInitialize(".ts-slider", function() {
            if (isPluginAvailable('owlCarousel')) {
                $(".ts-slider").owlCarousel({
                    loop: true,
                    margin: 0,
                    items: 3,
                    dots: true,
                    dotsEach: 2,
                    smartSpeed: 1200,
                    autoHeight: false,
                    autoplay: true,
                    responsive: {
                        320: { items: 1 },
                        768: { items: 2 },
                        992: { items: 3 }
                    }
                });
            }
        });

        /*------------------
            Testimonial Slider
        --------------------*/
        safeInitialize(".ts_slider", function() {
            if (isPluginAvailable('owlCarousel')) {
                $(".ts_slider").owlCarousel({
                    loop: true,
                    margin: 0,
                    items: 1,
                    dots: false,
                    nav: true,
                    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    smartSpeed: 1200,
                    autoHeight: false,
                    autoplay: true
                });
            }
        });

        /*------------------
            Image Popup
        --------------------*/
        safeInitialize('.image-popup', function() {
            if (isPluginAvailable('magnificPopup')) {
                $('.image-popup').magnificPopup({
                    type: 'image'
                });
            }
        });

        /*------------------
            Video Popup
        --------------------*/
        safeInitialize('.video-popup', function() {
            if (isPluginAvailable('magnificPopup')) {
                $('.video-popup').magnificPopup({
                    type: 'iframe'
                });
            }
        });

        // Video Controls
        safeInitialize('#video', function() {
            const video = document.getElementById('video');
            const playButton = document.getElementById('playButton');
            const pauseButton = document.getElementById('pauseButton');

            if (video && playButton && pauseButton) {
                playButton.addEventListener('click', function () {
                    video.play();
                    playButton.style.display = 'none';
                    pauseButton.style.display = 'flex';
                });

                pauseButton.addEventListener('click', function () {
                    video.pause();
                    playButton.style.display = 'flex';
                    pauseButton.style.display = 'none';
                });

                video.addEventListener('ended', function () {
                    playButton.style.display = 'flex';
                    pauseButton.style.display = 'none';
                });
            }
        });

        /*------------------
            Barfiller
        --------------------*/
        ['#bar1', '#bar2', '#bar3'].forEach(function(selector) {
            safeInitialize(selector, function() {
                if (isPluginAvailable('barfiller')) {
                    $(selector).barfiller({
                        barColor: '#ffffff',
                        duration: 2000
                    });
                }
            });
        });

        safeInitialize('.table-controls ul li', function() {
            $('.table-controls ul li').on('click', function () {
                var tsfilter = $(this).data('tsfilter');
                $('.table-controls ul li').removeClass('active');
                $(this).addClass('active');

                if (tsfilter == 'all') {
                    $('.class-timetable').removeClass('filtering');
                    $('.ts-meta').removeClass('show');
                } else {
                    $('.class-timetable').addClass('filtering');
                }
                $('.ts-meta').each(function () {
                    $(this).removeClass('show');
                    if ($(this).data('tsmeta') == tsfilter) {
                        $(this).addClass('show');
                    }
                });
            });
        });
    }

    waitForDOM(function() {
        waitForAngularElements(function() {
            initializeComponents();
        });
    });

    window.reinitializeGymComponents = function() {
        initializeComponents();
    };

})(jQuery);
