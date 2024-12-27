import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  //  Inside the class only we hav eto create the variable not outside the class or not after the class.
  firstName: string = 'Jagadeesh Thota';
  rollNo: number = 350;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceHolder: string = 'Enter Full Name';
  divClassName: string = 'bg-primary';
  selectedCity: string = '';
  // Since it is a class , so a class will have the constructor
  // We are using this constructor for the router Service as we are making routing from ts File.
  constructor(private router:Router) {
    // To access the variable we will use the this keyword
    console.log(this.firstName);
    console.log(this.currentDate);
    console.log(this.rollNo);
    console.log(this.isActive);
    this.showWelcomeMessage(); // It will run on the Page Load.
  }
  // This showWelcome Message we can call it in the constructor level also.
  showWelcomeMessage() {
    alert('Welcome to Angular 19 Tutorial');
  }
  onCityChange() {
    console.log('City Changed');
  }
  navigateToAdminPage() {
  this.router.navigateByUrl("/admin");
  }
}
