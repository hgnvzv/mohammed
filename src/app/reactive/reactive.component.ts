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
    rating: new FormControl(5, Validators.required)
  });

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
