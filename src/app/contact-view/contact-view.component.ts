import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bm-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {

  constructor( private $router: Router ) { }

  ngOnInit() {
  }

  goHome () {
    this.$router.navigate( [ 'home' ] );
  }
}
