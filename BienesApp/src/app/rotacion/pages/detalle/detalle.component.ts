import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Rotacion } from '../../interfaces/rotacion';
import { RotacionService } from '../../services/rotacion.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {

  mostraRegistro!: Rotacion;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private rotacionService: RotacionService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.rotacionService.getRegistroPorID(id))
      )
      .subscribe (registro => this.mostraRegistro = registro);
  }
  regresar(){
    this.router.navigate(['/rotacion/listado']);
  }

}
