
import { Servico } from './Servico';
import { Subservico } from './Subservico';

export interface ItemPainel{
    idSenha:number;
    statusSenha:string;
    senha:string;
    categoria:string;
    horaGerada:string;
    tempoMedio:string;
    servico:Servico;
    Subservico:Subservico;
}