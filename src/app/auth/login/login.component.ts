import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import * as firebase from "firebase";
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	UserPassword: any;
	UserEmail: any;
	UserPassword2: any;
	UserEmail2: any;
	UserName: any;
	UserLastName: any;
	UserPhone: any;
	UserDocument: any;
	UserCity: any;
	UserIdLocation: any;
	UserId: any;
	public usuarioCreado: any = {};
	registro = false as boolean;
	login = false as boolean;
	inicioCorreo = false as boolean;
	user: firebase.User;
	provider:any;



	
	constructor(private authService: AuthService, private router: Router) {  }

	ngOnInit(): void { 
		this.registro = false;
		this.UserEmail2 = localStorage.getItem("correoCreado");
		this.UserPassword2 = localStorage.getItem("contraCreada");
		var provider = new firebase.auth.GoogleAuthProvider();
		this.provider = provider;
		firebase.auth().onAuthStateChanged(user=> {
		  this.user = user;
		});

		
	}

	irRegistro(){
		this.registro = true;
	}
	irLogin(){
		this.registro = false;
	}
	irInicioServ(){
		this.inicioCorreo = true;
	}
	public makeid() {
		var result = "";
		var characters =
		  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		var charactersLength = characters.length;
		for (var i = 0; i < 20; i++) {
		  result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	  }
	crearUsuario(){
		if(this.UserCity == "Medellín"){this.UserIdLocation = "bDS8BjlImklLBpSPctkh"}
		if(this.UserCity == "Bogotá"){this.UserIdLocation = "4fZC8McSlOvpPfIZnG7w"}
		this.UserId = this.makeid()
		this.usuarioCreado = {};

		this.usuarioCreado = { 
			id : this.UserId ,
			name: this.UserName,
			 apellido: this.UserLastName, 
			 telefono: this.UserPhone, 
			 documento: this.UserDocument, 
			 email: this.UserEmail,
			 clave: this.UserPassword,
				rol: "usuario",
				 ciudad: this.UserCity, 
				 idLocation: this.UserIdLocation} 
		console.log(this.usuarioCreado)
		this.authService.registerUser(this.usuarioCreado)
	
		localStorage.setItem("correoCreado", this.UserEmail);
		localStorage.setItem("contraCreada", this.UserPassword);
		this.ngOnInit();
		this.inicioCorreo = true;
	}

	loginemail() {
		this.authService.loginEmailUser(this.UserEmail2, this.UserPassword2).then((data) => {
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
					rol: usuario.rol ? usuario.rol : 'usuario',
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




	  
		 
	googleLogin() {
	try{this.authService.loginGoogle().then((data) => {
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
					rol: usuario.rol ? usuario.rol : 'usuario',
					privilege: 'null'
				  }
				  console.log(sesion)
			if (data) {
				this.authService.storeUserData(data, sesion);
				this.router.navigate(['servicios']);
			}
		})
			

	})
	
	
	}
	catch(err){console.log(err)}
		  
	  }


	  facebookLogin(){
		try{this.authService.loginFacebook().then((data) => {
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
						rol: usuario.rol ? usuario.rol : 'usuario',
						privilege: 'null'
					  }
					  console.log(sesion)
				if (data) {
					this.authService.storeUserData(data, sesion);
					this.router.navigate(['servicios']);
				}
			})
				
	
		})
		
		
		}
		catch(err){console.log(err)}
			   
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
