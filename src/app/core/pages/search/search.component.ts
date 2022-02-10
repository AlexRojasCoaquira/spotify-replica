import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  categoriesList:any[]=[];
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getCategories()
    .subscribe((resp:any)=>{
      this.categoriesList=resp.categories.items
      console.log("categorias lsita",resp.categories.items)
    })
  }

}
