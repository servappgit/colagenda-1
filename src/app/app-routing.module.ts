import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BookingComponent } from './booking/booking.component';
import { GraciasComponent } from './pagina-gracias/gracias/gracias.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'booking',
  component: BookingComponent
},
{
  path: 'gracias',
  component: GraciasComponent
},
{
  path: 'home-colombia',
  component: HomeComponent
},
{
  path: '',
  redirectTo: '/home-colombia',
  pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
