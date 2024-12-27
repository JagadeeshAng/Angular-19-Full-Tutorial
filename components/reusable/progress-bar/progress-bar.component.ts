import { NgStyle } from '@angular/common';
import { Component,input,Input} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [NgStyle],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  // We can convert this normal property or variable into Input by simply adding @Input before the property.
   // Whatever the value we are setting here as zero we are passing it into the Pro
  @Input() progressValue:number = 0;


}
