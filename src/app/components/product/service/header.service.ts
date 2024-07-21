import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from '../models/header-data';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerData = new BehaviorSubject<HeaderData>({
    title: "Início",
    icon: "home",
    routeUrl: ""
  });

  get getHeaderData(): HeaderData {
    return this.headerData.value;
  }

  set setHeaderData(headerData: HeaderData) {
    this.headerData.next(headerData);
  }

  constructor() { }
}
