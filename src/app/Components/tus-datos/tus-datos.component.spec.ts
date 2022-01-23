import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusDatosComponent } from './tus-datos.component';

describe('TusDatosComponent', () => {
  let component: TusDatosComponent;
  let fixture: ComponentFixture<TusDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TusDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TusDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
