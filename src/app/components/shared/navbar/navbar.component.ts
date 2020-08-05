import { Component, OnInit } from '@angular/core';
// Para navegar a una ruta desde un componente
import { Router } from '@angular/router';

// navigate para rutas dinamicas (ej doctor/1)
// navigateByUrl para rutas estaticas (ej home)


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  buscarAnimal(termino: string) {
    console.log(termino);
    this.router.navigate(['/buscar', termino]);
  }

}
