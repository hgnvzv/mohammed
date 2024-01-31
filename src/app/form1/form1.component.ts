import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  form: FormGroup = {} as FormGroup;
  data = { username: "sadig", password: 123 }

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

 
  save(){
    this.buildForm(this.data)
    if (this.data!=null){""}
    else{null}
    this.data!=null ? "" : null
  }

  buildForm(formData?: any) {
    this.form = this.fb.group({
      UserName: [
        formData != null ? formData.username : '',
        [Validators.required, Validators.pattern('^[a-zA-Z_ ]+$')]
      ],
      password: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      textarea: ['', Validators.required],
      choos: ['', Validators.required],
      rating: [5, Validators.required]
    });
  }

  get UserName() { return this.form.get('UserName'); }
  get password() { return this.form.get('password'); }
  get Email() { return this.form.get('Email'); }
  get textarea() { return this.form.get('textarea'); }
  get choos() { return this.form.get('choos'); }

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
