import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './components/star/star.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductdetailComponent,
    StarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Khai FormsModule để sử dụng tow-wayBiding
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
