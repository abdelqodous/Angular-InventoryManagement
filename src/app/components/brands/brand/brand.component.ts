import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand, BrandService } from 'src/app/services/inventory/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  pkHidden: Boolean = true;
  brandId: any = null;
  brand: Brand = new Brand(0, '', '', new Date(), new Date(), '');

  constructor(
    private brandService: BrandService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.brandId = this.route.snapshot.paramMap.get('brandId');
    if (this.brandId != -1) {
      this.loadBrand(this.brandId);
    }
  }

  loadBrand(brandId: any) {
    this.brandService.getBrand(brandId).subscribe(
      data => {
        this.brand = data
      }
    );
  }

  createBrand() {
    this.brandService.createBrand(this.brand).subscribe(
      data => {
        console.log(data),
          this.router.navigate(['/all-brands'])
      }
    );
  }

  // Update employee data
  updateBrand() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.brandService.updateBrand(this.brandId, this.brand).subscribe(
        data => {
          console.log(data),
            this.router.navigate(['/all-brands'])
        }
      );
    }
  }

  saveBrand() {
    if (this.brandId == -1) {
      this.createBrand();
    } else {
      this.updateBrand();
    }
  }

}




