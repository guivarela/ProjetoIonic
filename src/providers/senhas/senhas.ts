import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SenhasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SenhasProvider {
  private baseApiPath = 'http://192.168.1.6:8080/arqsw_sdesk_a4_solucao_parcial/rest/';

  constructor(public http: Http) {
    console.log('Hello SenhasProvider Provider');
  }
  getPainel(){
    return this.http.get(this.baseApiPath+'painel');
  }
  setSenha(data:any, header:any){
    this.http.post(this.baseApiPath+'senhas', data, header);
  }

}
