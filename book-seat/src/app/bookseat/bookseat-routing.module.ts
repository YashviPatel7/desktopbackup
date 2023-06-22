import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookseatComponent } from './bookseat/bookseat.component';

const routes: Routes = [
  {
    path: '',
    component: BookseatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookseatRoutingModule { }
