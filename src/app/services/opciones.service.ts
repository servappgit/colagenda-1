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
		{ tiempo: 10, metros: '25m2/250ft2' },
		{ tiempo: 20, metros: '50m2/500ft2' },
		{ tiempo: 30, metros: '75m2/750ft2' },
		{ tiempo: 40, metros: '100m2/1000ft2' },
		{ tiempo: 50, metros: '125m2/1250ft2' },
		{ tiempo: 60, metros: '150m2/1500ft2' },
		{ tiempo: 70, metros: '175m2/1750ft2' },
		{ tiempo: 80, metros: '200m2/2000ft2' },
		{ tiempo: 90, metros: '225m2/2250ft2' },
		{ tiempo: 100, metros: '250m2/2500ft2' },
		{ tiempo: 110, metros: '275m2/2750ft2' },
		{ tiempo: 120, metros: '300m2/3000ft2' },
		{ tiempo: 140, metros: '350m2/3500ft2' },
		{ tiempo: 160, metros: '400m2/4000ft2' },
		{ tiempo: 180, metros: '450m2/4500ft2' },
		{ tiempo: 200, metros: '500m2/5000ft2' },
		{ tiempo: 220, metros: '550m2/5500ft2' },
		{ tiempo: 240, metros: '600m2/6000ft2' },
		{ tiempo: 260, metros: '650m2/6500ft2' },
		{ tiempo: 280, metros: '700m2/7000ft2' },
		{ tiempo: 300, metros: '750m2/7500ft2' },
	];
	public tiempoCocinas: any = [
			{ tiempo: 0, cantidad: 0 },
			{ tiempo: 60, cantidad: 1 },
			{ tiempo: 120, cantidad: 2 },
			{ tiempo: 180, cantidad: 3 },
			{ tiempo: 240, cantidad: 4 },
			{ tiempo: 300, cantidad: 5 },

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
		{ tiempo: 10, cantidad: 1 },
		{ tiempo: 20, cantidad: 2 },
		{ tiempo: 30, cantidad: 3 },
		{ tiempo: 40, cantidad: 4 },
		{ tiempo: 50, cantidad: 5 },
		{ tiempo: 60, cantidad: 6 },
		{ tiempo: 70, cantidad: 7 },
		{ tiempo: 80, cantidad: 8 },
		{ tiempo: 90, cantidad: 9 },
		{ tiempo: 100, cantidad: 10 },
	];

	public tiempoPlatos: any = [
		{ tiempo: 0, cantidad: 'NO' },
		{ tiempo: 10, cantidad: '10 pcs' },
		{ tiempo: 20, cantidad: '20 pcs' },
		{ tiempo: 30, cantidad: '30 pcs' },
		{ tiempo: 40, cantidad: '40 pcs' },
		{ tiempo: 50, cantidad: '50 pcs' },
		{ tiempo: 60, cantidad: '60 pcs' },
		{ tiempo: 70, cantidad: '70 pcs' },
		{ tiempo: 80, cantidad: '80 pcs' },
		{ tiempo: 90, cantidad: '90 pcs' },
		{ tiempo: 100, cantidad: '100 pcs' },
	];

	public tiempoComida: any = [
		{ tiempo: 0, tipo: 'NO' },
		{ tiempo: 30, tipo: 'Breakfast' },
		{ tiempo: 60, tipo: 'Launch' },
		{ tiempo: 60, tipo: 'Dinner' },
		{ tiempo: 60, tipo: '3 meals' },
		{ tiempo: 120, tipo: '6 meals' },
		{ tiempo: 180, tipo: '9 meals' },
		{ tiempo: 240, tipo: '12 meals' },
		{ tiempo: 300, tipo: '15 meals' },
		{ tiempo: 360, tipo: '18 meals' },
		{ tiempo: 420, tipo: '24 meals' },
	];

	public tiempoLavanderia: any = [
		{ tiempo: 0, cantidad: 'NO' },
		{ tiempo: 20, cantidad: '1 load' },
		{ tiempo: 40, cantidad: '2 loads' },
		{ tiempo: 60, cantidad: '3 loads' },
		{ tiempo: 80, cantidad: '4 loads' },
		{ tiempo: 100, cantidad: '5 loads' },
		{ tiempo: 120, cantidad: '6 loads' },
		{ tiempo: 140, cantidad: '7 loads' },
		{ tiempo: 160, cantidad: '8 loads' },
		{ tiempo: 180, cantidad: '9 loads' },
		{ tiempo: 200, cantidad: '10 loads' },
	];

	public tiempoPlanchado: any = [
		{ tiempo: 30, piezas: 'NO' },
		{ tiempo: 30, piezas: '15pcs' },
		{ tiempo: 60, piezas: '30pcs' },
		{ tiempo: 90, piezas: '45pcs' },
		{ tiempo: 120, piezas: '60pcs' },
		{ tiempo: 150, piezas: '75pcs' },
		{ tiempo: 180, piezas: '90pcs' },
		{ tiempo: 210, piezas: '105pcs' },
		{ tiempo: 240, piezas: '120pcs' },
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
