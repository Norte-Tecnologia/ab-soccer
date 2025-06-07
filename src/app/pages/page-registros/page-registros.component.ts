import { Component } from '@angular/core';
import { GaleriaComponent } from "../../../shared/components/galeria/galeria.component";
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { PageBreadcrumbHeaderComponent } from '../../../shared/components/page-breadcrumb-header/page-breadcrumb-header.component';

@Component({
  selector: 'app-page-registros',
  imports: [GaleriaComponent, LoadingComponent, PageBreadcrumbHeaderComponent],
  templateUrl: './page-registros.component.html',
  styleUrl: './page-registros.component.scss'
})
export class PageRegistrosComponent {

}
