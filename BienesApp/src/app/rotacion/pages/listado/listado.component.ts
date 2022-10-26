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

  rotaciones: Rotacion[] = [];

  constructor( private rotacionService: RotacionService) { }

  ngOnInit(): void {
    this.rotacionService.getLrotacion()
    .subscribe(lRotaciones => this.rotaciones = lRotaciones);
  }


}
