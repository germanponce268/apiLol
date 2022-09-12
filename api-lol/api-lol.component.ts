import { Component, OnInit } from '@angular/core';

interface Busqueda {
  summonerName: string ;
}

@Component({
  selector: 'app-api-lol',
  templateUrl: './api-lol.component.html',
  styleUrls: ['./api-lol.component.css']
})
export class ApiLolComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  busqueda: Busqueda = {
    summonerName : ''
  }

  buscar(){
    console.log('Toma!')
  }
}
