import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompwComponent } from './compw.component';

describe('CompwComponent', () => {
  let component: CompwComponent;
  let fixture: ComponentFixture<CompwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
