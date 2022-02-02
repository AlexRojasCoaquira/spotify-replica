import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';

const routes:Routes=[
{
  path:'',
  component:HomeComponent,
  children:[
    {
      path:'',
      component:MusicComponent
    }

  ]
}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class CoreRoutingModule { }
