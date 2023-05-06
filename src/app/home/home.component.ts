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
  deleteIndex : number =-1 ;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe((response) => {
        this.contacts = response.contacts;
        console.log(response.contacts);
      });
  }


  editContact(index : number){
    const box = document.querySelector('#editContactModal') as HTMLDivElement;
    console.log(index);
    box.classList.add('flex');
    box.classList.remove('hidden');
    this.contacts.forEach(element => {
      if(element.id == index){
        this.contactToEdit.id = element.id; 
        this.contactToEdit.Nom = element.Nom; 
        this.contactToEdit.Prenom = element.Prenom; 
        this.contactToEdit.Date_naissance = element.Date_naissance; 
        this.contactToEdit.Tel = element.Tel; 
      }
    });
    
    this.editIndex = index;
    console.log(this.editIndex);
  }
  hidContacteModal(){
    const box = document.querySelector('#editContactModal') as HTMLDivElement;
    box.classList.add('hidden');
    box.classList.remove('flex');
  }
    saveChanges(){
      this.contactService.updateContact(this.contactToEdit,this.editIndex).subscribe((response) => {
        var updateContact = new Contact();
        updateContact.id = response.contact.id;
        updateContact.Nom = response.contact.Nom;
        updateContact.Prenom = response.contact.Prenom;
        updateContact.Date_naissance = response.contact.Date_naissance;
        updateContact.Tel = response.contact.Tel;
        this.contacts.forEach(element => {
          if(element.id == this.editIndex){
             element.id = updateContact.id;
             element.Nom = updateContact.Nom;
             element.Prenom = updateContact.Prenom;
             element.Date_naissance = updateContact.Date_naissance;
             element.Tel = updateContact.Tel;
          }
        });
        this.contactToEdit.id = 0;
        this.contactToEdit.Nom ='';
        this.contactToEdit.Prenom = '';
        this.contactToEdit.Date_naissance = new Date("1900-01-01") 
        this.contactToEdit.Tel = '';
      })
    }
    deleteContact(index : number){
      const deleteModal = document.querySelector('#delete-Contact') as HTMLDivElement;
      this.deleteIndex = index;
      deleteModal.classList.add('flex');
      deleteModal.classList.remove('hidden');
    }
    hidDeleteModal(){
      const box = document.querySelector('#delete-Contact') as HTMLDivElement;
      box.classList.add('hidden');
      box.classList.remove('flex');
    }
    // removeContact(i: number) {
    //   this.deleteIndex = 
    // }
}   
