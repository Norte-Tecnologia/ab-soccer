import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-que-fazemos',
  imports: [CommonModule],
  templateUrl: './o-que-fazemos.component.html',
  styleUrls: ['./o-que-fazemos.component.scss']
})
export class OQueFazemosComponent {
  progressValues = [
    { id: 'bar1', value: 100, text: 'Desenvolvimento físico' },
    { id: 'bar2', value: 100, text: 'Desenvolvimento técnico' },
    { id: 'bar3', value: 100, text: 'Acompanhamento completo' }
  ];
}
