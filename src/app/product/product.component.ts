import { ProductService } from './../services/product.service';
import { AlertifyService } from './../services/alertify.service';
import { Category } from './../category/category';
import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { ActivatedRoute } from '@angular/router';

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
    private productService: ProductService,
    private activatedRoute:ActivatedRoute
  ) {}
  title = 'Ürün Listesi';
  filterText = '';
  products: product[];

  ngOnInit() {

    this.activatedRoute.params.subscribe(params=>{
        this.productService.getProducts(params["categoryId"]).subscribe((data)=>{
          this.products = data;
        });
     })
 }

 addToCart(product) {
     this.alertifyService.success(product.name + ' Sepete Eklendi ');
   }

  }
