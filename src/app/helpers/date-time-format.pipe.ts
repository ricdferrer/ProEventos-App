import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Constantes } from './../utils/constantes';

@Pipe({
  name: 'dateTimeFormatPipe'
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {

  override transform(value: any, args?: any): any {
    return super.transform(value, Constantes.DATE_TIME_FMT);
  }

}
