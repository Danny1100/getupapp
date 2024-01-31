import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparencyTableComponent } from './transparency-table.component';

describe('TransparencyTableComponent', () => {
  let component: TransparencyTableComponent;
  let fixture: ComponentFixture<TransparencyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransparencyTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransparencyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
