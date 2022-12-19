import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getPoupanca(); should have Poupanca = 10', () => {
    expect(component.getPoupanca).toEqual(10);
  });

  it('(U) getCarteira(); should have Carteira = 50', () => {
    expect(component.getcarteira).toEqual(50);
  });

  it('(U) setSacar(); should transfer Poupanca from Carteira', () => {
    component.setSacar('10');
    fixture.detectChanges();

    expect(component.getPoupanca).toEqual(0)
    expect(component.getcarteira).toEqual(60)
  });

  it('(U) setDepositar(); should transfer Carteira from Poupanca', () => {
    component.setDepositar('50');
    fixture.detectChanges();

    expect(component.getcarteira).toEqual(0)
    expect(component.getPoupanca).toEqual(60)
  });



});
