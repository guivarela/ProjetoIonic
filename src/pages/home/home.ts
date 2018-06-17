import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SenhasProvider } from '../../providers/senhas/senhas';
import { Senha } from '../../model/Senha';
import { Servico } from '../../model/Servico';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public servicos = Array<Servico>();;
  public senhas = Array<Senha>();;
  public senhasPorServico = Array<Senha>();;
  private servico;
  private senha:Senha;
  private novaSenha;
  private x;
  private y;
  private z;
  private sigla;
  private data;
  constructor(public navCtrl: NavController, public navParams: NavParams, public senhasProvider: SenhasProvider) {

  }

  ionViewDidLoad() {
		this.senhasProvider.getServicos().subscribe(
		  data => {
			const response = (data as any);
			const objeto_retorno = JSON.parse(response._body);
			this.servicos = objeto_retorno;
			console.log(response);
		  }, error => {
			console.log(error)
		  }
    )
		this.senhasProvider.getSenhas().subscribe(
		  data => {
			const response = (data as any);
			const objeto_retorno = JSON.parse(response._body);
			this.senhas = objeto_retorno;
      this.senha = this.senhas[-1];
			console.log(response);
		  }, error => {
			console.log(error)
		  }
		)
		console.log('ionViewDidLoad ContactPage');
    }

  criarSenha(servico:number): void{
    this.senhasPorServico = this.senhas.filter(senha => senha.servico.id == servico);
    this.senha = this.senhasPorServico[this.senhasPorServico.length-1];
    delete this.senha["idSenha"]
    this.x = +this.senha.senha.substring(this.senha.senha.length - 1);
    this.y = +this.senha.senha.substring(this.senha.senha.length - 2, this.senha.senha.length - 1);
    this.z = +this.senha.senha.substring(this.senha.senha.length - 3, this.senha.senha.length - 2);
    this.sigla = this.senha.senha.substring(0, 2);

    if(this.x == 9) {
        if(this.y == 9) {
            if(this.z != 9) {
                this.x = 0;
                this.y = 0;
                this.z += 1;
                this.novaSenha = this.z + "" +  this.y + "" + this.x;
            }
            if(this.z == 9) {
                this.x = 0;
                this.y = 0;
                this.z = 0;
                this.novaSenha = this.z + "" +  this.y + "" + this.x;
            }
        }else {
            this.x = 0;
            this.y += 1;
            this.novaSenha = this.z + "" +  this.y + "" + this.x;
        }
    }else {
        this.x += 1;
        this.novaSenha = this.z + "" +  this.y + "" + this.x;
    }
    this.novaSenha = this.sigla + this.novaSenha;
    this.senha.senha = this.novaSenha;
    this.data = new Date();
    this.senha.horaGerada = this.data.toTimeString().split(' ',1)[0];
    this.senhasProvider.setSenha(this.senha);
    
  }

}
