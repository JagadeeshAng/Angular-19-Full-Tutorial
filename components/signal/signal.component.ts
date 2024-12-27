import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
   changeDetection:ChangeDetectionStrategy.OnPush
})
// Inn the above we have added changeDetection:ChangeDetectionStrategy.OnPush to disable the change detection.That means the changes waht we made will not refelct in the UI part.
export class SignalComponent {
// This is the way to create the Signal
firstName = signal('Thota');
lastName = signal<string>('Jagadeesh');
courseName:string = "This is Angular Course";
rollNo = signal<number>(0);
// In the constructor also we will acces the signal iike function 
constructor() {
  const value = this.firstName();
  setTimeout(()=> {
    debugger;
    this.courseName = "ReactsjS";
    this.firstName.set("Virat Kohli");
    debugger;
  }, 5000);
}
onIncrement() {
  this.rollNo.update(oldValue => oldValue+1);
}

}
