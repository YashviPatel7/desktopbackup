import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterText: any) {
    if (!filterText) {
      return value;
    }
    else {
      let array = value.filter((item: { status: any }) => item.status == filterText);
      return array
    }

  }
}