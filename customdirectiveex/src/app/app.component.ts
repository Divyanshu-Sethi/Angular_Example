import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { CommonModule } from '@angular/common';
import { ChangefontsizeDirective } from './directives/changefontsize.directive';
import { DomChangeDirective } from './directives/domchange.directive';

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighlightDirective,ChangefontsizeDirective,DomChangeDirective],
  templateUrl: './app.component.html',
  host: { ngSkipHydration: 'true' },
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges {
  title = 'customdirectiveex';
  mycolor: string = 'pink';

  constructor() {
    console.log('app component constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('app component onChanges lifecycle method called...');
  }

  ngOnInit(): void {
    console.log('ngOnInit of app component  called');
  }

}
