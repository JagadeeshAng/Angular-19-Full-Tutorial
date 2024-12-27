import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from "../../../components/tabs/tabs.component";
import { Car, IcarList } from '../../model/car';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, TabsComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit, AfterViewInit  {
  carList1:IcarList [] = [];
  carList: any[] = [];
  // This is the object we need to send to API.
  // This object we need to bind to our Form also.
  // To Bind that we need to import Forms Module in the imports Section.
  // carObj:any = {
  //     "carId": 0,
  //     "brand": "",
  //     "model": "",
  //     "year": "",
  //     "color": "",
  //     "dailyRate": "",
  //     "carImage": "",
  //     "regNo": ""
  // }
  // For the class and the interface we will uuse onject like thhis. 
  // If we are making instance of our class we are using new method to initlialize that class. 
  // carObj:Car = new Car(); This is the way to initialize the property.
  // Once you save after you need to initliaze your object
      carObj:Car = new Car();
    // For the class and the interface we will uuse onject like thhis. 
http = inject(HttpClient);
firstName: string;
currentTab:string = 'carList';
// In the constructor we are intializing the Variable.
constructor() {
  this.firstName = '';
}

ngOnInit(): void {
  this.getCars();
}
onTabChange(tabName:string){
  debugger;

this.currentTab = tabName;
}
ngAfterViewInit(): void {
  console.log('ngAfterViewInit from Post-API', performance.now() );
}
getCars(){
  this.http.get('https://cors-anywhere.herokuapp.com/https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars').subscribe((res:any)=> {
    // Here we are getting data array from the car List so we are fetching like this.carList = res.data;
  this.carList = res.data;
  })
}

//  Here GET API Call needs the URL , but POST API CALL needs URL and the body.Nothing but object.
// Post API needs two parameters , URL and the Object.Object is nothing but we have the object already that we need to pass.  
onSaveCar(){
  debugger;
  // For this API we will get the result, Message, data .
  // SDo, Result is the propwerty whicvh we need to watch out for. 
  // If result propertyb is true we will get to know that the AIP Call was Success.
  // If result property is false we will get the error message.
  // So, for that we need to add a small check code here.

this.http.post("https://cors-anywhere.herokuapp.com/https://freeapi.miniprojectideas.com/api/carRentalApp/createNewCar",this.carObj).subscribe((res2:any)=> {
 debugger;
  if(res2.result) {
    alert("Car Created Successfully");
    // This is added because we dont need to load the cars data after we post the API Request.
    this.getCars();
    // Here we are re-initlializing our Object.
    // Constructor will again gets executed because of this.
    // Your Car object will have the ddefault values.
    // Whenever we go for any always use class or interface.
    this.carObj = new Car();
  }
  else {
    alert(res2.message);
  }
})
}
onEdit(data:any) {
this.carObj = data;
}
updateCar() {
  this.http.put("https://cors-anywhere.herokuapp.com/https://freeapi.miniprojectideas.com/api/carRentalApp/UpdateCar", this.carObj).subscribe((res: any)=> {
if(res.result){
  alert("Car Updated Successfully");
}else {
  alert(res.message);
}
  })
}
onDelete(id:number) {
  const isDelete = confirm("Are You Sure Want To Delete");
  if(isDelete == true) {
    this.http.delete("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeletCustomerById?id" + id).subscribe((resdel:any)=> {
      if(resdel.result) {
        alert("Car Id Deleted SuccessFully");
      }
      else {
        alert(resdel.message);
      }
    })
  }
}
}
