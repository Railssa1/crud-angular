import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/product/service/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent {
  constructor(
    private router: Router,
    private headerService: HeaderService
  ){
    this.headerService.setHeaderData = {
      title: "Cadastro de produtos",
      icon: "storefront",
      routeUrl: "/products"
    }
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }
}
