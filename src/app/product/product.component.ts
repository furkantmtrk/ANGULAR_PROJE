import { ProductService } from './../services/product.service';
import { AlertifyService } from './../services/alertify.service';
import { Category } from './../category/category';
import { Component, OnInit } from '@angular/core';
import { product } from './product';

declare let alertify: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService
  ) {}
  title = 'Ürün Listesi';
  filterText = '';
  products: product[];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product) {
    this.alertifyService.success(product.name + ' Sepete Eklendi ');
  }
}
