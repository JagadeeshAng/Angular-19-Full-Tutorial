import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerServiceService } from '../../Services/customer-service.service';
import { ProgressBarComponent } from "../../../components/reusable/progress-bar/progress-bar.component";
import { TabsComponent } from "../../../components/tabs/tabs.component";

@Component({
  selector: 'app-customer',
  // Progress component is removed due to implementation of Tabs Component
  imports: [FormsModule, TabsComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  customerTabs: string[]=  ["Google Pay", "PhonePay", "Watsapp", "Youtube", "Gmail"];
  // Make the for the object all the first letters should be small. 
  // This object we should bind to our Form.
  // Lets MAKE api Call in ts File then let us create the Service.
customerObj:any = {
    "customerId": 0,
    "customerName": "string",
    "customerCity": "string",
    "mobileNo": "stringstri",
    "email": "string"
};
customerArray: any [] = [];
// So to make API CALL the first thing we have too do is to integrate our HTTP Client Service.
// constructor(private http: HttpClient){
//   this.getCustomers();
// }
// This constructor is for Service Object.
constructor(private custServ: CustomerServiceService){

}
// This constructor is for Service Object.
// getCustomers() {
// this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers").subscribe((res:any )=>  {
// this.customerArray = res.data;
  
// })
// }
// This function is for the Service Object.
// Debugger gives the code understandability.
getCustomers() {
  debugger;
  // Return type of loadCustomers is Observable.Which is returning Observable data.
this.custServ.loadCustomers().subscribe((res:any)=> {
  debugger;
  this.customerArray = res.data;
})
}
// This function is for the Service Object.
// Whatever the variable we created in service that we can access into the compopnent also.\

onSaveCustomer(){
  debugger;
this.custServ.createNewCustomers(this.customerObj).subscribe((res:any)=> {
if(res.result) {
  alert("Customer Created SuccessFully");
  this.getCustomers();
}
else{
alert(res.message);
}
})
}
}
