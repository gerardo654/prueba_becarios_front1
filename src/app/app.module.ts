import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas
import { APP_ROUTING } from './app.routes';


// Servicios
import { CurrisvService } from './servicios/currisv.service';


// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CurrivComponent } from './components/curriv/CurrivComponent';
import { CurrisvComponent } from './components/currisv/currisv.component';
import { HomeComponent } from './components/home/home.component';
import { NvbarComponent } from './components/shared/nvbar/nvbar.component';




@NgModule({
  declarations: [
    AppComponent,
    NvbarComponent,
    HomeComponent,
    AboutComponent,
    CurrivComponent,
    CurrisvComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    CurrisvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
