import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  // Now we have created instance of our form Group.
  // Inside this Formgroup we have to create the controller.
// Bind the Formcontrol to the Form Group in  HTML fILE.\
//  
userForm:FormGroup = new FormGroup({
fname: new FormControl("", [Validators.required]),
lname: new FormControl("",[Validators.required, Validators.minLength(5)]),
userName: new FormControl(""),
city: new FormControl(""),
state: new FormControl("Goa"),
zip: new FormControl(),
isAgreeTerms: new FormControl(false)
})
//  If we want to disable the partiular Form we will use like below.
constructor() {
  this.userForm.controls['state'].disable();
  // This is used to enable the form
  setTimeout(() => {
    this.userForm.controls['state'].enable();
   },5000);
   const isValid = this.userForm.valid;
}
//  we can check whole form Validity also.
//  To check if the form is valid or not.

onUserSave() {
  const formValue = this.userForm.value;
  debugger;
}
}
