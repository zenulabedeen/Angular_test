import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public msg:string='Good Morning';
  public price:number=590;
  public time:string=new Date().toLocaleTimeString();
  constructor() { }

  ngOnInit(): void {
  }
  public getDate(){
    return new Date().toDateString();
  }
  public getTime(){
    setInterval(()=>{
        this.time=new Date().toLocaleTimeString();
    },1000);
  }

}
