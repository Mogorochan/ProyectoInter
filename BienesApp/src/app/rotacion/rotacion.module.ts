import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//diseño
import { MaterialModule } from './material/material.module';

import { RotacionRoutingModule } from './rotacion-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';


@NgModule({
  declarations: [
    MainComponent,
    ListadoComponent,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    RotacionRoutingModule,
    MaterialModule
  ]
})
export class RotacionModule { }
