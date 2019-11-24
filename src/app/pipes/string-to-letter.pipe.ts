import { Pipe, PipeTransform } from '@angular/core';
/*
  Returns an array of letters of the given string value.
*/
@Pipe({name: 'stringToLetter'})
export class StringToLetterPipe implements PipeTransform {
  transform(value: string): string[] {
    return value.split('');
  }
}