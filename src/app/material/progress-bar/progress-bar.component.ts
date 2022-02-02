import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() porcentaje:number=0;
  @Input() widthProgressBar:number=500;
  constructor() { 
    
  }

  ngOnInit(): void {

  }
  // porcentaje:number=20
  total:number=500
  v:number=0;
   skipping = false;
   mouseDown(event:any) {
    console.log("down")
    this.skipping = true;
  }
   mouseUp(event:any) {
     console.log("up")
    this.skipping = false;
  }
   moveMe(event:MouseEvent) {  
     let valor=0;
     let widthBar:HTMLCollection= document.getElementsByClassName('outer-progress-bar');
     this.v=event.offsetX;
     if(!widthBar) return;
     if(this.skipping){
       console.log("mueve",event.offsetX,this.total)
      valor =(event.offsetX / this.widthProgressBar)*100;
      this.porcentaje=valor;

     }
    //  this.porcentaje=event.offsetX
    // if (this.skipping && event.toElement.nodeName != 'SPAN') {
    //     // circle.style.display = 'block'
    //   // let number = parseInt(event.offsetX / widthBar.offsetWidth * 10000) / 100 + '%';
    //   // innerProgress.style.width = number;
    // }else{
    //    // circle.style.display = 'none'
    // }
  }
}
