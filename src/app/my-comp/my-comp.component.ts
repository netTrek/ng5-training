import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bm-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.scss']
})
export class MyCompComponent implements OnInit {

  counter = 0;


  constructor() { }

  increment() {
    this.counter ++;
  }

  ngOnInit() {
  }

}
