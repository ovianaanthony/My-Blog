import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataF} from '../../data/dataF'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string=""
  @Input()
  cardTitle:string=""
  @Input()
  cardDescription:string=""
  @Input()
  Id:string="0"
  private id:(string|null) = "0"

  constructor(private route:ActivatedRoute) { }
  ngOnInit(): void {                                /*todo esse malabarismo dentro do constructor para conseguir pegar e identificar o Id de cada notícia do portal, (pequena parte, simples assimilação)*/
    this.route.paramMap.subscribe( value=>
      this.id = value.get("id"))    /* o browser no json torna as letras minúsculas, por isso 'id' e não 'Id' */
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:(string|null)){
    const result = dataF.filter(article =>article.id.toString() == id)[0] /*id representado pelo arquivo dataF.ts*/

    this.cardTitle = result.title
    this.photoCover = result.foto

    this.cardDescription = dataF[result.id-1].description.replace(/\n/g, '<br>');   /*serviu para quebrar a linha, e meus parágrafos ficarem bem separados*/
  }
}

