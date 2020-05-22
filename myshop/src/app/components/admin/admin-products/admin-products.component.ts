import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  constructor(public mainService: MainService) { }

  newProduct = {
    thumbnail: '',
    title: '',
    price: 0,
    category: ''
  };

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.mainService.getProducts(this.mainService.productsRequest);
  }

}
