import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { TextInputComponent } from './text-input/text-input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { TextareaInputComponent } from './textarea-input/textarea-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    DynamicFormComponent,
    TextInputComponent,
    NumberInputComponent,
    TextareaInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
