import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerbook',
  standalone: true,
  imports: [],
  templateUrl: './registerbook.component.html',
  styleUrl: './registerbook.component.css'
})
export class RegisterbookComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('register component created ... ');
  }

  ngOnInit() {
    console.log('registered component fully initialised');
  }
  ngOnDestroy(): void {
    console.log('register book about to be unloaded/go out of scope/destroyed');
  }

}
