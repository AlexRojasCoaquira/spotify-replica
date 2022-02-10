import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  @Input() title:string='';
  newReleaseList:any[]=[]
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getNewReleases()
    .subscribe((resp:any)=>{
      console.log(resp.albums.items)
      this.newReleaseList=resp.albums.items;
    })
  }
}
