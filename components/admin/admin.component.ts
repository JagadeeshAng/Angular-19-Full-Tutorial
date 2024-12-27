import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBarComponent } from "../reusable/progress-bar/progress-bar.component";
// Component Decorator
// Decorator tells extra information about the Class.
// So finally this decorator will help angular to know that below is the Class ie... export
@Component({
  // We use selector as a tag to render the component.
  selector: 'app-admin',
  imports: [RouterLink, ProgressBarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
// Component Decorator
// Decorator tells extra information about the Class
export class AdminComponent {}
