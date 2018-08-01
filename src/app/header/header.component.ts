import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _title: string = '';
  private _logo: string = '';
  constructor() {
   }

  ngOnInit() {
  }
  @Input()
  set title(title: string){
    this._title = (title && title.trim()) || '<no title set>';
  }
  get title(){    return this._title;   }
  @Input()
  set logo(logo: string){
    this._logo = (logo && logo.trim()) || 'http://via.placeholder.com/30x30';
    console.log(logo);
  }
  get logo(){    return this._logo;   }
}
