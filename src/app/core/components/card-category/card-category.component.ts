import { Component, Input, OnInit } from '@angular/core';
interface Category{
  href:string;
  id:string;
  name:string;
  icons:Icono[]

}
interface Icono{
  url:string;
  width:number;
  height:number;
}
@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.css']
})

export class CardCategoryComponent implements OnInit {
  @Input() category!:Category 
  colorList:string[]=['#27856A','#477D95','#8D67AB','#E8115B','#F59B23','#121212','#777777','#D7F27D','#503750','#B49BC8','#A56752','#F037A5']
  constructor() { }

  ngOnInit(): void {
  }
  randomColor(){
    return this.colorList[Math.floor(Math.random()*this.colorList.length)]
  }
}
