import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { PluginsService } from '../../../app/services/plugins.service';

@Component({
  selector: 'app-carrossel',
  imports: [],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.scss'
})
export class CarrosselComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private pluginsService: PluginsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeCarousel();
    }, 300);
  }

  ngOnDestroy(): void {
    this.destroyCarousel();
  }

  private initializeCarousel(): void {
    setTimeout(() => {
      this.pluginsService.initializeBackgroundImages();
    }, 100);

    setTimeout(() => {
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
        autoplay: false,
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
          1000: { items: 1 }
        }
      };

      this.pluginsService.initializeOwlCarousel('.hs-slider', carouselOptions);

      setTimeout(() => {
        this.pluginsService.initializeBackgroundImages();
      }, 200);
    }, 200);
  }

  private destroyCarousel(): void {
    if (typeof $ !== 'undefined') {
      const carousel = $('.hs-slider');
      if (carousel.hasClass('owl-loaded')) {
        carousel.trigger('destroy.owl.carousel');
        carousel.removeClass('owl-loaded owl-drag');
      }
    }
  }

}
