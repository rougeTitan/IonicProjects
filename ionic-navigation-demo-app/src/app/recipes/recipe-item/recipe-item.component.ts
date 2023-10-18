import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.page.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe | undefined;
  
  constructor() { }

  ngOnInit() {
  }

}