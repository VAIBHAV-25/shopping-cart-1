// src/app/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  selectedCategory: string;
  filteredProducts: Product[];
  uniqueCategories: string[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = this.products;
      this.uniqueCategories = this.getUniqueCategories() as string[];
      this.uniqueCategories = this.uniqueCategories.filter(item => item !== undefined); // Use type assertion
    });
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.filteredProducts = this.selectedCategory
      ? this.products.filter((product) => product.p_category === this.selectedCategory)
      : this.products;
  }

  getUniqueCategories(): (string | undefined)[] {
    return [...new Set(this.products.map((product) => product.p_category))];
  }

  onQuantityChange(product: Product, quantity: number | undefined): void {
    // Update the quantity property for the product
    product.quantity = quantity!;
  }

  onSubmit(): void {
    // Display the JSON in a dialog on submit
    const jsonString = JSON.stringify(this.products, null, 2);
    alert(jsonString);
  }
}
