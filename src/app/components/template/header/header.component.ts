import { Component } from '@angular/core';
import { HeaderService } from '../../product/service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private headerService: HeaderService
  ){}

  get title(): string {
    return this.headerService.getHeaderData.title;
  }
  
  get icon(): string {
    return this.headerService.getHeaderData.icon;
  }
  
  get routeUrl(): string {
    return this.headerService.getHeaderData.routeUrl;
  }
}
