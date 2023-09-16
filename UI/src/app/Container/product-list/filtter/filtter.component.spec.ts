import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltterComponent } from './filtter.component';

describe('FiltterComponent', () => {
  let component: FiltterComponent;
  let fixture: ComponentFixture<FiltterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltterComponent]
    });
    fixture = TestBed.createComponent(FiltterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
