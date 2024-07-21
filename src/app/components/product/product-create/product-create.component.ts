import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  formulario!: FormGroup;

  ngOnInit(): void {
      this.formulario = this.formBuilder.group({
        name: ['', Validators.required],
        price: ['', Validators.required]
      });
  }

  createProduct(): void {
    if(!this.formulario.valid)
      return; 
    const product: Product = {
      name: this.formulario.value.name,
      price: +this.formulario.value.price
    };

    this.productService.createProduct(product).subscribe(() => {
      this.productService.showMensage("Produto criado!")
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
