import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recherche'
})
export class RecherchePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
