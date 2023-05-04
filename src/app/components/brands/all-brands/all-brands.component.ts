import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand, BrandService } from 'src/app/services/inventory/brand.service';

@Component({
  selector: 'app-all-brands',
  templateUrl: './all-brands.component.html',
  styleUrls: ['./all-brands.component.css']
})
export class AllBrandsComponent implements OnInit {

  brands: Brand[] | undefined;
  responseErrorMessage: Object | undefined
  successDeleteMessage: string | undefined

  constructor(
    private brandService: BrandService,
    private router: Router) {}

  ngOnInit(): void {
    this.loadBrands()
  }

  loadBrands() {
    return this.brandService.getBrands().subscribe((data) => {
      this.brands = data;
    });
  }

  handleException() {
    this.brandService.brandFailure().subscribe(
      error => this.handleErrorResponse(error)
    );
  }

  handleErrorResponse(error: Object) {
    console.log(error)
    // console.log(error)
    this.responseErrorMessage = error
  }

  findBrandById(brandId: number) {
    this.brandService.getBrand(brandId).subscribe(
      response => console.log(response)
    );
  }
  addBrand() {
    this.router.navigate(['/brand', -1]);
  }
  // Delete employee
  deleteBrand(brandId: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.brandService.deleteBrand(brandId).subscribe((data) => {
        this.loadBrands();
        this.successDeleteMessage = `Brand ${brandId} has been deleted..`;
      });
    }
  }



  updateBrand(brandId: number) {
    this.router.navigate(['/brand', brandId]);
  }
}

