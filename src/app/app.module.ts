import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuperBotonComponent } from './super-boton/super-boton.component';
import { ElementoHistorialComponent } from './elemento-historial/elemento-historial.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperBotonComponent,
    ElementoHistorialComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
