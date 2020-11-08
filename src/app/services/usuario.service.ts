import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app'
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class UsuarioService {

	public user: any = {};

	constructor(
		private angularFireAuth: AngularFireAuth,
		private db: AngularFireDatabase,
	) { }

	public guardarUsuarios(usuario123) {
		return this.db.database.ref('users/' + usuario123.id).set(usuario123);
	}

	public editUsuarios(usuario123) {
		return this.db.database.ref('users/' + usuario123.id).update(usuario123);
	}

	getById(uid) {
		return this.db.object('users/' + uid).valueChanges();;
	}
	add(user) {
		return this.db.object('users/' + user.uid + '/').set(user);
	}

	public getUsu(id) {
		return this.db.object('users/' + id).valueChanges();
	}


	public post(user) {
		return firebase.firestore().doc('usuarios/' + user.uid).set(user);
	}

	public getUser(id) {
		return firebase.firestore().collection('usuarios').where('uid', "==", id).get()
	}

	public storeUserData(user) {
		localStorage.setItem('id_token', user);
		localStorage.setItem('usuario', JSON.stringify(user));
		// this.authToken = token;
		this.user = user;
	}

	public editUser(user) {
		return firebase.firestore().collection('usuarios').doc(user.uid).set(user)
	}

	public getUsers() {
		return firebase.firestore().collection('usuarios').get();
	}

	public getUsersAdmin() {
		return firebase.firestore().collection('usuarios').where('tipo', "==", 'Administrador').get();
	}

	public deleteUser(id) {
		return firebase.firestore().doc('usuarios/' + id).delete()
	}
	public eliminarUsuario(usuario) {
		return firebase.firestore().collection('usuarios').doc(usuario.uid).delete();
	}
}
