import { Injectable } from '@angular/core';
import { Book } from '../model/Book';
//instead of providedIn use providers: inside @component to declare service at component (and all its child component)level.
@Injectable({
  providedIn: 'root'

})
export class BookdaoService {

  bookarr: Book[];

  constructor() {
    this.bookarr = [];

  }

  addBook(b: Book): void{
    if (b) {
      console.log(b)
      this.bookarr.push(b); 
    }
  }
    getallbooks(): Book[]
    {
      return this.bookarr;
    }
  


}
