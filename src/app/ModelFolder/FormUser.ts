export class FormUser {
    prenom: string;
    nom: string;
    dateN:Date;
    email:string;
    password:string;
    adress:string;
    phone:string;
}

export class User extends FormUser{
    imgProfil:string;
}