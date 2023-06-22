import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MustMatch } from './matchpassword.validator';

@Component({
  selector: 'desk-book-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetpwdForm!: FormGroup;
  submitted: boolean = false;
  public passwordType = 'password'

  constructor() {
    this.resetpwd();
  }

  resetpwd() {
    this.resetpwdForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(25), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!_&])[A-Za-z\\d@$!_&]{3,25}$')]),
      confirmpassword: new FormControl('', [Validators.required]),

    },
      {
        validators: MustMatch('password', 'confirmpassword')
      }
    );

  }

  ngOnInit() { }

  resetpassword() {
    console.log(this.resetpwdForm.value);

    this.submitted = true;
    if (this.resetpwdForm.invalid) {
      return;
    }
  }

  togglePassword() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
