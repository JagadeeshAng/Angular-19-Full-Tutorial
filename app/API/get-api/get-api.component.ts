import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
// Here we need to call our API Call Integration.
// step1: First we have to create the Constructor.
// step2:  In Constructor we hav to create HTTP Client Service.
// Step3: We will create a function getUsers.
userList:any [] = [];
productsList:any[] = [];
constructor(private http: HttpClient) {
  
}
// Here we are going to integrate User API.
// Whenever Data type is string either go with Double Quotes or Single Quotes.
// Till now we have done API Call Integration. 
// But this is not going to perform API Call.
// what ever the data we will get from this API , WE need to catch it also. So to catch it we have to write subscribe Function.
// If we hover on get function we can observe the return type of the GET Function is Observable.
// So, anything which is returning observable we can subscribe to it. 
// res: any , here we are writing any till we are not seen class and interface.
// Whatever the response the API is going to return , we will get it in the result.
// Lets create a variable(UserList) also. beacuse this API is going to return Array of Object.And that data also we need to hold somewhere also. 
// For that lets create a variable. 
// Now whatever the data we get that we need to store it into the userList Variable.
getUsers() {
this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any) => {
this.userList = result;
})
}
getProductsList() {
this.http.get("https://fake-store-api.mock.beeceptor.com/api/products").subscribe((prod:any)=> {
  this.productsList = prod;
})
}

}
