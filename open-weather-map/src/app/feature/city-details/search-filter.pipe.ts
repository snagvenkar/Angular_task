import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], keys: string, searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    
    return (items || []).filter((item) => keys.split(',')
      .some(key => item.hasOwnProperty(key) && new RegExp(searchText, 'gi').test(item[key])));
  }

}
