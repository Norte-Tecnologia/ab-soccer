import { AfterViewInit, Component } from '@angular/core';
import { PluginsService } from '../../../app/services/plugins.service';

@Component({
  selector: 'app-elevando-nivel',
  imports: [],
  templateUrl: './elevando-nivel.component.html',
  styleUrl: './elevando-nivel.component.scss'
})
export class ElevandoNivelComponent implements AfterViewInit {
  constructor(private pluginsService: PluginsService) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeImages();
    }, 300);
  }

  private initializeImages(): void {
    this.pluginsService.initializeBackgroundImages();
  }
}
