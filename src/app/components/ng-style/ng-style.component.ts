import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
  <!-- OJO aqui deberia ser font-Size pero no se coloca asi cuando se usa el ngStyle-->
    <p [style.fontSize.px]= "tamano">
      Hola mundo esta es una etiqueta...
    </p>
    <button class="btn btn-primary m-3" (click)="tamano = tamano + 5">
          <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary m-3" (click)="tamano = tamano - 5">
          <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano: number = 15;
  constructor() { }

  ngOnInit() {
  }

}
