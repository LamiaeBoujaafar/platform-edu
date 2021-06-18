import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NavbarComponent} from "./navbar/navbar.component";



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent
  ],
  exports: [
    SidebarComponent,
    NavbarComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        NzMenuModule,
        NzIconModule
    ]
})
export class SharedModule { }
