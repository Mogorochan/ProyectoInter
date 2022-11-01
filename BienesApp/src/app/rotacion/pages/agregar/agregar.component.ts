import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Rotacion } from '../../interfaces/rotacion';
import { RotacionService } from '../../services/rotacion.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    .spacer {
      flex: auto;
    }
    .container{
      margin-top: 15px
    }
  `,
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
    meta: 0
  }

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar,
              public dialog: MatDialog,
              private rotacionService: RotacionService) { }

  ngOnInit(): void {

    if (!this.router.url.includes('editar')) {
      return
    } 
    this.activatedRoute.params
    .pipe(
      switchMap(({ id }) => this.rotacionService.getRegistroPorID(id))
    )
    .subscribe(objRotacion => this.objRotacion = objRotacion);
  }

  guardar(){
    if (this.objRotacion.periodo?.trim().length === 0) {
      return
    }
    if (this.objRotacion.id) {
      //Actualizar
      this.rotacionService.actualizarRegistro(this.objRotacion)
      .subscribe(objRotacion => this.mostrarSnakbar('Registro actualizado'));
    } else {
      this.rotacionService.agregarRotacion(this.objRotacion)
      .subscribe(objRotacion =>{
        this.router.navigate(['rotacion/editar', objRotacion.id]);
        this.mostrarSnakbar('Registro creado');
      })
    }
  }

  deleteRegistro(){
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250',
      data: this.objRotacion
    });
    dialog.afterClosed()
    .pipe(
      switchMap((result) => result ? this.rotacionService.deleteRegistro(this.objRotacion.id!):
      this.router.navigate([`rotacion/editar/$[this.objRotacion.id]`])))
  }

  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open(mensaje, 'ok!', {
      duration: 2500
    });
  }

}
