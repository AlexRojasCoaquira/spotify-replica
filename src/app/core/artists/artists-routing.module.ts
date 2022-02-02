import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './artists.component';

const routes:Routes=[
  {
    // path:'',
    component:ArtistsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class ArtistsRoutingModule { }
