import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { ClientLoginComponent } from './Components/client-login/client-login.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { ContactComponent } from './Components/contact/contact.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'client-login', component: ClientLoginComponent},
  { path: 'admin-login', redirectTo: 'http://portal.cacourtrecords.com/', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
