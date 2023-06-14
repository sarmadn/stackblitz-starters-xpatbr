import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { IntroComponent } from './Components/intro/intro.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { ClientLoginComponent } from './Components/client-login/client-login.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Components/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'client-login', component: ClientLoginComponent }
]

@NgModule({

  
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    CoursesComponent,
    FooterComponent,
    AdminLoginComponent,
    ClientLoginComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    DashboardComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
