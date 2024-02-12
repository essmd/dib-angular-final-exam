import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Home Inventory';
  isDarkMode: boolean = true;

  ngOnInit(): void {
    this.isDarkMode = document.documentElement.classList.contains('dark');
  }

  onDarkModeToggle() {
    this.isDarkMode = document.documentElement.classList.toggle('dark');
  }
}
