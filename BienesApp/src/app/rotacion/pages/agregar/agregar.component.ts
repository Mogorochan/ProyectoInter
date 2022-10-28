import { Component, OnInit } from '@angular/core';
import { Rotacion } from '../../interfaces/rotacion';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  objRotacion: Rotacion = {
    periodo: "",
    ingreso: 0,
    retiro: 0,
    personalInicio: 0,
    personalFinal: 0,
    resultado: 0,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
