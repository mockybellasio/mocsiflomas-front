
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../ModelFolder/FormUser';
import { DetailCollegueService } from './detail-collegue.service';

// import { UserService} from '../ServiceFolder/collegue.service'

@Component({
  selector: 'app-detail-collegue',
 templateUrl: './detail-collegue.component.html',
    
  styles: []
})
export class DetailCollegueComponent implements OnInit {
  
file;

  monModel= new User();
  messageError: string;
  verif: string;

  constructor(protected _detailService: DetailCollegueService, private router: Router) {
  }
  ngOnInit() {
  }

  submit() {
    
      if (this.file) {
        this._detailService.creerCollegue(this.file).subscribe(col => {
          this._detailService.modifierCollegue(this.monModel, col)
            .then(() => this.router.navigate(['/collegue/moncompte']).catch((error) => this.messageError=error.error.message))
        });
      } else {
        this._detailService.modifierCollegue(this.monModel, undefined)
          .then(() => this.router.navigate(['/collegue/moncompte']))
          .catch(error=>this.messageError=error.error.message)
        
      }
  
    }

  }


