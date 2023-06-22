import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { customer } from '../customer';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  public cancel: boolean = false;

  @Output() cancelEvent = new EventEmitter()
  @Output() addevent = new EventEmitter()
  @Output() updateData = new EventEmitter()
  @Input() customerData!: any;

  ngOnInit(): void {
    this.customerForm.reset();
    this.btnText = "save";
    this.changeFunction = true;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.customerData) {
      console.log(this.customerData);
      this.customerForm.setValue({

        name: this.customerData.name,
        description: this.customerData.description,
        status: this.customerData.status,
        rate: this.customerData.rate,
        balance: this.customerData.balance,
      })


    }
    this.btnText = "Update";
    this.changeFunction = false

  }
  formClose() {
    this.cancelEvent.emit(this.cancel)
  }



  public editid!: number;
  public postData!: customer;
  public alert!: boolean;
  public mag!: string;
  btnText = "save";
  changeFunction = true;

  public customerForm!: FormGroup;
  constructor(private _customerservice: CustomerService, private router: ActivatedRoute) {
    this.customerForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]{3,25}$/)]),
      description: new FormControl(null, [Validators.required, Validators.pattern(/^([a-zA-Z0-9$&+,:;=?@#|'<>.-^*()%!\s]){3,150}$/)]),
      status: new FormControl(null, Validators.required),
      rate: new FormControl(null, Validators.required),
      balance: new FormControl(null, Validators.required)
    })
    this.editid = Number(this.router.snapshot.paramMap.get('id'));

  }

  addcustomer() {
    this.addevent.emit(this.customerForm.value)
    this.mag = "submited"
    this.alert = true;

  }
  Editcustomer() {
    this.updateData.emit(this.customerForm.value)
    this.mag = "updated"
    this.alert = true;
  }
  closeAlert() {
    this.alert = false;
  }
}
