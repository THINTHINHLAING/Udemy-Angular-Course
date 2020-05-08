import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]', // this is attribute selector
  //selector: '.app-servers', // this is class selector
  //templateUrl: './servers.component.html',
  //template:'<app-server></app-server><app-server></app-server>',
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
