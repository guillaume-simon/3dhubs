import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'numberToBoolArray'})
export class NumberToBoolArrayPipe implements PipeTransform {
  transform(value: number, args?: any): boolean[] {
    return Array(value).fill(true);
  }
}