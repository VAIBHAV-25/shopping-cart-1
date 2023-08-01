import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import { ProductService } from '../services/product.service';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, FormsModule],
  providers: [ProductService],
  exports: [ProductListComponent], // If you want to use the component in other modules
})
export class ProductListModule {}