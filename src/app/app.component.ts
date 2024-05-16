import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenyComponent } from './nav-meny/nav-meny.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavMenyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'members';
}
