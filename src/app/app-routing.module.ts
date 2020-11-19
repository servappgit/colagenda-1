import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BookingComponent } from './booking/booking.component';
import { GraciasComponent } from './pagina-gracias/gracias/gracias.component';
import { HomeComponent } from './home/home.component';
import { ResponseComponent } from './response/response.component';


const routes: Routes = [
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'response',
  component: ResponseComponent
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
  path: 'servicios',
  component: HomeComponent
},
{
  path: '',
  redirectTo: '/login',
  pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
