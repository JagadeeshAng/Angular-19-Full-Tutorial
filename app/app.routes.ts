import { Routes } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component';
import { DataBindingComponent } from '../components/data-binding/data-binding.component';
import { NgClassComponent } from '../components/ng-class/ng-class.component';
import { ControlStatementsComponent } from '../components/control-statements/control-statements.component';
import { TemplateFormComponent } from '../from/template-form/template-form.component';
import { ReactiveFormComponent } from '../from/reactive-form/reactive-form.component';
import { GetApiComponent } from './API/get-api/get-api.component';
import { PostApiComponent } from './API/post-api/post-api.component';
import { ResourceApiComponent } from './API/resource-api/resource-api.component';
import { CustomerComponent } from './API/customer/customer.component';
import { LifecycleeventsComponent } from '../components/lifecycleevents/lifecycleevents.component';
import { NgForComponent } from '../components/ng-for/ng-for.component';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
// Routes is a data type for Routing
export const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'dataBinding',
  //   pathMatch:'full'
  // },
  // {
  //   path:'admin',
  //   component:AdminComponent
  // },
  // {
  //   path:'dataBinding',
  //   component:DataBindingComponent
  // },
  // {
  //   path:'ng-class',
  //   component:NgClassComponent
  // },
  // {
  //   path:'control-flow',
  //   component:ControlStatementsComponent
  // }
  //1.path: give path Name of the component 2.Component:Give Component Class Name(ie.. Component Name}
  // { path: '', redirectTo: 'dataBinding', pathMatch: 'full'}, this is used for normal. below is replaced due to login page implementation.
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'', component:LayoutComponent,
    children: [
      { path: 'admin', component: AdminComponent},
      { path: 'dataBinding', component: DataBindingComponent},
      { path: 'ng-class', component: NgClassComponent},
      { path: 'template-form', component: TemplateFormComponent},
      { path:'reactive-form', component: ReactiveFormComponent},
      {path:'get-api', component:GetApiComponent},
      {path:'post-api', component:PostApiComponent},
      {path:'resource-api', component:ResourceApiComponent},
      {path:'customer', component:CustomerComponent},
      {path:'life-cycle', component:LifecycleeventsComponent},
      {path:'ng-for', component:NgForComponent}
    ];
  },
  
];
