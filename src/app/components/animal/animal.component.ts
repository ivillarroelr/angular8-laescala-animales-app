import { Component } from '@angular/core';
// Capturar el valor de un param dinamico de la url
import { ActivatedRoute } from '@angular/router';
import {AnimalesService} from '../../servicios/animales.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styles: []
})
export class AnimalComponent {

  animal: any = {};

  constructor(private activatedRoute: ActivatedRoute, private animalesService: AnimalesService) {
    this.activatedRoute.params.subscribe(params => {
      this.animal = this.animalesService.getAnimal(params['id']);
      console.log(this.animal);
    });
  }


}
