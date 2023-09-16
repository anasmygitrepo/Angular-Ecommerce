import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpanelProductViewComponent } from './adminpanel-product-view.component';

describe('AdminpanelProductViewComponent', () => {
  let component: AdminpanelProductViewComponent;
  let fixture: ComponentFixture<AdminpanelProductViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminpanelProductViewComponent]
    });
    fixture = TestBed.createComponent(AdminpanelProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
