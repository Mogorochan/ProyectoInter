import { Component, Input } from '@angular/core';
import { Rotacion } from '../../interfaces/rotacion';


@Component({
  selector: 'app-listado-tarjeta',
  templateUrl: './listado-tarjeta.component.html',
  styles: [`
    mat-card{
      margin-top: 15px
    }
  `]
})
export class ListadoTarjetaComponent{

  @Input() listaRotacion!: Rotacion;
}
