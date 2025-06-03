import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { PluginsService } from '../../../app/services/plugins.service';

@Component({
  selector: 'app-carrossel',
  imports: [],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.scss'
})
export class CarrosselComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private pluginsService: PluginsService) {}

  ngOnInit(): void {
    // Componente inicializado
  }

  ngAfterViewInit(): void {
    // Garantir que o DOM esteja completamente renderizado
    setTimeout(() => {
      this.initializeCarousel();
    }, 300);
  }

  ngOnDestroy(): void {
    // Cleanup do carousel quando o componente for destruído
    this.destroyCarousel();
  }

  private initializeCarousel(): void {
    // Primeiro inicializar as imagens de background com delay maior
    setTimeout(() => {
      this.pluginsService.initializeBackgroundImages();
    }, 100);

    // Depois inicializar o carousel
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

      // Forçar re-render das imagens após carousel estar pronto
      setTimeout(() => {
        this.pluginsService.initializeBackgroundImages();
      }, 200);
    }, 200);
  }

  private destroyCarousel(): void {
    // Usar jQuery para destruir o carousel
    if (typeof $ !== 'undefined') {
      const carousel = $('.hs-slider');
      if (carousel.hasClass('owl-loaded')) {
        carousel.trigger('destroy.owl.carousel');
        carousel.removeClass('owl-loaded owl-drag');
      }
    }
  }

}
