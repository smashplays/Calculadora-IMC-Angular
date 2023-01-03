import { Component } from '@angular/core';
import { Mensaje } from './mensaje';
import { HISTORIAL } from './historial';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BMI Calculator';
  public nuevoNombre: string;
  public altura: number = 0;
  public peso: number = 0;

  public genero: string;

  public mensaje: string;
  public lastMessage: Mensaje;

  public bmi: number;
  public historial: Mensaje[] = HISTORIAL;

  public plusAltura(): void {
    this.altura++;
  }

  public minusAltura(): void {
    if (this.altura > 0) {
      this.altura--;
    }
  }

  public plusPeso(): void {
    this.peso++;
  }

  public minusPeso(): void {
    if (this.peso > 0) {
      this.peso--;
    }
  }

  public addMessage(): void {
    if (
      !this.nuevoNombre ||
      !this.genero ||
      this.altura <= 0 ||
      this.peso <= 0 ||
      isNaN(this.peso) ||
      isNaN(this.altura)
    ) {
      return;
    }

    this.bmi = this.peso / Math.pow(this.altura / 100, 2);

    this.mensaje = this.calculateBMI(this.bmi, this.genero);

    if (this.mensaje) {
      this.historial.push({
        nombre: this.nuevoNombre,
        mensaje: this.mensaje,
      });

      this.lastMessage = this.historial[this.historial.length - 1];
      this.resetAll();
    }
  }

  public resetAll(): void {
    this.nuevoNombre = '';
    this.genero = '';
    this.altura = 0;
    this.peso = 0;
  }

  public calculateBMI(bmi: number, genero: string): string {   
    let minBMI: number = 0;

    if (genero === 'masculino') {
      minBMI = 20;
    } else if (genero === 'femenino') {
      minBMI = 18;
    }

    if (bmi < minBMI) {
      return 'debe de subir de peso';
    } else if (bmi >= minBMI && bmi < 25) {
      return 'está en su peso ideal';
    } else {
      return 'necesita bajar peso';
    }
  }
}
