import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderLinkComponent } from './header/header-link/header-link.component';
import { FooterLinkComponent } from './footer/footer-link/footer-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderLinkComponent,
    FooterLinkComponent
  ],
  imports: [
    BrowserModule
  ],
  exports:[
    HeaderLinkComponent,
    FooterLinkComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
