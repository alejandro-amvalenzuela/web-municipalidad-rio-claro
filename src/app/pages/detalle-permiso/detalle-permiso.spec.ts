import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePermiso } from './detalle-permiso';

describe('DetallePermiso', () => {
  let component: DetallePermiso;
  let fixture: ComponentFixture<DetallePermiso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallePermiso],
    }).compileComponents();

    fixture = TestBed.createComponent(DetallePermiso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
