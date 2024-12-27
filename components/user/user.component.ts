import { Component } from '@angular/core';
// Component Decorator 
// Decorator tells extra information about the Class
// So finally this decorator will help angular to know that below is the Class ie... export 
@Component({
// We use selector as a tag to render the component.
  selector: 'app-user',
  imports: [],
   template: "<h1 class='text-danger'>User Component</h1>",
   styles: ['.text-danger { color: red} ']
})
// Component Decorator
// Decorator tells extra information about the Class 
export class UserComponent {

}
