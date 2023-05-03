import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Nom: string = "John";
  Prenom: string = "Doe";
  Tel: number = 1234567890;
  Date_naissance : number = 2002;
  Date: Date = new Date();
}
