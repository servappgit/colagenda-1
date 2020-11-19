import { Component, OnInit } from '@angular/core';
import { EpaycoService } from '../../app/services/epayco.service';
import { EpaycoTransaction } from '../../app/models/epayco.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { serviceService } from '../services/service.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {
	refPayco: string = ''
  transactionResponse:any ;
  servicioAgendado:any ;
  params :any ;
  constructor(
  private epaycoService: EpaycoService,
  private activatedRoute: ActivatedRoute,
  private authService: AuthService,
  private ServicioService: serviceService

  ) { }

  ngOnInit() {
	this.activatedRoute.queryParams.subscribe(params => {
       this.refPayco= params['ref_payco'] || params['x_ref_payco'];
       this.params = params
       console.log(params);

       this.servicioAgendado = this.authService.storeGetUserData('servicioAgendado');
  console.log(this.servicioAgendado)
  // añadimos las propiedades del checkout y mandamos el servicio a la base de datos como orden de servicio
  this.servicioAgendado.referenciaPago = this.params.x_id_invoice
  this.servicioAgendado.estadoPago = this.params.x_transaction_state
  this.servicioAgendado.fechaPago = this.params.x_transaction_date
  console.log(this.servicioAgendado)
  //this.ServicioService.registerServicio(this.servicioAgendado);
   });
  	this.epaycoService.getTransactionResponse(this.refPayco)
    .subscribe((data: EpaycoTransaction) =>{
        this.transactionResponse = data.data
    });
  }

}