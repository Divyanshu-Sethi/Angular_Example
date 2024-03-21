import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-listbook',
  standalone: true,
  imports: [],
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css'
})
export class ListbookComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('Listbook component created ... ');
  }
  ngOnInit() {
    console.log('List component fully initialised');
  }
  ngOnDestroy(): void {
    console.log('Listbook Component about to be unloaded/go out of scope/destroyed');
  }

}
