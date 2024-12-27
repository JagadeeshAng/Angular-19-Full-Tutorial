import { JsonPipe } from '@angular/common';
import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-resource-api',
  imports: [JsonPipe],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css',
})
export class ResourceApiComponent {
  // Here we will use Loader Function.
  // Syntax to create the resource.
  // Our Resource name is UserList.
  // we normally use normal Function.
  // What loader function needs is promise kind of data.
  // Loading function which will return a paromise kind of function.
  // Instead of Using HTTP, WE are using Fetch API Call which is a Javascript fucntion , Fetch API Is not a Angular one.
  // In Javscript we will make API Call by using Fetch.
  // So what ever the response we got we will convert that into JSON, and we are converting that data as  a promise Object.
  userList = resource({
    loader:() => {
      return fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=> res.json() as Promise<any[]>);
      // We will have equal function also.
      // Equal Function will compare the previous value and the next Value. what value we are having in the loader and what is the new value 
    },
  });
  // Syntax to create the resource
  reloadData(){
    this.userList.reload();
  }
}
