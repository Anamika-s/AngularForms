import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'rapp-form',
  templateUrl: './reactiveform.component.html'
 
  
})
export class ReactiveFormComponent implements OnInit {

    signUpForm : FormGroup;
    firstName : string="";
    lastName : string="";
    email : string="";
    password : string="";
  constructor(private fb : FormBuilder) { 
    this.signUpForm = fb.group(
      {
        firstName:new FormControl(),
        lastName:new FormControl(),
        email:new FormControl(),
        password:new FormControl(),
      }
    );
  }

  PostData()
  {
    console.log("Submitted111");
    console.log(this.signUpForm.value);
    console.log(this.signUpForm.controls.firstName.value);

  }
  ngOnInit(): void {
  }

}
