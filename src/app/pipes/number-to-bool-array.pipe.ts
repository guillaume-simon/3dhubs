import { Pipe, PipeTransform } from '@angular/core';

/* Returns an array of booleans set to true, the size of the value.
  Used for display ngFor loops.
*/

@Pipe({name: 'numberToBoolArray'})
export class NumberToBoolArrayPipe implements PipeTransform {
  transform(value: number): boolean[] {
    return Array(value).fill(true);
  }
}