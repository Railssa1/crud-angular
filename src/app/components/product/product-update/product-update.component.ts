import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      name: [''],
      price: ['']
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(product => {
      this.formulario = this.formBuilder.group({
        id: [product.id],
        name: [product.name],
        price: [product.price]
      });
    });
  }

  updateProduct(): void {
    const product: Product = {
      id: this.formulario.value.id,
      name: this.formulario.value.name,
      price: this.formulario.value.price
    };
    this.productService.update(product).subscribe(() => {
      this.productService.showMensage("Produto atualizado com sucesso!");
      this.router.navigate(['/products']);      
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
