import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fit-card',
  templateUrl: './fit-card.component.html',
  styleUrls: ['./fit-card.component.css', './fit-card.responsive.component.css']
})
export class FitCardComponent implements OnInit {

  @Input()
  chave1:string=""
  @Input()
  chave2:string=""
  @Input()
  chave3:string=""
  @Input()
  chave4:string=""
  @Input()
  chave5:string=""
  @Input()
  chave6:string=""
  @Input()
  chave7:string=""
  @Input()
  chave8:string=""
  @Input()
  chave9:string=""
  @Input()
  chave10:string=""
  @Input()
  chave11:string=""
  @Input()
  chave12:string=""
  @Input()
  textCard:string=""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

  mudarCor(){
    let element = document.querySelector('.sub') as HTMLLIElement
    element.style.color = 'red'
  }

}
