import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BylocateComponent } from './bylocate.component';

describe('BylocateComponent', () => {
  let component: BylocateComponent;
  let fixture: ComponentFixture<BylocateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BylocateComponent]
    });
    fixture = TestBed.createComponent(BylocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
