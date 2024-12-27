import { DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../app/pipes/na.pipe';
import { ProgressBarComponent } from "../reusable/progress-bar/progress-bar.component";

@Component({
  selector: 'app-ng-for',
  imports: [NgFor, UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, NaPipe, ProgressBarComponent],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  currentDate: Date = new Date();
  courseName:string = "Angular-19";
  studentObj: any = {
  name:'Jagadeesh',
  City:'Hyderabad',
  Mobile:'23446788945'
  }
  // Create an Array of type String.
  cityList: string[] = ["VIJAYAWADA", "KAKINADA", "ELURU", "KURNOOL", "VISAKHAPATNAM"];
  //  Now lets create array of Object
  employeeArray: any[]=  [ 
 {empid:101, empName:'', city:'Delhi', contact:7734237856, attendance:40},
 {empid:102, empName:'Rohit Sharma', city:'Mumbai', contact:7734892322, attendance:35},
 {empid:103, empName:'Virat Kohli', city:'Bangalore', contact:8823456712 , attendance:45},
 {empid:104, empName:'MS Dhoni', city:'Chennai', contact:9933561245, attendance:55},
 {empid:105, empName: null, city:'Kolkata', contact:7799045612, attendance:100}
   ]
}
