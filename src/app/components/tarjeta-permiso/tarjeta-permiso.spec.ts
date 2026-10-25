import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaPermiso } from './tarjeta-permiso';

describe('TarjetaPermiso', () => {
  let component: TarjetaPermiso;
  let fixture: ComponentFixture<TarjetaPermiso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaPermiso],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaPermiso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
