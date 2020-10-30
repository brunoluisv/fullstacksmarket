import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatedialogComponent } from './statedialog.component';

describe('StatedialogComponent', () => {
  let component: StatedialogComponent;
  let fixture: ComponentFixture<StatedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
