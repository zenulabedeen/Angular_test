import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter:number= 0;
  public counterId:number=0;
  public isCounterRunning:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  // start
  public start():void{
     if (!this.isCounterRunning){
       this.counterId= setInterval(()=>{
         this.counter= this.counter + 1;
       },100);
       this.isCounterRunning=true;
     }

  }

  // stop
  public stop():void{
    clearInterval(this.counterId);
    this.isCounterRunning=true;
  }

  // reset
  public reset():void{
    clearInterval(this.counterId);
    this.counter=0;
    this.isCounterRunning=true;
  }
}
