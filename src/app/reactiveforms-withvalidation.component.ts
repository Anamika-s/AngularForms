import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ageRangeValidator } from './AgeValidator';
@Component({
  selector: 'rvapp-form',
  templateUrl: './reactiveforms-withvalidation.component.html'
 
  
})
export class ReactiveFormWithValidationComponent implements OnInit {

    signUpForm : FormGroup;
    firstName : string="";
    lastName : string="";
    email : string="";
    password : string="";
  constructor(private fb : FormBuilder) { 
    this.signUpForm = fb.group(
      {
        firstName:new FormControl("", [Validators.required, Validators.minLength(10)]),
        lastName:new FormControl("", [Validators.required, Validators.minLength(10)]),
        email:new FormControl("", [Validators.required]),
        password:new FormControl(),
        age: new FormControl(0,[Validators.required, ageRangeValidator])
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
