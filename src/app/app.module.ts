import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import{ ProductComponent } from './Components/product.component';
import { CartComponent } from './cart/cart.component';
import { ExponentialPipe } from './exponential.pipe';
import { HiDirective } from './hi.directive';

@NgModule({
  declarations:[
    AppComponent,
    ProductComponent,
    CartComponent,
    ExponentialPipe,
    HiDirective
  ],
  imports:[
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
