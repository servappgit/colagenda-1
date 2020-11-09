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
			console.log(data)
			if (data) {
				this.authService.storeUserData(data, data.user);
				this.router.navigate(['servicios']);
			}
		}).catch(err => console.log('err', err));
	}

	//   logingoogle(){
	//     this.authservice.logingoogle()
	//     .then((res) => {
	//       this.router.navigate(['booking']);
	//     }).catch (err => console.log('err', err));
	//   }

	//   loginfacebook(){
	//     this.authservice.loginfacebook()
	//     .then((res) => {
	//       this.router.navigate(['booking']);
	//     }).catch (err => console.log('err', err));
	//   }

}
