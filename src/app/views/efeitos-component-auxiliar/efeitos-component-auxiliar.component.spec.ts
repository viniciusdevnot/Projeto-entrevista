import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfeitosComponentAuxiliarComponent } from './efeitos-component-auxiliar.component';

describe('EfeitosComponentAuxiliarComponent', () => {
  let component: EfeitosComponentAuxiliarComponent;
  let fixture: ComponentFixture<EfeitosComponentAuxiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfeitosComponentAuxiliarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfeitosComponentAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
