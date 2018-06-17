import { Http, RequestOptions, Headers} from '@angular/http';
import { HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the SenhasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SenhasProvider {
  private baseApiPath = 'http://192.168.1.6:8080/arqsw_sdesk_a4_solucao_parcial/rest/';

  constructor(public http: Http, private toastCtrl: ToastController) {
    console.log('Hello SenhasProvider Provider');
  }
  getPainel(){
    return this.http.get(this.baseApiPath+'painel');
  }
  getSenhas(){
    return this.http.get(this.baseApiPath+'senhas');
  }
  getServicos(){
    return this.http.get(this.baseApiPath+'servicos');
  }
  setSenha(data:any){
    var myJsonString = JSON.stringify(data);
    console.log(myJsonString);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Access-Control-Allow-Credentials", "true");
    headers.append("Access-Control-Allow-Headers", "content-type, if-none-match");
    headers.append("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Max-Age", "3600");

    let options = new RequestOptions({ headers: headers });

    this.http.post(this.baseApiPath+'senhas', data).subscribe(
      data => {        
        let toast = this.toastCtrl.create({
          message: 'Senha criada com sucesso',
          duration: 1500,
          position: 'top'
        });
        const response = (data as any);
        console.log(response);     
        toast.present();
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
        }, error => {
        console.log(error)
        }
    );
  }
}
