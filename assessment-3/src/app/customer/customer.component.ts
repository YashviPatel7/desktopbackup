import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public toggle: boolean = false
  public customer: any;
  data1: any;
  id: any;

  constructor(private _customerService: CustomerService) { }

  ngOnInit(): void {
    this.getData()
  }
  callingEvent(data: boolean) {
    this.toggle = data;
  }

  closeform(data: boolean) {
    this.toggle = data;

  }
  editEvent(id: any) {
    this._customerService.getCurrentData(id).subscribe((res) => {
      this.customer = res;
      console.log(this.customer);
      this.id = id

    })
    this.toggle = true;
  }
  addevent(data: any) {
    this._customerService.addCustomer(data).subscribe((data) => data);
    this.getData()

  }
  getData() {
    this._customerService.getCustomerData().subscribe((items => {
      this.data1 = items;
    }))
  }
  customerDelete(id: number) {
    this._customerService.deleteCustomer(id).subscribe();
    this.getData()
  }
  updatecustomerdata(body: any) {
    this._customerService.updateData(this.id, body).subscribe(res => res)
    this.getData();
  }

}
