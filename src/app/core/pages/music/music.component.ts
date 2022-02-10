import { Component, OnInit } from '@angular/core';
// import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  // newReleaseList:any[]=[]
  constructor(
    // private spotifyService:SpotifyService
    ) { }

  ngOnInit(): void {
    // this.spotifyService.getNewReleases()
    // .subscribe((resp:any)=>{
    //   console.log(resp.albums.items)
    //   this.newReleaseList=resp.albums.items;
    // })
  }

}
