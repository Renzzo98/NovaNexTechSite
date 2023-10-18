import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillComponentComponent } from './pill-component.component';

describe('PillComponentComponent', () => {
  let component: PillComponentComponent;
  let fixture: ComponentFixture<PillComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PillComponentComponent]
    });
    fixture = TestBed.createComponent(PillComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
