import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from './customer.service';
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerFormComponent,
    CustomerListComponent,
    SearchPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CustomerService]
})
export class CustomerModule { }
