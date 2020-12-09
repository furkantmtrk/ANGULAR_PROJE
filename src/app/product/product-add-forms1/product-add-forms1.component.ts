import { Category } from './../../category/category';
import { catchError } from 'rxjs/operators';
import { CategoryService } from './../../services/category.service';
import { product } from './../product';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers: [CategoryService],
})
export class ProductAddForms1Component implements OnInit {
  constructor(private CategoryService: CategoryService) {}
  model: product = new product();
  categories: Category[];

  ngOnInit(): void {
    this.CategoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  add(form: NgForm) {
    console.log(form.value.name);
  }
}
