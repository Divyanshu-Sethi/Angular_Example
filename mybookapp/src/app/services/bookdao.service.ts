import { Injectable } from '@angular/core';
 //instead of providedIn use providers: inside @component to declare service at component (and all its child component)level.
@Injectable({
  providedIn: 'root' 
 
})
export class BookdaoService {

  constructor() { }
}
