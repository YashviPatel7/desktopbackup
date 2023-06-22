import { Component } from '@angular/core';

@Component({
  selector: 'app-bookseat',
  templateUrl: './bookseat.component.html',
  styleUrls: ['./bookseat.component.scss']
})
export class BookseatComponent {

  cities = [
    { id: 1, name: 'valsad' },
    { id: 2, name: 'surat' }
  ]

  floors = [
    { id: 1, name: '1st floor' },
    { id: 2, name: '2rd floor' },
    { id: 3, name: '3rd floor' },
    { id: 4, name: '4th floor' },
  ]

  status = [
    { id: 1, name: 'reserved' },
    { id: 2, name: 'available' },
    { id: 3, name: 'booked' },
    { id: 4, name: 'unavailable' },
    { id: 5, name: 'unassigned' },
  ]
}
