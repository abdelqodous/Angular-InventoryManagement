import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

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
  // Define API
  apiURL = 'http://localhost:9090';

  constructor(private httpClient: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "http://localhost:9090" ,
      "Access-Control-Allow-Credentials": "true",
      'Content-Type':  'application/json',
      "Access-Control-Allow-Methods" : "GET, POST, PUT, DELETE, OPTIONS",
      credentials: 'include'
    })
  };
  getBrands(): Observable<Brand[]> {
    return this.httpClient
      .get<Brand[]>(this.apiURL + '/api/inventory/v1/brands')
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
  
  /*findAllBrands() {
    return this.httpClient.get<Brand[]>('http://localhost:9090/api/inventory/v1/brands');
  }*/

  brandFailure() {
    return this.httpClient.get('http://localhost:9090/api/inventory/v1/brand-failure');
  }

  getBrand(id: any): Observable<Brand> {
    return this.httpClient
      .get<Brand>(this.apiURL + '/api/inventory/v1/brands/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  /*findBrandById(brandId: number) {
    return this.httpClient.get<Brand>(`http://localhost:9090/api/inventory/v1/brands/${brandId}`);
  }*/

  createBrand(brand: any): Observable<Brand> {
    return this.httpClient
      .post<Brand>(
        this.apiURL + '/api/inventory/v1/brands',
        JSON.stringify(brand),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  /*createBrand(brand: Brand) {
    return this.httpClient.post<Brand>(`http://localhost:9090/api/inventory/v1/brands/`, brand);
  }*/

  updateBrand(id: any, brand:Brand): Observable<Brand> {
    return this.httpClient
      .put<Brand>(
        this.apiURL + '/api/inventory/v1/brands/' + id,
        JSON.stringify(brand),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  /*updateBrand(brand: Brand) {
    return this.httpClient.put(`http://localhost:9090/api/inventory/v1/brands/`, brand, this.httpOptions);
  }*/

  deleteBrand(id: any) {
    return this.httpClient
      .delete<Brand>(this.apiURL + '/api/inventory/v1/brands/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  /*deleteBrand(brandId: number) {
    return this.httpClient.delete(`http://localhost:9090/api/inventory/v1/brands/${brandId}`);
  }*/

}
