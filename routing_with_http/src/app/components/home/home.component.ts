import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('home component created ... ');
  }

  ngOnInit() {
    console.log('home component fully initialised');
  }

  ngOnDestroy(): void {
    console.log('Home Component about to be unloaded/go out of scope/destroyed');
  }

}
