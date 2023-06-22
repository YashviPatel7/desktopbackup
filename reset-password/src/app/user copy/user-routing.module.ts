import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [{
  path: "",
  component: UserComponent,
  children: [
    { path: "", redirectTo: "sign-in", pathMatch: "full", },
    { path: "sign-in", component: SignInComponent, },
    { path: "sign-up", component: SignUpComponent },
    { path: "forgot-password", component: ForgotPasswordComponent },
    { path: "reset-password", component: ResetPasswordComponent }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
