import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotroComponent } from './nosotro.component';

describe('NosotroComponent', () => {
  let component: NosotroComponent;
  let fixture: ComponentFixture<NosotroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosotroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
