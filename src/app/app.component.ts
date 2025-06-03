import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { RodapeComponent } from '../shared/components/rodape/rodape.component';
import { filter } from 'rxjs';
import { PluginsService } from './services/plugins.service';
import { LoadingComponent } from '../shared/components/loading/loading.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, RodapeComponent, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ab-soccer';

  constructor(
    private router: Router,
    private pluginsService: PluginsService
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Limpar componentes específicos antes de inicializar os novos
        this.pluginsService.cleanupPageSpecificComponents();

        // Pequeno delay para garantir que o DOM esteja atualizado
        setTimeout(() => {
          this.pluginsService.initializeCommonComponents();
        }, 200);
      });
  }

  ngOnInit(): void {
    // Reinicializar componentes globais após cada navegação
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Pequeno delay para garantir que o DOM esteja atualizado
        setTimeout(() => {
          this.pluginsService.initializeCommonComponents();
        }, 200);
      });
  }

  ngAfterViewInit(): void {
    // Inicializar todos os plugins após o carregamento inicial
    setTimeout(() => {
      this.pluginsService.initializeCommonComponents();
    }, 300);
  }

  private initializeAllPlugins(): void {
    // Inicializar todos os plugins necessários
    this.pluginsService.initializeCommonComponents();

    // Inicializar componentes específicos que podem estar em qualquer página
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

    // Inicializar Masonry para galerias
    this.pluginsService.initializeMasonry();

    // Forçar nova inicialização das imagens de background
    setTimeout(() => {
      this.pluginsService.initializeBackgroundImages();
    }, 500);
  }
}
