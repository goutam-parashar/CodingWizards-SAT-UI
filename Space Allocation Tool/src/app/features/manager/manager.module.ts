import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerPanelComponent } from './components/manager-panel/manager-panel.component';
import { ManagerRoutingModule } from './manager-routing.module';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {  MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ManagerService } from './manager.service';
@NgModule({
  declarations: [
    ManagerPanelComponent,
  ],
  imports: [
    CommonModule,
    
    ManagerRoutingModule,
    MatRadioModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
    
    
  ],
  providers: [
    ManagerService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}]
})
export class ManagerModule { }
