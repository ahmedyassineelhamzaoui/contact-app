import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
    constructor(private contactservice:ContactService) {}
}
