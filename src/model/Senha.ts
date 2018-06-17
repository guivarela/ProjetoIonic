import { Servico } from './Servico';
import { Subservico } from './Subservico';

export interface Senha{
    statusSenha:string,
    senha:string,
    categoria:string,
    horaGerada:string,
    servico:Servico,
    subservico:Subservico
}