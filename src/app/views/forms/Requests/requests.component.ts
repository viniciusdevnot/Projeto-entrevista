import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { CarroService } from './carro.service';
import { ICarro } from './ICarros';

@Component({
  selector: 'app-requests-form',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  constructor(private carroService: CarroService) { }

  ngOnInit() {
 
  }



  obterTodosCarros() {
    this.carroService.obterTodos()
      .then(carros => console.log(carros))
      .catch(error => console.error(error));
  }



  obterSomenteUm() {
    this.carroService.obterPorId(8)
      .then(carro => console.log(carro))
      .catch(error => console.error(error));
  }

  adicionarCarro() {
    const carro: ICarro = {
      nome: "i40",
      marca: "hyundai"
    };

    this.carroService.adicionar(carro)
      .then(carro => console.log('🟢 Adicionado'))
      .catch(error => console.error(error));
  }

  atualizar() {
    const carro: ICarro = {
      id: 8,
      nome: "golzin",
      marca: "woskvagen"
    };

    this.carroService.atualizar(carro)
      .then(carro => console.log('🔵 Att', carro))
      .catch(error => console.error(error));
  }

  remover() {
    this.carroService.delete(8)
      .then(res => console.log('🔴 Removido', res))
      .catch(error => console.error(error));
  }

}