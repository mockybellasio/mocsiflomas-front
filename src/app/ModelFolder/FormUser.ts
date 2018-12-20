export class FormUser {
    prenom: string;
    nom: string;
    dateN: Date;
    email: string;
    password: string;
    verifPassWord = function (psw2: string) { return this.password == psw2 }
    adress: string;
    phone: string;
}

export class User extends FormUser {
    imgProfil: string;
}