import { Injectable } from '@angular/core';

declare var $: any;
declare var Masonry: any;
declare var imagesLoaded: any;

@Injectable({
  providedIn: 'root'
})
export class PluginsService {

  private safeInitialize(selector: string, callback: (element: any) => void): void {
    const element = $(selector);
    if (element.length) {
      try {
        callback(element);
      } catch (error) {
        console.error(`Error initializing ${selector}:`, error);
      }
    }
  }

  private isPluginAvailable(pluginName: string): boolean {
    if (typeof $ === 'undefined' || typeof $.fn[pluginName] === 'undefined') {
      console.warn(`${pluginName} plugin not loaded`);
      return false;
    }
    return true;
  }

  initializeBackgroundImages(): void {
    const observer = new MutationObserver((mutations) => {
      this.processBackgroundImages();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    this.processBackgroundImages();
  }

  private processBackgroundImages(): void {
    const elements = document.querySelectorAll('.set-bg');

    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        const bg = element.dataset['setbg'];

        if (bg && !element.style.backgroundImage) {
          element.style.backgroundImage = `url(${bg})`;
          element.style.display = 'none';
          element.offsetHeight;
          element.style.display = '';
        }
      }
    });
  }

  initializeOwlCarousel(selector: string, options: any = {}): void {
    this.safeInitialize(selector, () => {
      if (this.isPluginAvailable('owlCarousel')) {
        const existingCarousel = $(selector);
        if (existingCarousel.hasClass('owl-loaded')) {
          existingCarousel.trigger('destroy.owl.carousel');
          existingCarousel.removeClass('owl-loaded owl-drag');
        }

        $(selector).owlCarousel(options);
      }
    });
  }

  initializeCanvasMenu(): void {
    $(".canvas-open").off('click.canvas');
    $(".canvas-close, .offcanvas-menu-overlay").off('click.canvas');

    this.safeInitialize('.canvas-open', () => {
      $(".canvas-open").on('click.canvas', function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
      });
    });

    this.safeInitialize('.canvas-close, .offcanvas-menu-overlay', () => {
      $(".canvas-close, .offcanvas-menu-overlay").on('click.canvas', function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
      });
    });
  }

  initializeSearchModal(): void {
    $('.search-switch').off('click.search');
    $('.search-close-switch').off('click.search');

    this.safeInitialize('.search-switch', () => {
      $('.search-switch').on('click.search', function () {
        $('.search-model').fadeIn(400);
      });
    });

    this.safeInitialize('.search-close-switch', () => {
      $('.search-close-switch').on('click.search', function () {
        $('.search-model').fadeOut(400, function () {
          $('#search-input').val('');
        });
      });
    });
  }

  initializeMasonry(): void {
    this.safeInitialize('.gallery', () => {
      if (typeof Masonry !== 'undefined' && typeof imagesLoaded !== 'undefined') {
        $('.gallery').imagesLoaded(function () {
          $('.gallery').masonry({
            itemSelector: '.gs-item',
            columnWidth: '.grid-sizer',
            gutter: 10
          });
        });
      } else if (this.isPluginAvailable('masonry')) {
        $('.gallery').masonry({
          itemSelector: '.gs-item',
          columnWidth: '.grid-sizer',
          gutter: 10
        });
      }
    });
  }

  initializeMobileMenu(): void {
    this.safeInitialize('.mobile-menu', () => {
      if (this.isPluginAvailable('slicknav')) {
        if ($('.mobile-menu').hasClass('slicknav_menu')) {
          $('.mobile-menu').slicknav('destroy');
        }

        $(".mobile-menu").slicknav({
          prependTo: '#mobile-menu-wrap',
          allowParentLinks: true
        });
      }
    });
  }

  initializeMagnificPopup(): void {
    this.safeInitialize('.image-popup', () => {
      if (this.isPluginAvailable('magnificPopup')) {
        $('.image-popup').magnificPopup({
          type: 'image'
        });
      }
    });

    this.safeInitialize('.video-popup', () => {
      if (this.isPluginAvailable('magnificPopup')) {
        $('.video-popup').magnificPopup({
          type: 'iframe'
        });
      }
    });
  }

  initializeVideoControls(): void {
    this.safeInitialize('#video', () => {
      const video = document.getElementById('video');
      const playButton = document.getElementById('playButton');
      const pauseButton = document.getElementById('pauseButton');

      if (video && playButton && pauseButton) {
        playButton.removeEventListener('click', this.playVideo);
        pauseButton.removeEventListener('click', this.pauseVideo);
        video.removeEventListener('ended', this.videoEnded);

        playButton.addEventListener('click', this.playVideo);
        pauseButton.addEventListener('click', this.pauseVideo);
        video.addEventListener('ended', this.videoEnded);
      }
    });
  }

  private playVideo = () => {
    const video = document.getElementById('video') as HTMLVideoElement;
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');

    if (video && playButton && pauseButton) {
      video.play();
      playButton.style.display = 'none';
      pauseButton.style.display = 'flex';
    }
  }

  private pauseVideo = () => {
    const video = document.getElementById('video') as HTMLVideoElement;
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');

    if (video && playButton && pauseButton) {
      video.pause();
      playButton.style.display = 'flex';
      pauseButton.style.display = 'none';
    }
  }

  private videoEnded = () => {
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');

    if (playButton && pauseButton) {
      playButton.style.display = 'flex';
      pauseButton.style.display = 'none';
    }
  }

  initializeBarfiller(): void {
    ['#bar1', '#bar2', '#bar3'].forEach((selector) => {
      this.safeInitialize(selector, () => {
        if (this.isPluginAvailable('barfiller')) {
          $(selector).barfiller({
            barColor: '#ffffff',
            duration: 2000
          });
        }
      });
    });
  }

  initializeTableControls(): void {
    $('.table-controls ul li').off('click.table');

    this.safeInitialize('.table-controls ul li', () => {
      $('.table-controls ul li').on('click.table', () => {
        const tsfilter = $(this).data('tsfilter');
        $('.table-controls ul li').removeClass('active');
        $(this).addClass('active');

        if (tsfilter == 'all') {
          $('.class-timetable').removeClass('filtering');
          $('.ts-meta').removeClass('show');
        } else {
          $('.class-timetable').addClass('filtering');
        }
        $('.ts-meta').each(() => {
          $(this).removeClass('show');
          if ($(this).data('tsmeta') == tsfilter) {
            $(this).addClass('show');
          }
        });
      });
    });
  }

  initializeCommonComponents(): void {
    if ($('.set-bg').length) this.initializeBackgroundImages();
    if ($('.canvas-open').length) this.initializeCanvasMenu();
    if ($('.search-switch').length) this.initializeSearchModal();
    if ($('.mobile-menu').length) this.initializeMobileMenu();
    if ($('.image-popup').length || $('.video-popup').length) this.initializeMagnificPopup();
    if ($('#video').length) this.initializeVideoControls();
    if ($('#bar1').length || $('#bar2').length || $('#bar3').length) this.initializeBarfiller();
    if ($('.table-controls ul li').length) this.initializeTableControls();

    if ($('.hs-slider').length) {
      const carouselOptions = {
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
      };
      this.initializeOwlCarousel('.hs-slider', carouselOptions);
    }

    if ($('.gallery').length) this.initializeMasonry();
  }

  cleanupPageSpecificComponents(): void {
    if ($('.hs-slider').length && $('.hs-slider').hasClass('owl-loaded')) {
      $('.hs-slider').trigger('destroy.owl.carousel');
      $('.hs-slider').removeClass('owl-loaded owl-drag');
    }

  }

  cleanup(): void {
    $(".canvas-open").off('click.canvas');
    $(".canvas-close, .offcanvas-menu-overlay").off('click.canvas');
    $('.search-switch').off('click.search');
    $('.search-close-switch').off('click.search');
    $('.table-controls ul li').off('click.table');

    $('.owl-carousel').each(() => {
      if ($(this).hasClass('owl-loaded')) {
        $(this).trigger('destroy.owl.carousel');
        $(this).removeClass('owl-loaded owl-drag');
      }
    });

    if ($('.mobile-menu').hasClass('slicknav_menu')) {
      $('.mobile-menu').slicknav('destroy');
    }
  }
}
