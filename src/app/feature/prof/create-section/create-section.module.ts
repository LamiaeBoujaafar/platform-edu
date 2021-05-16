import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CreateSectionRoutingModule } from './create-section-routing.module';
import { CreateSectionComponent } from './create-section.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";

@NgModule({
  declarations: [
    CreateSectionComponent
  ],
  imports: [
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    AngularEditorModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    CommonModule,
    NzSelectModule,
    CreateSectionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatOptionModule
  ]
})
export class CreateSectionModule { }
