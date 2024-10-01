import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoatListComponent } from './boat-list/boat-list.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoatListComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
