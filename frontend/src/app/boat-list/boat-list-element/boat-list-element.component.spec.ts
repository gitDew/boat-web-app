import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatListElementComponent } from './boat-list-element.component';

describe('BoatListElementComponent', () => {
  let component: BoatListElementComponent;
  let fixture: ComponentFixture<BoatListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoatListElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoatListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
