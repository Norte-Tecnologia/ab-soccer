import { Component } from '@angular/core';
import { PorQueEscolherComponent } from "../../../shared/components/por-que-escolher/por-que-escolher.component";
import { OQueFazemosComponent } from "../../../shared/components/o-que-fazemos/o-que-fazemos.component";
import { TimeComponent } from "../../../shared/components/time/time.component";
import { FeedbacksComponent } from "../../../shared/components/feedbacks/feedbacks.component";
import { PageBreadcrumbHeaderComponent } from "../../../shared/components/page-breadcrumb-header/page-breadcrumb-header.component";

@Component({
  selector: 'app-page-sobre',
  imports: [PorQueEscolherComponent, OQueFazemosComponent, TimeComponent, FeedbacksComponent, PageBreadcrumbHeaderComponent],
  templateUrl: './page-sobre.component.html',
  styleUrl: './page-sobre.component.scss'
})
export class PageSobreComponent {

}
