import { Component, OnInit } from '@angular/core';
import {importType} from '@angular/compiler/src/output/output_ast';
import {Cliente} from '../../modelo';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  Cliente: Cliente;
  onSubmit(form) {
    console.log(this.Cliente);
  }
  constructor() {
    this.Cliente = new Cliente();
  }

  ngOnInit() {
  }

}
