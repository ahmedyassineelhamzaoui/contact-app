import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Date : Date = new Date();
  users: { Nom: string, Prenom: string, Tel: string, Date_naissance: Date, Status: string }[];
   constructor(private contactService: ContactService) {
    this.users = contactService.getContact();
  }
  removeContact(i: number): void {
    this.users.splice(i,1);
    console.log('contact is deleted successfuly');
  }

}
