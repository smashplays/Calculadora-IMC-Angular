import { Component, Input } from '@angular/core';
import { Mensaje } from '../mensaje';

@Component({
  selector: 'elemento-historial',
  templateUrl: './elemento-historial.component.html',
  styleUrls: ['./elemento-historial.component.css']
})
export class ElementoHistorialComponent {
    @Input() mensaje: Mensaje;
}
