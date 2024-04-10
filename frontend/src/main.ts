import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { AboutUsComponent } from './app/components/about-us/about-us.component';


const routes: Routes = [
  {
      path: "home",
      component: HomeComponent
  },
  {
      path: "about-us",
      component: AboutUsComponent
  }

];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
})
  .catch((err) => console.error(err));

  
