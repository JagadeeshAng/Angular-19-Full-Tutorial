import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  // This object we need to bind to our form. we are going to use Template Form.
  // Then we can bind the object to our text box in the user field.
loginObject:any = {
  userName:'',
  password:''
};
// We have created an Object which we need to pass to our API.wE WILL BIND IT INTO Our Html Page.
apiLoginObj:any = {
  "EmailId":"",
  "Password":""
};
// We are using Router Service here.
// Here we are injecting Router Service.
// It is samething like how we used to create the 
// dependecy injection by using Constructor like the
//  same way we have done. 
// This we have got from Angular-16
router = inject(Router);
http = inject(HttpClient);
onLogin() {
  debugger;
  // This is used for HardCode Login
  // If the condition is true  then from this TS file we have to navigate to other Component
  // HardCode Login means here only we are checking Username and Password.
  // What if we have to authenticate the credentials frm API.
//   if(this.loginObject.userName == "Jagadeesh" && this.loginObject.password == "887766"){
// this.router.navigateByUrl("admin");
//   }else {
//     alert("Invalid User Name and Password");
//   }
// This is used for HardCode Login
// ------------------------------------------
// This user we willl store in the Local Storage and session Storage whereever we need .
// So before navigation we willstore the loggedin Data.Because we ned to store loggedin data at some wwhere. \
// 
this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.apiLoginObj).subscribe((res:any)=> {
  debugger;
  localStorage.setItem("Angular-19 User",res.data.userId);
this.router.navigateByUrl("admin");
},error=> {
  debugger;
alert("Invalid Credentials");
})
}
}
