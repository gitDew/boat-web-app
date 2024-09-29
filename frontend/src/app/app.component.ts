import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoatListComponent } from './boat-list/boat-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoatListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
