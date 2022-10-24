import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guard/validar-token.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'rotacion',
    loadChildren: () => import('./rotacion/rotacion.module').then(m => m.RotacionModule),
    canActivate: [ ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  },
  {
    path: 'graficas',
    loadChildren: () => import('./graficas/graficas.module').then(m => m.GraficasModule)
  },
  {
    path: '**',
    redirectTo: 'auth'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
