import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand, BrandService } from 'src/app/services/inventory/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brandId: any = null;
  brand: Brand = new Brand(0, '', '', new Date(), new Date(), '');

  constructor(
    private brandService: BrandService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.brandId = this.route.snapshot.paramMap.get('brandId');
    this.retreiveBrand(this.brandId);
  }

  retreiveBrand(brandId: any) {
    this.brandService.findBrandById(brandId).subscribe(
      data => this.brand = data,
    );
  }

  saveBrand(){

  }

}


