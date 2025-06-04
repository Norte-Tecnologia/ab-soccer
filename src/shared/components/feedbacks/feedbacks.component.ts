import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { PluginsService } from '../../../app/services/plugins.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements AfterViewInit, OnDestroy {

  constructor(private pluginsService: PluginsService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeTestimonialSlider();
    }, 300);
  }

  ngOnDestroy(): void {
    this.destroyTestimonialSlider();
  }

  private initializeTestimonialSlider(): void {
    setTimeout(() => {
      const testimonialOptions = {
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
      };

      this.pluginsService.initializeOwlCarousel('.ts_slider', testimonialOptions);
    }, 200);
  }

  private destroyTestimonialSlider(): void {
    if (typeof $ !== 'undefined') {
      const carousel = $('.ts_slider');
      if (carousel.hasClass('owl-loaded')) {
        carousel.trigger('destroy.owl.carousel');
        carousel.removeClass('owl-loaded owl-drag');
      }
    }
  }
}
