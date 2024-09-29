import { Component } from '@angular/core';
import { BoatDetailComponent } from './boat-detail/boat-detail.component';
import { BoatsService } from '../boats.service';
import { Boat } from './models/Boat';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-boat-list',
  standalone: true,
  imports: [BoatDetailComponent, AsyncPipe],
  templateUrl: './boat-list.component.html',
  styleUrl: './boat-list.component.css',
})
export class BoatListComponent {
  boats$: Observable<Boat[]>;

  constructor(boatsService: BoatsService) {
    this.boats$ = boatsService.getBoats();
  }
}
