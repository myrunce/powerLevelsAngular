import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-component',
  templateUrl: './power-component.component.html',
  styleUrls: ['./power-component.component.css']
})
export class PowerComponentComponent implements OnInit {
  power: number;
  powerNum: number[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 100; i++){
      this.powerNum.push(i);
    }
  }

  onSubmit(){
    console.log(this.power)
  }

}
