import { Injectable } from '@angular/core';
import * as firebase from "firebase/app";


@Injectable()
export class DireccionService {
    constructor() {
    }
    public getDireccion(idUsuario) {
        return firebase.firestore().collection('direccion').where('idUsuario', "==", idUsuario).get();
    }

    public getDireccionByUser(idUsuario) {
        return firebase.firestore().collection('direccion').where('idUsuario', "==", idUsuario);
    }

    public guardarDireccion(infoDireccion) {
        return firebase.firestore().doc('direccion/' + infoDireccion.idUsuario).set(Object.assign({}, infoDireccion));
    }
}