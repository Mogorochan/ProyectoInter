import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Rotacion } from '../../interfaces/rotacion';
import { RotacionService } from '../../services/rotacion.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [
    `
    .spacer {
      flex: auto;
    }
  `,
  ]
})
export class DetalleComponent implements OnInit {

  mostraRegistro!: Rotacion;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private rotacionService: RotacionService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ _id }) => this.rotacionService.getRegistroPorID(_id))
      )
      .subscribe (registro => this.mostraRegistro = registro);
  }
  regresar(){
    this.router.navigate(['/rotacion/listado']);
  }

}
