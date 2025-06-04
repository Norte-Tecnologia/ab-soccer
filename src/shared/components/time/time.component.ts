import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { PluginsService } from '../../../app/services/plugins.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements AfterViewInit, OnDestroy {

  constructor(private pluginsService: PluginsService) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeTeamSlider();
    }, 300);
  }

  ngOnDestroy(): void {
    this.destroyTeamSlider();
  }

  private initializeTeamSlider(): void {
    setTimeout(() => {
      this.pluginsService.initializeBackgroundImages();
    }, 100);

    setTimeout(() => {
      const teamSliderOptions = {
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 3 }
        }
      };

      this.pluginsService.initializeOwlCarousel('.ts-slider', teamSliderOptions);

      setTimeout(() => {
        this.pluginsService.initializeBackgroundImages();
      }, 200);
    }, 200);
  }

  private destroyTeamSlider(): void {
    if (typeof $ !== 'undefined') {
      const carousel = $('.ts-slider');
      if (carousel.hasClass('owl-loaded')) {
        carousel.trigger('destroy.owl.carousel');
        carousel.removeClass('owl-loaded owl-drag');
      }
    }
  }
}
