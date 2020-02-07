
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CurrivComponent } from './components/curriv/CurrivComponent';
import { CurrisvComponent } from './components/currisv/currisv.component';
import { HomeComponent } from './components/home/home.component';




const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'about', component: AboutComponent },
    {path: 'currisv', component: CurrisvComponent },
    {path: 'curriv/:id', component: CurrivComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
