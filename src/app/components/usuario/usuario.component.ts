import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    console.log("Soy el padre");
    this.router.params.subscribe( parametro => {console.log(parametro)});
  }

  ngOnInit() {
  }

}
