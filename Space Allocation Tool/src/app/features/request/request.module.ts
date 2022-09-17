import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestPanelComponent } from './components/request-panel/request-panel.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    RequestPanelComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class RequestModule { }
