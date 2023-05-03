import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  getContact(): { Nom: string, Prenom: string, Tel: string, Date_naissance: Date, Status: string }[] {
    var users = [
      {
        Nom: "yassine",
        Prenom: "ahmed",
        Tel: "1234567890",
        Date_naissance: new Date(2002, 1, 1),
        Status: 'active'
      },
      {
        Nom: "Jane",
        Prenom: "Doe",
        Tel: "0987654321",
        Date_naissance: new Date(1998, 5, 10),
        Status: 'inactive'
      },
      {
        Nom: "Bob",
        Prenom: "Smith",
        Tel: "5555555555",
        Date_naissance: new Date(1985, 8, 30),
        Status: 'active'
      }
    ];
  
    return users;
  }
  getData(): string {
    return 'Hello, world!';
  } 
}
