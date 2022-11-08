import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RotacionService } from '../../services/rotacion.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';
import { Rotacion } from '../../interfaces/rotacion';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      .spacer {
        flex: auto;
      }
      .container {
        margin-top: 15px;
      }
    `,
  ],
})
export class AgregarComponent implements OnInit {
  
  rotacionForm: FormGroup 
  title = 'Nuevo registro';
  id: string | null

  periodoList = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
 
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private rotacionService: RotacionService,
  ) {

    this.rotacionForm = this.fb.group({
      periodo: ['', Validators.required],
      ingreso: ['', Validators.required],
      retiro: ['', Validators.required],
      personalInicio: ['', Validators.required],
      personalFinal: ['', Validators.required],
      resultado: ['', Validators.required],
      meta: [4, Validators.required],
    });
    this.id =  this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

  }

  guardar() {
  const ROTACION : Rotacion = {
    periodo: this.rotacionForm.get('periodo')?.value,
    ingreso: this.rotacionForm.get('ingreso')?.value,
    retiro: this.rotacionForm.get('retiro')?.value,
    personalInicio: this.rotacionForm.get('personalInicio')?.value,
    personalFinal: this.rotacionForm.get('personalFinal')?.value,
    resultado: this.rotacionForm.get('resultado')?.value,
    meta: this.rotacionForm.get('meta')?.value,
  }
    if (this.id !== null) {
      //*editamos el regisro
      this.rotacionService.actualizarRegistro(this.id, ROTACION)
      .subscribe(data => {
        this.router.navigateByUrl('/rotacion/listado')
        this.mostrarSnakbar('Registro editado');
      })
    } else {
      //*agregamos el registro
       console.log(ROTACION);
      this.rotacionService.agregarRotacion(ROTACION)
      .subscribe(data => {
        this.router.navigateByUrl('/rotacion/listado')
        this.mostrarSnakbar('Registro creado');
    }
    )
    }

   

    
  }

 

  editar(){
    if (this.id !== null) {
      this.title = 'Editar el registro';
      this.rotacionService.getRegistroPorID(this.id)
      .subscribe(data => {
        this.rotacionForm.setValue({
          periodo: data.periodo,
          ingreso: data.ingreso,
          retiro: data.retiro,
          personalInicio: data.personalInicio,
          personalFinal: data.personalFinal,
          resultado: data.resultado,
          meta: data.meta
        })
      })
    }
  }

  deleteRegistro(_id: any) {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250',
      data: this.id
    });
    dialog
      .afterClosed()
      .pipe(
        switchMap((result) => result ? this.rotacionService.deleteRegistro(_id): 
        this.router.navigateByUrl('/rotacion/listado')
        )
      );
  }

  mostrarSnakbar(mensaje: string) {
    this.snackBar.open(mensaje, 'ok!', {
      duration: 2500,
    });
  }
}
