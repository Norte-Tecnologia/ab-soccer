import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PluginsService } from '../../../app/services/plugins.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private pluginsService: PluginsService) {}

  ngOnInit(): void {
    // Pequeno delay para garantir que o DOM esteja pronto
    setTimeout(() => {
      this.pluginsService.initializeCanvasMenu();
      this.pluginsService.initializeMobileMenu();
    }, 100);
  }

  ngOnDestroy(): void {
    // Cleanup quando o componente for destruído
    this.pluginsService.cleanup();
  }

}
