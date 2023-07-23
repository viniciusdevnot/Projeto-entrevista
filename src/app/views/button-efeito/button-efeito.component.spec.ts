import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEfeitoComponent } from './button-efeito.component';

describe('ButtonEfeitoComponent', () => {
  let component: ButtonEfeitoComponent;
  let fixture: ComponentFixture<ButtonEfeitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonEfeitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonEfeitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
