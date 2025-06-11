import { Component } from '@angular/core';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { PageBreadcrumbHeaderComponent } from '../../../shared/components/page-breadcrumb-header/page-breadcrumb-header.component';
import { FormContatoComponent } from '../../../shared/components/form-contato/form-contato.component';
import { MapaLocalizacaoComponent } from '../../../shared/components/mapa-localizacao/mapa-localizacao.component';

@Component({
  selector: 'app-page-contato',
  imports: [LoadingComponent, PageBreadcrumbHeaderComponent, FormContatoComponent, MapaLocalizacaoComponent],
  templateUrl: './page-contato.component.html',
  styleUrl: './page-contato.component.scss'
})
export class PageContatoComponent {

}
