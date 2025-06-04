import { Component } from '@angular/core';
import { TimeComponent } from "../../../shared/components/time/time.component";
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { PageBreadcrumbHeaderComponent } from '../../../shared/components/page-breadcrumb-header/page-breadcrumb-header.component';

@Component({
  selector: 'app-page-time',
  imports: [TimeComponent, LoadingComponent, PageBreadcrumbHeaderComponent],
  templateUrl: './page-time.component.html',
  styleUrl: './page-time.component.scss'
})
export class PageTimeComponent {

}
