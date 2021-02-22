import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeDirective } from './font-size.directive';
import { IsAuthorizedDirective } from './is-authorized.directive';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeDirective,
    IsAuthorizedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
