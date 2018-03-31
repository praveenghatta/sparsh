import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FiltersComponent } from './filters/filters.component';
import { SparshbodyComponent } from './sparshbody/sparshbody.component';
import { LoginComponent } from './header/login/login.component';
import { MenuComponent } from './header/menu/menu.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { SearchComponent } from './header/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FiltersComponent,
    SparshbodyComponent,
    LoginComponent,
    MenuComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    MegaMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
