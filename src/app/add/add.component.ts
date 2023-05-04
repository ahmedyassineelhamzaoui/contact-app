import { Component,NgZone } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder} from '@angular/forms';
import { Contact } from '../contact';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
    myContact :  Contact = new Contact();
    constructor(
      public  formBuilder:FormBuilder,
      private contactservice:ContactService,
      private router:Router,
      private ngZone: NgZone
      ) {    
    }
    onSubmit() {
      this.contactservice.addContact(this.myContact)
      .subscribe(()=>{
        console.log('contact added successfuly');
        this.ngZone.run(()=> this.router.navigateByUrl('/home'))
      },(err)=>{
        console.log(err);
      })
    }
    
}
