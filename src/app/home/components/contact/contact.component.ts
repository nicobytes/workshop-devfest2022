import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class Contact implements OnInit {

  last_name = '';

  constructor() {}

  ngOnInit(): void {

  }
}
