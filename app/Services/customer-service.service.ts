import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Whenever we create a service we will get the @Injectable over Here.
@Injectable({
  providedIn: 'root'
})

// In this service we have to craete our API Call function.
// For the API Call function we need firstly HTTP Client Object.
export class CustomerServiceService {
// In service we can create Variable also.
apiUrl: string = 'https://freeapi.miniprojectideas.com/api/CarRentalApp/'
  constructor(private http:HttpClient) {  

  }
  // In the service we wont be subscribe to it.
  // Now this Service Object we need to create in our Component Class.
  loadCustomers(){
    // return this.http.get("GetCustomers")
    // If we create a varible in service for Api use this 
    return this.http.get(this.apiUrl+"GetCustomers");
  }
// Now when we are calling this function we need object also.
  createNewCustomers(obj:any) {
    return this.http.post(this.apiUrl+"reateNewCustomer", obj);
  }
}
