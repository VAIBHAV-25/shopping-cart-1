import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { ProductListModule } from './product-list/product-list.module'; // Import the feature module


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ProductListModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}