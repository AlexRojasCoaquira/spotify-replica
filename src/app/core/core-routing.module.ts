import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';
import { SearchComponent } from './pages/search/search.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

const routes:Routes=[
{
  path:'',
  component:HomeComponent,
  children:[
    {
      path:'',
      component:MusicComponent
    },
    {
      path:'search',
      component:SearchComponent
    },
    {
      path:'playlist/:id',
      component:PlaylistComponent
    },


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
