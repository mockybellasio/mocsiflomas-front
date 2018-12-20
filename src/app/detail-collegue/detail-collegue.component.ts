
import { Component, OnInit, Input } from '@angular/core';
import { FormUser, User } from '../ModelFolder/FormUser';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../ServiceFolder/collegue.service';
import { Collegue } from '../auth/auth.domains';
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
  user: Collegue
  nom: string
  email: string

  constructor(private route: ActivatedRoute, private _collegueService: CollegueService) {

    this.nom = route.snapshot.paramMap.get("nomCollegue")
    this._collegueService.chercherParEmail(this.user.email)
    .subscribe(u => this.user = u)
  }

  ngOnInit() {
  }

}
