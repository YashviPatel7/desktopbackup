import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookseatRoutingModule } from './bookseat-routing.module';
import { BookseatComponent } from './bookseat/bookseat.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    BookseatComponent
  ],
  imports: [
    CommonModule,
    BookseatRoutingModule,
    NgSelectModule
  ]
})
export class BookseatModule { }
