import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  form: FormGroup = new FormGroup({
    UserName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    textarea: new FormControl('', Validators.required),
    choos: new FormControl('', Validators.required),
    rating: new FormControl(5, [Validators.required,Validators.min(5)])
  });


  gtevalue(value:any){
   return this.form.get(value)
  }
}
