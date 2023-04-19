import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomerService } from '../customer.service';
import { customer } from '../customer';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  @Output() myEvent = new EventEmitter()
  public isActivet: boolean = true;

  @Output() editEvent = new EventEmitter()
  @Output() deleteEvent = new EventEmitter()
  @Input() data: any;

  searchText: any = '';
  filterText: any;

  ngOnInit(): void {

  }
  addform() {
    this.myEvent.emit(this.isActivet)
  }


  public customer!: customer[];
  constructor(private _customerservice: CustomerService) { }


  customerDelete(id: any) {
    this.deleteEvent.emit(id);
  }
  customerEditwithid(id: any) {
    this.myEvent.emit(this.isActivet)
    this.editEvent.emit(id);


  }


}
