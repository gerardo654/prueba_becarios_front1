import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrivComponent } from './curriv.component';

describe('CurrivComponent', () => {
  let component: CurrivComponent;
  let fixture: ComponentFixture<CurrivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
