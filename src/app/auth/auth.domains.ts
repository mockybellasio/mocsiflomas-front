/**
 * Collègue utilisateur de l'application.
 */
export class Collegue {
  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
  roles: string[];

  constructor(params: any) {
    Object.assign(this, params);
  }

  estAnonyme(): boolean {
    return this.email == undefined || this.email == '';
  }

  estAdmin(): boolean {
    for(let i=0; this.roles && i < this.roles.length; i++){
      if(this.roles[i] == 'ROLE_ADMINISTRATEUR'){
        return true
      }
    }
    return false
  }

  estUtilisateur(): boolean{
    for(let i=0; this.roles && i < this.roles.length; i++){
      if(this.roles[i] == 'ROLE_UTILISATEUR'){
        return true
      }
    }
    return false
  }
}