import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  
  

  constructor(private httpClient: HttpClient) { }

  findAllBrands() {
    return this.httpClient.get<Brand[]>('http://localhost:9090/brands/v1/all-brands');
  }

  brandFailure() {
    return this.httpClient.get('http://localhost:9090/brands/v1/brand-failure');
  }

  findBrandById(brandId: number) {
    return this.httpClient.get<Brand>(`http://localhost:9090/brands/v1/brand-by-id/${brandId}`);
  }

  deleteBrand(brandId: number) {
    return this.httpClient.delete(`http://localhost:9090/brands/v1/delete-brand/${brandId}`);
  }

  updateBrand(brand: Brand) {
    return null; //this.httpClient.put<brand>(`http://localhost:9090/brands/v1/update-brand/${brand}`);
  }
}
