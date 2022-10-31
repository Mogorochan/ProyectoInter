import { Component, Input, OnInit } from '@angular/core';
import { Rotacion } from '../../interfaces/rotacion';
import { RotacionService } from '../../services/rotacion.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent{

  formRotacion: FormGroup = this.fb.group({
      periodo: 0
  });
  
  rotaciones: Rotacion[] = [];

 

  constructor( private rotacionService: RotacionService,
                private fb: FormBuilder,
                private router: Router ) { }

  ngOnInit(): void {
    this.rotacionService.getLrotacion()
    .subscribe(lRotaciones => this.rotaciones = lRotaciones);
  }


}
