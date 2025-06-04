import { Component, Input } from '@angular/core';
import { BreadcrumbService } from '../../../app/services/breadcrumb.service';
import { Breadcrumb } from '../../models/Breadcrumb';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-breadcrumb-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './page-breadcrumb-header.component.html',
  styleUrl: './page-breadcrumb-header.component.scss'
})
export class PageBreadcrumbHeaderComponent {

  @Input() pageTitle: string = '';
  @Input() pageName: string = '';
  @Input() backgroundImage: string = 'assets/img/breadcrumb-bg.jpg';
  breadcrumbs: Breadcrumb[] = [];

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnChanges() {
    if (this.pageName) {
      this.breadcrumbs = this.breadcrumbService.getBreadcrumbs(this.pageName);
    }
  }

}
