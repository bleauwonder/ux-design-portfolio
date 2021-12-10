import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderTitleComponent } from './home-cards/header-title/header-title.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactCardComponent } from './home-cards/contact-card/contact-card.component';
import { ContactPageCardComponent } from './page-cards/contact-page-card/contact-page-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    HeaderTitleComponent,
    ContactComponent,
    ContactCardComponent,
    ContactPageCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
