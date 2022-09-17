import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestPanelComponent } from './components/request-panel/request-panel.component';

const routes: Routes = [{ path: '', component: RequestPanelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
