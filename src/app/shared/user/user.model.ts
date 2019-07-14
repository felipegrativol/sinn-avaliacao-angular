import { Papel } from './papel.model';

export class User {
  uuid: string;
  nome: string;
  email: string;
  interno: boolean;
  cpf: string;
  roles: Papel[];
  areaUsuario: string;
  perfil: string;
}
