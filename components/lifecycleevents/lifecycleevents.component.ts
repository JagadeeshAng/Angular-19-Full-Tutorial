import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycleevents',
  imports: [],
  templateUrl: './lifecycleevents.component.html',
  styleUrl: './lifecycleevents.component.css'
})
// We are inheriting this component.
// Once we inherit we need to implement the function related to it.
// Before all the lifecycle events constructor will execute first.
export class LifecycleeventsComponent implements OnInit, AfterViewInit,AfterViewChecked,
AfterContentInit,AfterContentChecked,OnDestroy {
constructor() {
  console.log("Constructor is called");
}
// When the component got initialized then ngOnInit will trigger automatically.
// Normally we will write API Call Code function here. 
// ngOninit is the directive we mostly use .
// Ngoninit we will use for API Call function.
ngOnInit(): void {
  console.log("This is from ngOnInIt");
}
// In our component if we are using any PDF or image or something , when that external content starting to get initialized then ngAfterContentInit will trigger.
ngAfterContentInit(): void {
  console.log("This is from ngAfterContentInit");
}
// Once all the external content have properly loaded, then ngAfterContentChecked will trigger.
ngAfterContentChecked(): void {
  console.log("This is from ngAfterContentChecked");
}
// when all the view has been successfully intialized lets say component template or if we are using any other component by using the selector then it will trigger.
ngAfterViewInit(): void {
  // we mostly used this incase of any viewChild, getting reference of elements,third party library   .
  console.log("This is from ngAfterViewInit",performance.now());
}
// Once all the views are properly initialized and checked then ngAfterViewChecked will trigger.
ngAfterViewChecked(): void {
  console.log("This is from ngAfterViewChecked");
}
// When we redirect from one component to another component then this component(ngOnDestroy) will get destroyed.when we are navigating from one component to another component.ngOnDestroy will trigger.
ngOnDestroy(): void {
  alert("You are leaving the page");
  console.log("This is from ngOnDestroy");
}
}
