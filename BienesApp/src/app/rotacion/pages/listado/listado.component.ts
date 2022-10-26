import { Component, Input, OnInit } from '@angular/core';
import { Rotacion } from '../../interfaces/rotacion';
import { RotacionService } from '../../services/rotacion.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  get rotacion(){
    return {...this.rotacionService.rotacion}
  }
  constructor( private rotacionService: RotacionService) { }

  ngOnInit(): void {}


}
