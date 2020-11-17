import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gracias',
  templateUrl: './gracias.component.html',
  styleUrls: ['./gracias.component.scss']
})
export class GraciasComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit(): void {
  }
public navigateHome(){
  this.router.navigate(['servicios']);
}
  

}
