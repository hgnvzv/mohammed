import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})



export class Form1Component {
  form: FormGroup = {} as FormGroup;
  data = { username:"password", password: 123 , Email: 'mohammed@gmail.com',textarea:'abc',choos:2,rating:50 }
  
  constructor(private fb: FormBuilder) {
    this.buildForm(); 
  
  }

 hidePassword = true;
  save(){
    this.buildForm()
  }
  show(){
    this.buildForm(this.data)
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  

  buildForm(formData?: any) {
    this.form = this.fb.group({
      UserName: [formData ? formData.username : '',[Validators.required, Validators.pattern('^[a-zA-Z_]+$')]],
      password: [formData ? formData.password :'', Validators.required,Validators.minLength(3),Validators.maxLength(10)],
      Email: [formData ? formData.Email :'', [Validators.required, Validators.email]],
      textarea: [formData ? formData.textarea :'', Validators.required],
      choos: [formData ? formData.choos : '', Validators.required],
      rating: [formData ? formData.rating:5, Validators.required],
  
    });
  }

  
  
  getFormControlValue(controlName:any) { return this.form.get(controlName); }


  getRatingMessage(): string {
    const ratingControl = this.form.get('rating');

    if (!ratingControl?.touched) {
      return '';
    }
    const rating = ratingControl.value;
    if (rating >= 5) {
      return 'Thank you';
    } else {
      return 'We will work to develop that';
    }
  }
}
