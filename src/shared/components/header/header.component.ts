import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PluginsService } from '../../../app/services/plugins.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private pluginsService: PluginsService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.pluginsService.initializeCanvasMenu();
      this.pluginsService.initializeMobileMenu();
    }, 100);
  }

  ngOnDestroy(): void {
    this.pluginsService.cleanup();
  }

}
