import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';
;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PiPes Example';
  today: number = Date.now();
  x = 100;
  y: Promise<string> | null = Promise.resolve("hello world");
  z: Observable<string> | null = of("hello world");
  //bookarr:Observable<Book[]> | null = this.httpser.get();
  x1 = new Date(2023, 1, 3, 1, 1, 1);
  x2 = 100.88;

  book: { bkid: number, bkname: string, bkprice: number } = { bkid: 1, bkname: 'Angular', bkprice: 2000 }

  msg: string = "The Quick Brown FOX jumps over the lazy dog ";
  marks = 0.88888;
}

//https://www.telerik.com/blogs/angular-basics-built-pipes-examples-each