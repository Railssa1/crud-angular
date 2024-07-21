import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ){}

  formulario!: FormGroup;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [''],
      name: [{ value: '', disabled: true}],
      price: [{value: '', disabled: true}]
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(product => {
      this.formulario.patchValue({
        id: [product.id],
        name: [product.name],
        price: [product.price]
      });
    });
  }

  deleteProduct(): void{
    this.productService.delete(this.formulario.value.id).subscribe(() => {
      this.productService.showMensage("Produto deletado com sucesso!");
      this.router.navigate(['/products']);
    });
  }
  
  cancel(): void{
    this.router.navigate(['/products']);
  }
}
