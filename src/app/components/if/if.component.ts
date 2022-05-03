import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {
  a:number;
  b:number;
  c:string;
  constructor() {
    this.a=12;
    this.b=13;
    this.c='Love';
   }
   MyLove(){
     return true;
   }

  ngOnInit(): void {
  }

}
