import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input()
  rting:Number = 0;


  @Output()
  ratingClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  rating(){
    alert(' Cick Vào Rating');
    this.ratingClick.emit(`Rating:${this.rting}`)
  }
}
