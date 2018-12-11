import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styles: []
})
export class FormInscriptionComponent implements OnInit {

  constructor() { }

  onFileChanged(event) {
    const file = event.target.files[0];
    console.log(file);
  }

  ngOnInit() {
  }

}
