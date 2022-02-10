import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsComponent } from './artists/artists.component';
import { HomeComponent } from './pages/home/home.component';
import { CardAlbumComponent } from './components/card-album/card-album.component';
import { CoreRoutingModule } from './core-routing.module';
// import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MusicComponent } from './pages/music/music.component';
import { CardSimpleComponent } from './components/card-simple/card-simple.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { SvgComponentComponent } from './components/svg-component/svg-component.component';
import { SearchComponent } from './pages/search/search.component';
import { CardCategoryComponent } from './components/card-category/card-category.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';



@NgModule({
  declarations: [
    ArtistsComponent,
    HomeComponent,
    CardAlbumComponent,
    MusicComponent,
    CardSimpleComponent,
    ContentCardComponent,
    SvgComponentComponent,
    SearchComponent,
    CardCategoryComponent,
    PlaylistComponent,
    DomseguroPipe
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    // HomeComponent
  ]
})
export class CoreModule { }
