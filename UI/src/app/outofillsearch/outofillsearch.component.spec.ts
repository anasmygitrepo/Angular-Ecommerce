import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutofillsearchComponent } from './outofillsearch.component';

describe('OutofillsearchComponent', () => {
  let component: OutofillsearchComponent;
  let fixture: ComponentFixture<OutofillsearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutofillsearchComponent]
    });
    fixture = TestBed.createComponent(OutofillsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
