export class Contact {
    id : number;
    Nom : string;
    Prenom :string;
    Tel : string;
    Date_naissance :  Date;
    constructor(){
        this.id = 0;
        this.Nom = '';
        this.Prenom = '';
        this.Tel = '';
        this.Date_naissance = new Date("2023-05-04");
    }
}
