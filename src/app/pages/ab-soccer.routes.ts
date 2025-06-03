import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageSobreComponent } from './page-sobre/page-sobre.component';
import { PageServicosComponent } from './page-servicos/page-servicos.component';
import { PageTimeComponent } from './page-time/page-time.component';
import { PageRegistrosComponent } from './page-registros/page-registros.component';
import { PageContatoComponent } from './page-contato/page-contato.component';
import { NotFoundComponent } from '../../shared/components/not-found/not-found.component';


export const PORTAL: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'sobre',
    component: PageSobreComponent,
  },
  {
    path: 'servicos',
    component: PageServicosComponent,
  },
  {
    path: 'time',
    component: PageTimeComponent,
  },
  {
    path: 'registros',
    component: PageRegistrosComponent,
  },
  {
    path: 'contato',
    component: PageContatoComponent,
  },
  // {
  //   path: ':pageName',
  //   component: PageProdutoComponent
  // },
  // {
  //   path: 'termos-privacidade/:produtoId',
  //   component: TermosPrivacidadeComponent
  // },
  {
    path: '**',
    component: NotFoundComponent
  }
];
