import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
   music=new Audio('../../../assets/sources/music.mp3');
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
