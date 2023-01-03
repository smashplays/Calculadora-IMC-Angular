import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoHistorialComponent } from './elemento-historial.component';

describe('ElementoHistorialComponent', () => {
  let component: ElementoHistorialComponent;
  let fixture: ComponentFixture<ElementoHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementoHistorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementoHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
