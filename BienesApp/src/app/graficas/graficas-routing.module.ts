import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonaComponent } from './pages/dona/dona.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: DonaComponent},
      {path: '**', redirectTo: ''},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
