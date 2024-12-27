import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {
  // we have crearted Two Signals
firstName = signal<string>("Thota Jagadeesh");
lastName= signal<string>("");
// This is the way to create the Linked Signal
fullName =  linkedSignal({
  source:this.firstName,
  computation:(newOptions, previous)=> {
    debugger;
  const fullName = newOptions + "" + this.lastName();
  return fullName;
  }
})

user = signal({id:1, name:"MS DHONI"});
email= linkedSignal({
  source: this.user,
  computation: user=>`${user.name  + user.id}@gmail.com`,
  equal:(a:any, b:any) => a.id !== b.id
})
changeName() {
  this.firstName.set("Virat Kohli");
}
changeId(){
  // debugger;
  this.user.set({id:2, name:"Sehwag"})
}
}
