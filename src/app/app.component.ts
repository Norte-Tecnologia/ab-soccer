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
        this.pluginsService.cleanupPageSpecificComponents();

        setTimeout(() => {
          this.pluginsService.initializeCommonComponents();
        }, 200);
      });
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        setTimeout(() => {
          this.pluginsService.initializeCommonComponents();
        }, 200);
      });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.pluginsService.initializeCommonComponents();
    }, 300);
  }
}
