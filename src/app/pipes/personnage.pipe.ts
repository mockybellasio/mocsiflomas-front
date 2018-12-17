import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from '../ModelFolder/Produit';

@Pipe({
  name: 'personnage'
})
export class PersonnagePipe implements PipeTransform {

  transform(items: Produit[], filtrage: string): any {
    if (!filtrage) return items
    else {
      return items.filter
    }
  }

}
