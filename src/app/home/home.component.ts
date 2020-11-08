import { Component, OnInit } from '@angular/core';
import { firestore} from 'firebase';
import { Router } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {  }

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
