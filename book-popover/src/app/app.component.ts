import { Component, OnInit } from '@angular/core';
import {
  NgbDateStruct, NgbDatepickerConfig,
  NgbCalendar,
  NgbDate,
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [
    `
			.dark-modal .modal-content {
				background-color: #292b2c;
				color: white;
			}
			.dark-modal .close {
				color: white;
			}
			.light-blue-backdrop {
				background-color: #5cb3fd;
			}
		`,
  ],
})
export class AppComponent {

  title = 'book-popover';
  // currentDate: any = new Date();
  model!: NgbDateStruct;
  closeResult!: string;




  fromDate1: number = this.calendar.getToday().day + 1;
  fromDate2: number = this.calendar.getToday().day + 2;

  //currentMonth: any = this.calendar.getMonths();

  //get current month
  // this.currentMonth = new Date();
  // this.currentMonth.getMonth();

  // console.log(this.currentMonth);
  //console.log("The current month is " + this.currentMonth.getMonth());

  //get current year

  // this.currentYear = new Date();
  // this.currentYear.getFullYear();
  // console.log("The current year is " + this.currentYear.getFullYear());
  // console.log("hdydry", this.json.disabledDates);


  // disable date
  datePickerJson = {};
  markDisabled: any;
  json = {
    disable: [1, 2],
    disabledDates: [
      // { year: 2023, month: 5, day: 13 },
      // { year: 2023, month: 5, day: 20 },
      // { year: 2023, month: 5, day: 18 },
      { year: 2023, month: 6, day: this.fromDate1 },
      { year: 2023, month: 6, day: this.fromDate2 }
    ]
  };

  isDisabled: any;
  constructor(
    private config: NgbDatepickerConfig,
    private calendar: NgbCalendar, private modalService: NgbModal) {
    //to disable specific date and specific weekdays
    this.disbaledate();


  }

  disbaledate() {
    this.isDisabled = (
      date: NgbDateStruct

    ) => {
      return this.json.disabledDates.find(x =>
        (new NgbDate(x.year, x.month, x.day).equals(date))
        || (this.json.disable.includes(this.calendar.getWeekday(new NgbDate(date.year, date.month, date.day))))
        || ((this.json.disable.includes((this.fromDate1))) && (this.json.disable.includes((this.fromDate2))))
      )
        ? true
        : false;
    };
  }

  //model
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
