import { Component, OnInit } from '@angular/core';
import { firestore} from 'firebase';
import { Router } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: any = {
		uid: '',
		locationAdress: '',
		city: 'Bogotá',
		adressComplements: '',
		country: 'Colombia',
		adressHints: '',
		name: '',
		lastName: '',
		email: '',
		contactPhone: '',
	};
  constructor(private router: Router) { // mantine el usuario de firebase loggeado
		let usuario = JSON.parse(localStorage.getItem('usuario'));
		this.user.email = usuario.email;
		this.user.uid = usuario.uid }

  ngOnInit(): void {
  }

  public irAgendadorEmpresas() {
    console.log("funcionando")
    this.router.navigate(['booking'], { state: { example: 'BusinessCleaning' } });
   

  }

 
  public irAgendadorLimpieza() {
    console.log("funcionando")
    this.router.navigate(['booking'], { state: { example: 'HomeCleaning' } });
   

  }
  public irAgendadorDesinfeccion() {
    console.log("funcionando")
    this.router.navigate(['booking'], { state: { example: 'Disinfection' } });
   

  }

}
