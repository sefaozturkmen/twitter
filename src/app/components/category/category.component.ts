import { Component, OnInit } from '@angular/core';
import { CategoryList } from 'src/app/datasources';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryList = CategoryList

  constructor() { }

  ngOnInit(): void {
  }

}
