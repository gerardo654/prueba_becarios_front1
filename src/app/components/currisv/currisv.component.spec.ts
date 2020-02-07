import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrisvComponent } from './currisv.component';

describe('CurrisvComponent', () => {
  let component: CurrisvComponent;
  let fixture: ComponentFixture<CurrisvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrisvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrisvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
