import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  constructor(private productService: ProductService){}

  products!: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];

  ngOnInit(): void {
    this.productService.read().subscribe(products => this.products = products);
  }
}
