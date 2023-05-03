import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Date : Date = new Date();
  users: any[] = [
    {
      Nom: "yassine",
      Prenom: "ahmed",
      Tel: "1234567890",
      Date_naissance: new Date(2002, 1, 1),
      Status:'active'
    },
    {
      Nom: "Jane",
      Prenom: "Doe",
      Tel: "0987654321",
      Date_naissance: new Date(1998, 5, 10),
      Status:'inactive'
    },
    {
      Nom: "Bob",
      Prenom: "Smith",
      Tel: "5555555555",
      Date_naissance: new Date(1985, 8, 30),
      Status:'active'
    }
  ];
  removeContact(i: number): void {
    console.log('Index of contact to remove:', i);
  }
}
