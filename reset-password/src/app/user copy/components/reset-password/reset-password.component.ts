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

  public validate(): void {
    if (this.resetpwdForm.invalid) {
      for (const control of Object.keys(this.resetpwdForm.controls)) {
        this.resetpwdForm.controls[control].markAsTouched();
      }
      return;
    }
  }

  togglePassword() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
