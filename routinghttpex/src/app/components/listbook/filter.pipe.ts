import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../../model/Book';

@Pipe({
    name:'filter',
    standalone:true
})
export class FilterPipe implements PipeTransform {
    transform(bookarr: Book[], searchText:string): any[] {
        if(!bookarr) return [];
        if(!searchText) return bookarr;

        searchText = searchText.toLowerCase();

        return bookarr.filter((book:Book)=>  {
            return book.bkname.toLowerCase().includes(searchText);
        });
    }
}