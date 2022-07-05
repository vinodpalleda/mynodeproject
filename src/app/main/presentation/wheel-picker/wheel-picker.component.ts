import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel'

@Component({
  selector: 'app-wheel-picker',
  templateUrl: './wheel-picker.component.html',
  styleUrls: ['./wheel-picker.component.css']
})
export class WheelPickerComponent implements OnInit {
  
  @ViewChild(NgxWheelComponent, { static: false }) wheel: any;

  spinDuration:any;
  seed = [...Array(12).keys()]
  idToLandOn: any;
  items: any[];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL
  textAlignment: TextAlignment = TextAlignment.OUTER
  

  constructor() {
    const colors = ['#FF0000', '#000000'];
    this.items = this.seed.map((value) => ({
      fillStyle: colors[value % 2],
      text: `Prize ${value}`,
      id: value,
      textFillStyle: 'white',
      textFontSize: '16'
    }))
  }
  ngOnInit(){
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    this.spinDuration=10;
  }
  reset() {
    this.wheel.reset()
  }
  before() {
    alert('Your wheel is about to spin')
  }

  async spin(prize: any) {
    this.idToLandOn = prize
    await new Promise(resolve => setTimeout(resolve, 0));
    this.wheel.spin()
  }

  after() {
    alert('You have win: '+this.idToLandOn)
  }
}
