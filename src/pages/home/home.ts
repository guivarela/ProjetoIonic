import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SenhasProvider } from '../../providers/senhas/senhas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public senha;
  constructor(public navCtrl: NavController, public navParams: NavParams, public senhasProvider: SenhasProvider) {

  }

  createSenha(){

  }

}
