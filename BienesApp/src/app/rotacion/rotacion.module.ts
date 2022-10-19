import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RotacionRoutingModule } from './rotacion-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ListadoComponent } from './pages/listado/listado.component';


@NgModule({
  declarations: [
    MainComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    RotacionRoutingModule
  ]
})
export class RotacionModule { }
