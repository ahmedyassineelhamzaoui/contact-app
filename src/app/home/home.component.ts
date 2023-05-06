import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Date : Date = new Date();
  contacts: any[] = [];
  contactToEdit : Contact = new Contact(); 
  editIndex : number = -1 ;
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

  editContact(index : number){
    const box = document.querySelector('#editContactModal') as HTMLDivElement;
    box.classList.add('flex');
    box.classList.remove('hidden');
    this.contactToEdit.id = this.contacts[index].id; 
    this.contactToEdit.Nom = this.contacts[index].Nom; 
    this.contactToEdit.Prenom = this.contacts[index].Prenom; 
    this.contactToEdit.Date_naissance = this.contacts[index].Date_naissance; 
    this.contactToEdit.Tel = this.contacts[index].Tel; 
    this.editIndex = index;
  }
  hidContacteModal(){
    const box = document.querySelector('#editContactModal') as HTMLDivElement;
    box.classList.add('hidden');
    box.classList.remove('flex');
  }
    saveChanges(){
      this.contactService.updateContact(this.contactToEdit,this.editIndex + 1).subscribe((response) => {
        var updateContact = new Contact();
        updateContact.id = response.contact.id;
        updateContact.Nom = response.contact.Nom;
        updateContact.Prenom = response.contact.Prenom;
        updateContact.Date_naissance = response.contact.Date_naissance;
        updateContact.Tel = response.contact.Tel;
        this.contacts[this.editIndex] = updateContact;
        this.contactToEdit.id = 0;
        this.contactToEdit.Nom ='';
        this.contactToEdit.Prenom = '';
        this.contactToEdit.Date_naissance = new Date("1900-01-01") 
        this.contactToEdit.Tel = '';
      })
    }
}
