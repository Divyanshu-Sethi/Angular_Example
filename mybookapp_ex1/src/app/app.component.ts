import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RegisterbookComponent } from './components/registerbook/registerbook.component';
import { ListbookComponent } from './components/listbook/listbook.component';
//import { MybookComponent } from './components/mybook/mybook.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RegisterbookComponent,ListbookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyBookApp';
}
