import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statements',
  imports: [ FormsModule],
  templateUrl: './control-statements.component.html',
  styleUrl: './control-statements.component.css'
})
export class ControlStatementsComponent {
 div1Visible:boolean = false;
 isCheckBoxChecked:boolean = false;
 dayName:string = '';
 employeeArray: any[]=  [ 
  {empid:101, empName:'Shikhar Dhawan', city:'Delhi', contact:7734237856},
  {empid:102, empName:'Rohit Sharma', city:'Mumbai', contact:7734892322},
  {empid:103, empName:'Virat Kohli', city:'Bangalore', contact:8823456712},
  {empid:104, empName:'MS Dhoni', city:'Chennai', contact:9933561245},
  {empid:105, empName:'Ravindra Jadeja', city:'Kolkata', contact:7799045612}
    ];
 cityList: string[] = [
  "Vijayawada",
  "Visakhapatnam",
  "Eluru",
  "Guntur",
  "Vizianagaram",
  "Kurnool"
];

 hideShow1(isShow:boolean){
  this.div1Visible = isShow
 }
}
