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
    private router: Router) { }

  ngOnInit(): void {
    this.retreiveBrands()
  }

  retreiveBrands(){
    this.brandService.findAllBrands().subscribe( 
      response => this.brands = response
      // this.brands = response.Brand;
      //   this.date3 = this.datePipe.transform(this.demographics.Birthdate, 'dd.mm.yy');
    );
  }

  findAllBrands(){
    this.brandService.findAllBrands().subscribe( 
      response => {
        this.brands = response,
        console.log ('this.brands: date: ', this.brands[0].createdAt)
      }
    );
  }

  handleException(){
    this.brandService.brandFailure().subscribe( 
      error => this.handleErrorResponse(error)
      );
  }

  handleErrorResponse(error: Object){
    console.log(error)
    // console.log(error)
    this.responseErrorMessage = error
  }

  findBrandById(brandId: number){
    this.brandService.findBrandById(brandId).subscribe( 
      response => console.log(response)
    );
  }

  deleteBrand(brandId: number){
    this.brandService.deleteBrand(brandId).subscribe( 
      response => {
        console.log(response);
        this.successDeleteMessage = `Brand ${brandId} has been deleted..`;
        this.retreiveBrands();
      }
    );
  }
  
  updateBrand(brandId: number){
    this.router.navigate(['/brand', brandId]);
    // this.brandService.updateBrand(brandId).subscribe( 
    //   response => {
    //     console.log(response);
    //     this.successDeleteMessage = `Brand ${brandId} has been deleted..`;
    //     this.retreiveBrands();
    //   }
    // );
  }
}

