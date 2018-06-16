import { Servico } from './Servico';

export interface Subservico{
    id:number;
    nomeSubservico:string;
    servico:Servico;
}