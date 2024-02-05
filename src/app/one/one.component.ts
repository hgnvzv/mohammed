import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {

 log(x:any) {console.log(x) ;}

 contactMathod = [
   {id:1,name:'email'},
   {id:2,name:'pass'},
 ];
}

