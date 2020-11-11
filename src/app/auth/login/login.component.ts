import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	UserPassword: any;
	UserEmail: any;
	user: firebase.User



	
	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit(): void { }


	loginemail() {
		this.authService.loginEmailUser(this.UserEmail, this.UserPassword).then((data) => {
			console.log(data.user)
			const userFirebase = {} = data.user;
			this.authService.detail(userFirebase.uid).subscribe((usuario: {		id: string,
				uid?: string,
				idLocation?: string,
				deviceId?: string,
				name: string,
				apellido: string,
				email: string,
				clave?: string,
				estado: string,
				fechaNacimiento: string,
				foto: string,
				telefono: number,
				rol: string,
				tipo: string,
				genero?: string,
				typoDocumento: string,
				tipoPropiedad:  string,
				descripcionDireccion:  string,
				observaciones:  string,
				documento: string,
				direccion: string,
				zona: string,
				fecha?: number,
				cread_at?: number,
				update_at?: number,
				terminos: boolean,
				gps: {
					lat: number;
					lng: number;
				},}) => {
				const sesion = {
					photoURL: usuario.foto ? usuario.foto : '/assets/img/userDefault.png',
					name: usuario.name,
					lastName: usuario.apellido,
					telefono: usuario.telefono,
					id: usuario.id,
					email: usuario.email,
					idLocation: usuario.idLocation,
					direccion: usuario.direccion,
					descripcionDireccion: usuario.descripcionDireccion,
					documento: usuario.documento,
					rol: usuario.rol ? usuario.rol : 'Administrador',
					privilege: 'null'
				  }
				  console.log(sesion)
			if (data) {
				this.authService.storeUserData(data, sesion);
				this.router.navigate(['servicios']);
			}
		})
	}).catch(err => console.log('err', err));
	}

	  //public loginGoogle(){
		//  console.log("ok")
	     //this.authService.logingoogle()
	     //.then((res) => {
	       //this.router.navigate(['servicios']);
	     //}).catch (err => console.log('err', err));
	  //}

	//   loginfacebook(){
	//     this.authservice.loginfacebook()
	//     .then((res) => {
	//       this.router.navigate(['booking']);
	//     }).catch (err => console.log('err', err));
	//   }

}
