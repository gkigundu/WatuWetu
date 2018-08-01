import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _title: string = 'Watu Wetu';
  private _logo: string = 'https://www.worldatlas.com/webimage/flags/coat_of_arms/Kenya.png' ;

  get title(){
    return this._title;
  }
  get logo(){
    return this._logo;
  }
}
