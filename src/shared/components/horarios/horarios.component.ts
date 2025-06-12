import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ScheduleItem {
  time: string;
  days: {
    [key: string]: {
      title: string;
      location: string;
      type: 'treinamento' | 'campeonato' | 'both';
    } | null;
  };
}

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent {
  currentFilter: string = 'all';
  daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

  scheduleData: ScheduleItem[] = [
    {
      time: '6:00h - 8:00h',
      days: {
        'Segunda': {
          title: 'TREINO + RODADA BRASILEIRÃO AB',
          location: 'Complexo esportivo JP',
          type: 'both'
        },
        'Terça': {
          title: 'TREINO + RODADA BRASILEIRÃO AB',
          location: 'Complexo esportivo JP',
          type: 'both'
        },
        'Quarta': {
          title: 'RODADA DUPLA BRASILEIRÃO AB',
          location: 'Complexo esportivo JP',
          type: 'campeonato'
        },
        'Quinta': {
          title: 'TREINO + RODADA BRASILEIRÃO AB',
          location: 'Complexo esportivo JP',
          type: 'both'
        },
        'Sexta': {
          title: 'TREINO + RODADA BRASILEIRÃO AB',
          location: 'Complexo esportivo JP',
          type: 'both'
        },
        'Sábado': null,
        'Domingo': null
      }
    },
    {
      time: '12:30h - 14:00h',
      days: {
        'Segunda': {
          title: 'TREINO',
          location: 'Complexo esportivo JP',
          type: 'treinamento'
        },
        'Terça': {
          title: 'TREINO',
          location: 'Complexo esportivo JP',
          type: 'treinamento'
        },
        'Quarta': null,
        'Quinta': {
          title: 'TREINO',
          location: 'Complexo esportivo JP',
          type: 'treinamento'
        },
        'Sexta': {
          title: 'TREINO',
          location: 'Complexo esportivo JP',
          type: 'treinamento'
        },
        'Sábado': null,
        'Domingo': null
      }
    },
    {
      time: '19:00h - 20:00h',
      days: {
        'Segunda': null,
        'Terça': {
          title: 'TREINO',
          location: 'Complexo esportivo JP',
          type: 'treinamento'
        },
        'Quarta': {
          title: 'TREINO',
          location: 'Complexo esportivo JP',
          type: 'treinamento'
        },
        'Quinta': null,
        'Sexta': null,
        'Sábado': null,
        'Domingo': null
      }
    }
  ];

  setFilter(filter: string): void {
    this.currentFilter = filter;
  }

  shouldDisplayItem(type: string | undefined): boolean {
    if (this.currentFilter === 'all') return true;
    if (!type) return false;
    if (this.currentFilter === 'treinamento') return type === 'treinamento' || type === 'both';
    if (this.currentFilter === 'campeonato') return type === 'campeonato' || type === 'both';
    return true;
  }

  isDarkBg(index: number): boolean {
    return index % 2 === 0;
  }
}
