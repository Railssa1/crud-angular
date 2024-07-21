import { Component } from '@angular/core';
import { HeaderService } from 'src/app/components/product/service/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private headerService: HeaderService,
  ){
    this.headerService.setHeaderData = {
      title: "Início",
      icon: "home",
      routeUrl: ""
    };
  }
}
