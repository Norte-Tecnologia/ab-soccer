import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { RodapeComponent } from '../shared/components/rodape/rodape.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ab-soccer';
}
