import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-link',
  templateUrl: './header-link.component.html',
  styleUrls: ['./header-link.component.css']
})
export class HeaderLinkComponent implements OnInit {
  private _name:string ='';
  constructor() {
   }

  ngOnInit() {
  }
  @Input()
  set name(name: string){
    this._name=name;
  }
  get name(){ return this._name;}
}
