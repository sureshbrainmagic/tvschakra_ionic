import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'todayallocatedtest',
    loadChildren: () => import('./test/todayallocatedtest/todayallocatedtest.module').then( m => m.TodayallocatedtestPageModule)
  },
  {
    path: 'inlfateddimension',
    loadChildren: () => import('./test/inlfateddimension/inlfateddimension.module').then( m => m.InlfateddimensionPageModule)
  },
  {
    path: 'footprint',
    loadChildren: () => import('./test/footprint/footprint.module').then( m => m.FootprintPageModule)
  },
  {
    path: 'plunger',
    loadChildren: () => import('./test/plunger/plunger.module').then( m => m.PlungerPageModule)
  },
  {
    path: 'punger',
    loadChildren: () => import('./test/punger/punger.module').then( m => m.PungerPageModule)
  },
  {
    path: 'testlist',
    loadChildren: () => import('./testlist/testlist.module').then( m => m.TestlistPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
