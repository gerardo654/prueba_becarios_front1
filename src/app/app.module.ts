import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CurrivComponent } from './components/curriv/curriv.component';
import { CurrisvComponent } from './components/currisv/currisv.component';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NvbarComponent } from './components/shared/nvbar/nvbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BuscadorComponent,
    CurrivComponent,
    CurrisvComponent,
    HomeComponent,
    ServiciosComponent,
    NvbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
