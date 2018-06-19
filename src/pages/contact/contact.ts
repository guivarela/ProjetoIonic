import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ItemPainel } from '../../Model/ItemPainel';
import { SenhasProvider } from '../../providers/senhas/senhas';
import { Observable } from 'rxjs/Observable';
import { Senha } from '../../model/Senha';
import { ItemPainel } from '../../model/ItemPainel';

/**
 * Generated class for the ListaPaisesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html',
	providers: [
	  SenhasProvider
	]
})
export class ContactPage {
	public previsoes = Array<any>();
	public items = Array<ItemPainel>();
	public teste = Array<any>();
	private task;
	public continente;

	constructor(public navCtrl: NavController, public navParams: NavParams, public senhasProvider: SenhasProvider) {
		this.task = setTimeout(() => {
			for (let x of this.previsoes){
				for (var _i = 0; _i < this.items.length; _i++) {
					if (x.subservico.id == this.items[_i].subservico.id){
						this.items[_i].previsao = x.tempoMedio;
					}
				}
			}
		}, 500);
  }
	//irParaDestino(pais: Pais): void {
	//	this.navCtrl.push(DetalhePage, { paisSelecionado: pais });
	//}

	carregaPainel():void{
		this.senhasProvider.getPrevisao().subscribe(
		  data => {
			const response = (data as any);
			const objeto_retorno = JSON.parse(response._body);
			this.previsoes = objeto_retorno;
			console.log(response);
		  }, error => {
			console.log(error)
		  }
    )
		this.senhasProvider.getPainel().subscribe(
		  data => {
			const response = (data as any);
			const objeto_retorno = JSON.parse(response._body);
			this.items = objeto_retorno;
			console.log(response);
		  }, error => {
			console.log(error)
		  }
		)
		console.log('ionViewDidLoad ContactPage');
	}

	ionViewDidLoad() {
		this.senhasProvider.getPrevisao().subscribe(
		  data => {
			const response = (data as any);
			const objeto_retorno = JSON.parse(response._body);
			this.previsoes = objeto_retorno;
			console.log(response);
		  }, error => {
			console.log(error)
		  }
    )
		this.senhasProvider.getPainel().subscribe(
		  data => {
			const response = (data as any);
			const objeto_retorno = JSON.parse(response._body);
			this.items = objeto_retorno;
			console.log(response);
		  }, error => {
			console.log(error)
		  }
		)
		console.log('ionViewDidLoad ContactPage');
	  }

}
