import { Component } from '@angular/core';

//This is the root compenent
@Component({
  selector: 'app-root', //Defines how to select in html. (see index.html)
  templateUrl: './app.component.html', //Defines teh component in html.
  styleUrls: ['./app.component.css'] //Handles the components css.
})
export class AppComponent {
  title: string;
 
  constructor() {
    this.title = 'GameHub - Game Library Tracker';
  }
}
