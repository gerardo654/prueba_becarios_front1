import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaCurricularComponent } from './mapa-curricular.component';

describe('MapaCurricularComponent', () => {
  let component: MapaCurricularComponent;
  let fixture: ComponentFixture<MapaCurricularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaCurricularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaCurricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
