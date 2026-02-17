import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminchat } from './adminchat';

describe('Adminchat', () => {
  let component: Adminchat;
  let fixture: ComponentFixture<Adminchat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminchat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminchat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
