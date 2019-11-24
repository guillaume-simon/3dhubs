import { Pipe, PipeTransform } from '@angular/core';

/* Displays a float number with only one digit after the decimal point */

@Pipe({name: 'floatToFixed'})
export class FloatToFixedPipe implements PipeTransform {
  transform(value: number): string {
    return value.toFixed(1);
  }
}