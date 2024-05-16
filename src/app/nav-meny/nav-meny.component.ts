import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-nav-meny',
  standalone: true,
  imports: [MatIconModule, MatSlideToggleModule],
  templateUrl: './nav-meny.component.html',
  styleUrl: './nav-meny.component.css'
})
export class NavMenyComponent {
  darkMode = false;

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }
}
