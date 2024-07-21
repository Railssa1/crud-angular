import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BASE_URL = 'http://localhost:3001/products';
  
  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMensage(mensage: string, isError = false) {
    this.snackBar.open(mensage, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: !isError ? ['msg-success'] : ['msg-erro']
    });
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.BASE_URL, product).pipe(
      map(resp => resp),
      catchError(() => {
        this.showMensage("Error ao criar produto");
        return EMPTY;
      })
    );
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL).pipe(
      map(resp => resp),
      catchError(() => {
        this.showMensage("Error ao recuperar produto");
        return EMPTY;
      })
    );
  }

  readById(id: string): Observable<Product> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.get<Product>(url).pipe(
      map(resp => resp),
      catchError(() => {
        this.showMensage("Error ao recuperar produto");
        return EMPTY;
      })
    );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.BASE_URL}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map(resp => resp),
      catchError((error) => {
        this.showMensage("Error ao atualizar produto");
        return EMPTY;
      })
    );
  }

  delete(id: string): Observable<Product> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map(resp => resp),
      catchError((error) => {
        this.showMensage("Error ao deletar produto");
        return EMPTY;
      })
    );
  }
}
