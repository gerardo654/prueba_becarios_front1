import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nvbar',
  templateUrl: './nvbar.component.html',

})
export class NvbarComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit()  {
  }

}
