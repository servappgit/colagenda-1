import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})


export class OpcionesService {

	public servicios: any = [
		{ nombre: 'SERV Hogares', tipo: 'HomeCleaning' },
		{ nombre: 'SERV Empresas', tipo: 'BusinessCleaning' },
		{ nombre: 'SERV Desinfección', tipo: 'Disinfection' },
		{ nombre: 'SERV Ayudante', tipo: 'Helper' },
	];

	public horasServicios: any = [
		{ hora: '6:00 am', valor: '6:00' },
		{ hora: '7:00 am', valor: '7:00' },
		{ hora: '8:00 am', valor: '8:00' },
		{ hora: '9:00 am', valor: '9:00' },
		{ hora: '10:00 am', valor: '10:00' },
		{ hora: '11:00 am', valor: '11:00' },
		{ hora: '12:00 am', valor: '12:00' },
		{ hora: '1:00 pm', valor: '13:00' },
		{ hora: '2:00 pm', valor: '14:00' },
		{ hora: '3:00 pm', valor: '15:00' },
		{ hora: '4:00 pm', valor: '16:00' },
		{ hora: '5:00 pm', valor: '17:00' },
		{ hora: '6:00 pm', valor: '18:00' },
	];

	public areasGenerales: any = [
		{ tiempo: 10, metros: '25m2' },
		{ tiempo: 20, metros: '50m2' },
		{ tiempo: 30, metros: '75m2' },
		{ tiempo: 40, metros: '100m2' },
		{ tiempo: 50, metros: '125m2' },
		{ tiempo: 60, metros: '150m2' },
		{ tiempo: 70, metros: '175m2' },
		{ tiempo: 80, metros: '200m2' },
		{ tiempo: 90, metros: '225m2' },
		{ tiempo: 100, metros: '250m2' },
		{ tiempo: 110, metros: '275m2' },
		{ tiempo: 120, metros: '300m2' },
		{ tiempo: 140, metros: '350m2' },
		{ tiempo: 160, metros: '400m2' },
		{ tiempo: 180, metros: '450m2' },
		{ tiempo: 200, metros: '500m2' },
		{ tiempo: 220, metros: '550m2' },
		{ tiempo: 240, metros: '600m2' },
		{ tiempo: 260, metros: '650m2' },
		{ tiempo: 280, metros: '700m2' },
		{ tiempo: 300, metros: '750m2' },
	];
	public tiempoCocinas: any = [
			{ tiempo: 0, cantidad: 'NO' },
			{ tiempo: 60, cantidad: 1 },
			{ tiempo: 120, cantidad: 2 },
			{ tiempo: 180, cantidad: 3 }
		

		];

	public tiempoCuartos: any = [
		{ tiempo: 0, cantidad: 0 },
		{ tiempo: 30, cantidad: 1 },
		{ tiempo: 60, cantidad: 2 },
		{ tiempo: 90, cantidad: 3 },
		{ tiempo: 120, cantidad: 4 },
		{ tiempo: 150, cantidad: 5 },
		{ tiempo: 180, cantidad: 6 },
		{ tiempo: 210, cantidad: 7 },
		{ tiempo: 240, cantidad: 8 },
		{ tiempo: 270, cantidad: 9 },
		{ tiempo: 300, cantidad: 10 },
	];

	public tiempoBanos: any = [
		{ tiempo: 0, cantidad: 0 },
		{ tiempo: 30, cantidad: 1 },
		{ tiempo: 60, cantidad: 2 },
		{ tiempo: 90, cantidad: 3 },
		{ tiempo: 120, cantidad: 4 },
		{ tiempo: 150, cantidad: 5 },
		{ tiempo: 180, cantidad: 6 },
		{ tiempo: 210, cantidad: 7 },
		{ tiempo: 240, cantidad: 8 },
		{ tiempo: 270, cantidad: 9 },
		{ tiempo: 300, cantidad: 10 },
	];

	public tiempoDesks: any = [
		{ tiempo: 0, cantidad: 0 },
		{ tiempo: 15, cantidad: 1 },
		{ tiempo: 30, cantidad: 2 },
		{ tiempo: 45, cantidad: 3 },
		{ tiempo: 60, cantidad: 4 },
		{ tiempo: 75, cantidad: 5 },
		{ tiempo: 90, cantidad: 6 },
		{ tiempo: 105, cantidad: 7 },
		{ tiempo: 120, cantidad: 8 },
		{ tiempo: 135, cantidad: 9 },
		{ tiempo: 150, cantidad: 10 },
	];

	public tiempoPlatos: any = [
		{ tiempo: 0, cantidad: 'NO' },
		{ tiempo: 10, cantidad: '10 piezas' },
		{ tiempo: 20, cantidad: '20 piezas' },
		{ tiempo: 30, cantidad: '30 piezas' },
		{ tiempo: 40, cantidad: '40 piezas' },
		{ tiempo: 50, cantidad: '50 piezas' },
		{ tiempo: 60, cantidad: '60 piezas' },
		{ tiempo: 70, cantidad: '70 piezas' },
		{ tiempo: 80, cantidad: '80 piezas' },
		{ tiempo: 90, cantidad: '90 piezas' },
		{ tiempo: 100, cantidad: '100 piezas' },
	];

	public tiempoComida: any = [
		{ tiempo: 0, tipo: 'NO' },
		{ tiempo: 30, tipo: 'Desayuno' },
		{ tiempo: 60, tipo: 'Almuerzo' },
		{ tiempo: 60, tipo: 'Cena' },
		{ tiempo: 60, tipo: '3 comidas' },
		{ tiempo: 120, tipo: '6 comidas' },
		{ tiempo: 180, tipo: '9 comidas' },
		{ tiempo: 240, tipo: '12 comidas' },
		{ tiempo: 300, tipo: '15 comidas' },
		{ tiempo: 360, tipo: '18 comidas' },
		{ tiempo: 420, tipo: '24 comidas' },
	];

	public tiempoLavanderia: any = [
		{ tiempo: 0, cantidad: 'NO' },
		{ tiempo: 20, cantidad: '1 carga' },
		{ tiempo: 40, cantidad: '2 cargas' },
		{ tiempo: 60, cantidad: '3 cargas' },
		{ tiempo: 80, cantidad: '4 cargas' },
		{ tiempo: 100, cantidad: '5 cargas' },
		{ tiempo: 120, cantidad: '6 cargas' },
		{ tiempo: 140, cantidad: '7 cargas' },
		{ tiempo: 160, cantidad: '8 cargas' },
		{ tiempo: 180, cantidad: '9 cargas' },
		{ tiempo: 200, cantidad: '10 cargas' },
	];

	public tiempoPlanchado: any = [
		{ tiempo: 0, piezas: 'NO' },
		{ tiempo: 30, piezas: '15 prendas' },
		{ tiempo: 60, piezas: '30 prendas' },
		{ tiempo: 90, piezas: '45 prendas' },
		{ tiempo: 120, piezas: '60 prendas' },
		{ tiempo: 150, piezas: '75 prendas' },
		{ tiempo: 180, piezas: '90 prendas' },
		{ tiempo: 210, piezas: '105 prendas' },
		{ tiempo: 240, piezas: '120 prendas' },
	];

	constructor() { }

	public tipoServicio() {
		return this.servicios;
	}

	public horaServicio() {
		return this.horasServicios;
	}

	public tiempoGenerales() {
		return this.areasGenerales;
	}

	public cuartos() {
		return this.tiempoCuartos;
	}

	public cocina() {
		return this.tiempoCocinas;
	}

	public banos() {
		return this.tiempoBanos;
	}

	public desk() {
		return this.tiempoDesks;
	}

	public platos() {
		return this.tiempoPlatos;
	}

	public comida() {
		return this.tiempoComida;
	}

	public lavanderia() {
		return this.tiempoLavanderia;
	}

	public planchado() {
		return this.tiempoPlanchado;
	}

}
