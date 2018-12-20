
import { Component, OnInit, Input } from '@angular/core';
import { FormUser, User } from '../ModelFolder/FormUser';
import { ActivatedRoute } from '@angular/router';
// import { UserService} from '../ServiceFolder/collegue.service'

@Component({
  selector: 'app-detail-collegue',
  template: `
    <p>
      detail-collegue works!
    </p>
  `,
  styles: []
})
export class DetailCollegueComponent implements OnInit {
  @Input () user : User
  nom: string
  prenom: string 
  email: string
  adresse : string 
  phone : string 

  constructor(private route: ActivatedRoute, private ps : any) {

    this.user.nom = route.snapshot.paramMap.get("nomCollegue")
     ps.chercherParNom(this.user.nom).subscribe(op => this.user = op )

   }

  ngOnInit() {
  }

}
