import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Root,Result } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angucoso';
  obs!:Observable<any>
  listaP! :any[]
  constructor(private a:HttpClient){
  
     this.obs = this.a.get('https://pokeapi.co/api/v2/type')
     this.obs.subscribe(this.getData)
  }

  getData = (data:Root) => {
    this.listaP = data.results

  }

}
