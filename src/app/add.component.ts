import {Component} from '@angular/core';

@Component ({
  selector:'add-app',
  templateUrl:'./add-component.html'
})
export class AddComponent
 {
   n1: number;
   n2:number;
   result : number;
  Add(refForm :any)
  {
    console.log("Form is submitted");
  // console.log(refForm);
  // console.log(refForm.controls);
  // console.log(refForm.controls.txtNo1.value);
  this.n1 = refForm.controls.txtNo1.value;
  this.n2 = refForm.controls.txtNo2.value;
  this.result = this.n1+this.n2;
   
  
  }
 } 
