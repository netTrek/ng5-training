import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform( value: string | any[] | any, msg?: string ): string | any[] | any {

    if ( isArray( value )) {
      return value.reverse();
    } else if ( typeof value === 'string' ) {
      if ( !! msg ) {
        return msg + ' ' + value.split('').reverse().join('');
      }
      return value.split('').reverse().join('');
    }
    return value;
  }

}
