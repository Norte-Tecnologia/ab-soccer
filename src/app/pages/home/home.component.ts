import { Component } from '@angular/core';
import { CarrosselComponent } from '../../../shared/components/carrossel/carrossel.component';
import { LoadingComponent } from "../../../shared/components/loading/loading.component";
import { PorQueEscolherComponent } from "../../../shared/components/por-que-escolher/por-que-escolher.component";
import { AtividadesComponent } from "../../../shared/components/atividades/atividades.component";
import { PlanosComponent } from "../../../shared/components/planos/planos.component";
import { GaleriaComponent } from "../../../shared/components/galeria/galeria.component";
import { TimeComponent } from "../../../shared/components/time/time.component";
import { HorariosComponent } from "../../../shared/components/horarios/horarios.component";

@Component({
  selector: 'app-home',
  imports: [CarrosselComponent, LoadingComponent, PorQueEscolherComponent, AtividadesComponent, PlanosComponent, GaleriaComponent, TimeComponent, HorariosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
