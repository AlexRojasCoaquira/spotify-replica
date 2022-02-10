import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { PlayList } from '../../interfaces/playlist.interface';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlist!:PlayList;
  music=new Audio('https://p.scdn.co/mp3-preview/3906aa5012624d4e35c2108207745eb48f3bdf0f?cid=774b29d4f13844c495f206cafdad9c86');
  isMusic:boolean=false;
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getPlayList()
    .subscribe((resp)=>{
      this.playlist=resp
      console.log(this.playlist)
    }
    )
  }
  reproducir(id:string){
    console.log("mi track",id)
    this.spotifyService.getTrack(id).subscribe(
      resp=>{
        console.log("respuesta",resp)
      }
    );
    // this.isMusic=true;
    // this.music.play();
  }
  pause(){
    this.isMusic=false;
    this.music.pause();
  }

}
