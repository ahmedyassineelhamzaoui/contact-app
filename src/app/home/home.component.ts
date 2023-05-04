import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Date : Date = new Date();
  contacts: any[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe((response) => {
        this.contacts = response.contacts;
      });
  }
  removeContact(i: number): void {
    this.contacts.splice(i,1);
    console.log('contact is deleted successfuly');
  }

}
