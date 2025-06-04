import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rodape',
  imports: [RouterLink],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.scss'
})
export class RodapeComponent {

  getTextCopy(): string {
    return `${new Date().getFullYear()} Todos os direitos reservados. By`
  }

}
