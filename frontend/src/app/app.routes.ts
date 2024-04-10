import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventsComponent } from './components/events/events.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "about-us",
        component: AboutUsComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "events",
        component:EventsComponent
    }
  
  ];