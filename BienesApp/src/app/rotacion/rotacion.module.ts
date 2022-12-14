import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//diseño
import { MaterialModule } from './material/material.module';

import { RotacionRoutingModule } from './rotacion-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoTarjetaComponent } from './components/listado-tarjeta/listado-tarjeta.component';
import { DetalleComponent } from './pages/detalle/detalle.component';


@NgModule({
  declarations: [
    MainComponent,
    ListadoComponent,
    ConfirmarComponent,
    AgregarComponent,
    BuscarComponent,
    ListadoTarjetaComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    RotacionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class RotacionModule { }
