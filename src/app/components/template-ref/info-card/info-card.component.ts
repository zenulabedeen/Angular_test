 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {
  public serverMessage:string='';
  constructor() { }

  ngOnInit(): void {
  }

  public send(elem:HTMLParagraphElement){
    this.serverMessage= elem.innerText;
  }
}
