import { Component, OnInit } from '@angular/core';
import { absoluteRoutesNames } from './../../../shared/absolute-routes.names';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  absoluteRoutesNames = absoluteRoutesNames;

  constructor() { }

  ngOnInit(): void {
  }

}
