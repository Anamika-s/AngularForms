import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AddComponent } from './add.component';
import { FormComponent } from './form/form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactiveform.component';
import { ReactiveFormWithValidationComponent } from './reactiveforms-withvalidation.component';

// 2nd step
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    FormComponent,
    ReactiveFormComponent,
    ReactiveFormWithValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {path:'addnumbers', component:AddComponent},
        {path:'dataentry', component:FormComponent},
        {path:'reactivedemo', component:ReactiveFormComponent}
        
        

      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
