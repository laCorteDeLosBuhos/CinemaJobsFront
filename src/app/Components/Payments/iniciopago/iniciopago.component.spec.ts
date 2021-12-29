import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciopagoComponent } from './iniciopago.component';

describe('IniciopagoComponent', () => {
  let component: IniciopagoComponent;
  let fixture: ComponentFixture<IniciopagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciopagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
