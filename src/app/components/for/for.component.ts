import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  courses:string[];
  // students:object[];
  clr:string;
  sz:string;
  clsObj:object;
  cls:boolean;

  constructor() {
    this.courses=["Angula","Java","React","Node"];
    
    this.clr="green";
    this.sz="50";
    this.cls=true;
    this.clsObj={
      tdata:this.cls
    }
   }

  ngOnInit(): void {
  }

  students=[
    {first:"Aniket",last:"Zade",score:35}];


}
