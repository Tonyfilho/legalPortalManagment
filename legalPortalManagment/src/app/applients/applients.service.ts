import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, take } from 'rxjs';
import { ApplientClass } from 'src/assets/class/appient';

@Injectable({
  providedIn: 'root'
})
export class ApplientsService {

  private localId = new BehaviorSubject<number>(0);
  serviceIdReturn = this.localId.asObservable();
  
  applients:ApplientClass[] = [];


  constructor(private httpClient: HttpClient) {}

  getApplients() {
    const localApplients = this.httpClient.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    return localApplients.pipe(take(1)) && this.applients;
  }
  getApplientById(id: number) {
    const localApplients = this.httpClient.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return localApplients.pipe(take(1))  && this.applients[id].id;
  }

  getId(id: number): void {
    //emite um Observable do ID
    this.localId.next(id);
  }

  postUser(applient: ApplientClass) {
    this.applients.push(applient);
    return this.httpClient.post(
      `https://httpbin.org/post`,
      JSON.stringify(applient)
    ).pipe(take(1)); //JSON é uma API de JSON q o browser vai usar, o stringify é o metodo de conversão de Objeto JS / JSON.
  }
}
