import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'manager',
    loadChildren: () => import('./features/manager/manager.module').then(m => m.ManagerModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) },
  { path: 'request', loadChildren: () => import('./features/request/request.module').then(m => m.RequestModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


