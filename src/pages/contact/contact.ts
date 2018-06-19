import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ItemPainel } from '../../Model/ItemPainel';
import { SenhasProvider } from '../../providers/senhas/senhas';
import { Observable } from 'rxjs/Observable';

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
	public items = Array<any>();
	private task;
	public continente;

	constructor(public navCtrl: NavController, public navParams: NavParams, public senhasProvider: SenhasProvider) {
		this.task = setInterval(() => {
			this.carregaPainel();
		}, 100000);
  }
	//irParaDestino(pais: Pais): void {
	//	this.navCtrl.push(DetalhePage, { paisSelecionado: pais });
	//}

	carregaPainel():void{		
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
