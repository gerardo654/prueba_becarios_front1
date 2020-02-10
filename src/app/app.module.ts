import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas
// import { APP_ROUTING } from './app.routes';





// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { MapaCurricularComponent } from './components/mapa-curricular/mapa-curricular.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NosotroComponent } from './components/nosotro/nosotro.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    MapaCurricularComponent,
    ContactoComponent,
    NavbarComponent,
    NosotroComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // APP_ROUTING,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
