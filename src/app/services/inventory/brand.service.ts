import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { httpOptions } from '../security/constants';

export class Brand{
  constructor(
    public id: number, 
    public title: string, 
    public summary: string, 
    public createdAt:Date, 
    public updatedAt:Date, 
    public content:string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'http://localhost:9090/v1/api/inventory';

  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<Brand[]> {
    const headers:HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    }); 

    return this.httpClient
      .get<Brand[]>(`${this.apiUrl}/brands`, {headers})
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  brandFailure() {
    return this.httpClient.get(`${this.apiUrl}/brand-failure`);
  }

  getBrand(id: any): Observable<Brand> {
    const headers:HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    }); 
    return this.httpClient
      .get<Brand>(`${this.apiUrl}/brands/` + id, {headers})
      .pipe(retry(1), catchError(this.handleError));
  }

  createBrand(brand: any): Observable<Brand> {
    const headers:HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    }); 
    console.log(headers);
    return this.httpClient
      .post<Brand>(`${this.apiUrl}/brands`, JSON.stringify(brand), {headers})
      .pipe(retry(1), catchError(this.handleError));
  }

  updateBrand(id: any, brand:Brand): Observable<Brand> {
    const headers:HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    }); 
    return this.httpClient
      .put<Brand>( `${this.apiUrl}/brands/` + id,JSON.stringify(brand), {headers})
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteBrand(id: any) {
    const headers:HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    }); 
    return this.httpClient
      .delete<Brand>(`${this.apiUrl}/brands/` + id, {headers})
      .pipe(retry(1), catchError(this.handleError));
  }
}
