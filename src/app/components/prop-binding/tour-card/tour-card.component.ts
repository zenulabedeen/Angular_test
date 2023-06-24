import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css']
})
export class TourCardComponent implements OnInit {
  public image_1:string='../../../../assets/img/gallery_zero.jpg';
  public image_2:string='../../../../assets/img/gallery_tten.jpg';
  public image_3:string='../../../../assets/img/gallery_eleven.jpg';
  public image_4:string='../../../../assets/img/gallery_twelve.jpg';
  constructor() { }

  ngOnInit(): void {
  }
  public tours:string[]= ['Shimla','Hyderabad' ,'Nagpur', 'Rishikesh'];

}
