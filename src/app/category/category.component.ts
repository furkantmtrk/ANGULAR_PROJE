import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title= "katagori listesi"
  categories : Category[]= [
    {id:1, name:"Elektronik"},
    {id:1, name:"Bilgisayar"},
    {id:1, name:"Müzik"},
    {id:1, name:"İletişim"},
  ]
  ngOnInit(): void {
  }

}
