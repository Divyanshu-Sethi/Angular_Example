import { Component } from '@angular/core';
import { BookdaoService } from '../../services/bookdao.service';
import { CommonModule } from '@angular/common';
import { Book } from '../../model/Book';

@Component({
  selector: 'app-listbook',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css'
})
export class ListbookComponent {
bookarr:Book[];

  bookser: BookdaoService;

constructor(bookser:BookdaoService){
  this.bookser = bookser;
  this.bookarr=this.bookser.getallbooks();
}
}
