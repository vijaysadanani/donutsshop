import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Donuts  } from '../interfaces/donut';
import { Donutdetail } from '../interfaces/donutdetail';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  subject = new Subject<any>();
  cart: Donutdetail[] = [];
  constructor(private httpClient: HttpClient) { }

  getAllDonuts(): Observable<Donuts>{ 
    return this.httpClient.get<Donuts>(environment.apiEndpoint);
  }

  getDonutById(id: number): Observable<Donutdetail>{
    return this.httpClient.get<Donutdetail>(environment.apiEndpoint2 + id + '.json');
  }

  addToCart(donutDetails: Donutdetail) {
    this.cart.push(donutDetails);
    if(this.cart != undefined){
      localStorage.setItem("cartArray", JSON.stringify(this.cart));
      this.subject.next('changed');
    }
  }
}
