import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      UserName: ['', Validators.required],
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
