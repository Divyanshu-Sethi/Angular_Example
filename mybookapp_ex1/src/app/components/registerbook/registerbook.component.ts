import { Component } from '@angular/core';
import { BookdaoService } from '../../services/bookdao.service';
import { Book } from '../../model/Book';
//import { threadId } from 'worker_threads';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registerbook',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registerbook.component.html',
  styleUrl: './registerbook.component.css'
})
export class RegisterbookComponent {

  private bookser: BookdaoService;
  mybook: Book;
  status: string;

  constructor(bookser: BookdaoService) {
    this.bookser = bookser;
    this.mybook = new Book(1, 'Learn Angular', 700);
    this.status = ' ';
  }

  addBook(): void {
    if (this.mybook.bkid > 0 && this.mybook.bkprice > 0.0 && this.mybook.bkname != '') {
      this.bookser.addBook(this.mybook);
      this.status = 'book: ' + this.mybook.toString() + 'added successfully !';
    } else {
      this.status = 'book cannot be submitted, book validation failed, ';
      if (this.mybook.bkid < 0) { this.status += "book id can't be zero or negative" }
      if (this.mybook.bkprice < 0) { this.status += "book price can't be zero or negative" }
      if (this.mybook.bkname == '') { this.status += "book name can't be blank" }

    }

    this.mybook = new Book();

  }
}
