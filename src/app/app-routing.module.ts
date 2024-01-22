import { ReactiveComponent } from './reactive/reactive.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './form1/form1.component';

const routes: Routes = [
  {path :"form1",component:Form1Component},
 {path :"reactive",component:ReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
