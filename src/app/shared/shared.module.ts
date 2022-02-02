import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    NavbarComponent,
    ReproductorComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    SidebarComponent,
    NavbarComponent,
    ReproductorComponent,
  ]
})
export class SharedModule { }
