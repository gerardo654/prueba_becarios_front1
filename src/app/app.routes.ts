
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { MapaCurricularComponent } from './components/mapa-curricular/mapa-curricular.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotroComponent } from './components/nosotro/nosotro.component';


const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent },
    {path: 'nosotros', component: NosotrosComponent },
    {path: 'mapa-curricular', component: MapaCurricularComponent },
    {path: 'contacto', component: ContactoComponent },
    {path: 'nosotro', component: NosotroComponent }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
