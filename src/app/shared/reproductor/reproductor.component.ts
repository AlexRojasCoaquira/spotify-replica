import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  //  music=new Audio('https://open.spotify.com/track/6EJiVf7U0p1BBfs0qqeb1f');
   music=new Audio('https://p.scdn.co/mp3-preview/3906aa5012624d4e35c2108207745eb48f3bdf0f?cid=774b29d4f13844c495f206cafdad9c86');
    isMusic:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  reproducir(){
    this.isMusic=true;
    this.music.play();
  }
  pause(){
    this.isMusic=false;
    this.music.pause();
  }
}
