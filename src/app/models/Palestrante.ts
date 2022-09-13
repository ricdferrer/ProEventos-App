import { Evento } from "./Evento";
import { RedeSocial } from "./RedeSocial";

export interface Palestrante {
  id: number;
  nome: string;
  descricao: string;
  imagemURL: string;
  email: string;
  telefone: string;
  redesSociais: RedeSocial[];
  palestrantesEventos: Evento[];
}
