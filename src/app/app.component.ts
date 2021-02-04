import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Sean Edmund Sulham';
  greeting = 'Hello!  My name is ' + this.name + '.';
} 
