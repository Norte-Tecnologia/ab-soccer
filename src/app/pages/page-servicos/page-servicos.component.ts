import { Component } from '@angular/core';
import { LoadingComponent } from "../../../shared/components/loading/loading.component";
import { PageBreadcrumbHeaderComponent } from '../../../shared/components/page-breadcrumb-header/page-breadcrumb-header.component';
import { ElevandoNivelComponent } from "../../../shared/components/elevando-nivel/elevando-nivel.component";
import { PlanosComponent } from "../../../shared/components/planos/planos.component";
import { PlayVideoComponent } from "../../../shared/components/play-video/play-video.component";


@Component({
  selector: 'app-page-servicos',
  imports: [LoadingComponent, PageBreadcrumbHeaderComponent, ElevandoNivelComponent, PlanosComponent, PlayVideoComponent],
  templateUrl: './page-servicos.component.html',
  styleUrl: './page-servicos.component.scss'
})
export class PageServicosComponent {

}
