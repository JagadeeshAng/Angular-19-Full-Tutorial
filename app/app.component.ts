import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from '../components/data-binding/data-binding.component';
import { NgIfComponent } from '../components/ng-if/ng-if.component';
import { NgForComponent } from '../components/ng-for/ng-for.component';
import { NgClassComponent } from '../components/ng-class/ng-class.component';
import { NgStyleComponent } from '../components/ng-style/ng-style.component';
import { ControlStatementsComponent } from '../components/control-statements/control-statements.component';
import { SignalComponent } from '../components/signal/signal.component';
import { LinkedSignalComponent } from '../components/linked-signal/linked-signal.component';
import { NgClass } from '@angular/common';
import { TemplateFormComponent } from '../from/template-form/template-form.component';
import { ReactiveFormComponent } from "../from/reactive-form/reactive-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular19-Tutorial';
}
