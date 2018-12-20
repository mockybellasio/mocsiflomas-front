import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
    
  styles: []
})
export class MonCompteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private CollegueService) {
  }
  ngOnInit() {
  }

}
