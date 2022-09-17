import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerPanelComponent } from './components/manager-panel/manager-panel.component';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  {
    path: '',
    component: ManagerPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
