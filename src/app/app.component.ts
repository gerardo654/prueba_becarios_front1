import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'cvtarea';

  constructor(
    // tslint:disable-next-line:variable-name
    private _http: HttpClient
  ) {
    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe
    (data => console.log(data),
      err => console.log(err),
      () => console.log("Peticion finalizada")
      )
  }
}
