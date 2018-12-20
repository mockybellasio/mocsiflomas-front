import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from '../ModelFolder/Produit';

@Pipe({
  name: 'recherche'
})
export class RecherchePipe implements PipeTransform {

  transform(items: Produit[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.nomFigurine.toLowerCase().includes(searchText);
    });



   }
}

 