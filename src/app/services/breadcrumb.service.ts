import { Injectable } from '@angular/core';
import { Breadcrumb } from '../../shared/models/Breadcrumb';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbsMap: { [key: string]: Breadcrumb[] } = {
    'home': [
      { label: 'Início', url: '/home', isActive: false }
    ],
    'sobre': [
      { label: 'Início', url: '/home', isActive: false },
      { label: 'Sobre', isActive: true }
    ],
    'servicos': [
      { label: 'Início', url: '/home', isActive: false },
      { label: 'Serviços', isActive: true }
    ],
    'time': [
      { label: 'Início', url: '/home', isActive: false },
      { label: 'Time', isActive: true }
    ],
    '404': [
      { label: 'Início', url: '/home', isActive: false },
      { label: '404', isActive: true }
    ],
    'registros': [
      { label: 'Início', url: '/home', isActive: false },
      { label: 'Registros', isActive: true },
    ],
    'contato': [
      { label: 'Início', url: '/home', isActive: false },
      { label: 'Contato', isActive: true }
    ]
  };

  getBreadcrumbs(pageName: string): Breadcrumb[] {
    return this.breadcrumbsMap[pageName] || [];
  }
}
