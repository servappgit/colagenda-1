import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpModule, Http, Headers } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public authToken: any;
  public user: any;
  //baseURL: String = "http://localhost:8080/"
  baseURL: String = "http://serv-admin.herokuapp.com/";
  headers: Headers;

  constructor(private angularFireAuth: AngularFireAuth,
    public httpModule: HttpModule,
    private db: AngularFireDatabase,
    private http: Http) { }

  loginEmailUser(email, password) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logoutUser() {
    return this.angularFireAuth.auth.signOut();
  }

  registerUser(datos: any) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(datos.email, datos.clave)
      .then(userData => {
        this.guardarUsuario(datos, userData.user);
      }
      );
  }

  private guardarUsuario(datos, user) {
    datos.id = user.uid;
    const userRef = this.db.database.ref('users/' + datos.id)
    const data = {
      id: datos.id,
      name: datos.name,
      apellido: datos.apellido,
      email: datos.email,
      telefono: datos.telefono,
      rol: datos.rol,
      tipo: datos.tipoUser,
      estado: 'activo',
      fecha: Date.now(),
    };
    return userRef.set(data);
  }

  public storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('usuario', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  registerServer(datos: any) {
    if (datos.email && datos.clave) {
      return this.angularFireAuth.auth.createUserWithEmailAndPassword(datos.email, datos.clave)
        .then(userData => {
          if (userData.user.uid) {
            this.guardarServer(datos, userData.user);
          }
        });
    }
  }

  private guardarServer(datos, user) {
    datos.id = user.uid;
    const userRef = this.db.database.ref('server/' + datos.id)
    const data = {
      id: datos.id,
      cedula: datos.cedula,
      name: datos.name,
      apellido: datos.apellido,
      direccionResidencia: datos.direccion,
      email: datos.email,
      foto: datos.foto,
      telefono: datos.telefono,
      fechaNacimiento: datos.fechaNacimiento,
      frase: datos.frase,
      balance: 0,
      terminos: 'true',
      estado: 'Activo',
      fecha: Date.now(),
    };
    return userRef.set(data);
  }

  DeleteServerAuth(object: String, data: any) {
    return this.http.post(this.baseURL + '' + object, data, { headers: this.headers })
      .pipe(
        map(res => res.json())
      )
  }

  deleteServer(id) {
    return this.db.object('server/' + id).remove();
  }
}
