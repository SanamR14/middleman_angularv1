import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from "@angular/flex-layout";

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [MatGridListModule,NgFor,MatCardModule,MatButtonModule,FlexLayoutModule,],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss'
})
export class TileComponent {

  gridColumns = 3;
  constructor(){}

  tiles= [
    {category:"Home-made", product:"Oil",productName:"SR Hair Oil", price:"200", description:"Home made oil used as a remedy for hair loss. It strengthens your root and helps in the hair growth and reduces the hair loss.", image:"../assets/SR Hair Oil.jpg", quantity:"10"},
    {category:"Hand-made", product:"Bag",productName:"SR Pocket Bags", price:"200", description:"Home made oil used as a remedy for hair loss. It strengthens your root and helps in the hair growth and reduces the hair loss.", image:"../assets/SR Pocket bags.webp", quantity:"10"},
    {category:"Hand-made", product:"Basket",productName:"SR Baskets", price:"200", description:"Home made oil used as a remedy for hair loss. It strengthens your root and helps in the hair growth and reduces the hair loss.", image:"../assets/SR Baskets.webp", quantity:"10"},
    {category:"Agricultural", product:"Rice",productName:"SR Ponni Rice", price:"200", description:"Home made oil used as a remedy for hair loss. It strengthens your root and helps in the hair growth and reduces the hair loss.", image:"../assets/SR Ponni Rice.jpeg", quantity:"10"},
    {category:"Small-scale", product:"Nighty",productName:"SR Nighty", price:"200", description:"Home made oil used as a remedy for hair loss. It strengthens your root and helps in the hair growth and reduces the hair loss.", image:"../assets/SR Nighty.jpeg", quantity:"10"},
    {category:"Agricultural", product:"Corn",productName:"SR Sweet Corn", price:"200", description:"Home made oil used as a remedy for hair loss. It strengthens your root and helps in the hair growth and reduces the hair loss.", image:"../assets/SR Sweet Corn.jpg", quantity:"10"},
    {category:"Hand-made", product:"Napkins",productName:"SR Napkins", price:"200", description:"Home made oil used as a remedy for hair loss. It strengthens your root and helps in the hair growth and reduces the hair loss.", image:"../assets/SR Napkins.webp", quantity:"10"},
    {category:"Agricultural", product:"Coconut",productName:"SR Coconuts", price:"200", description:"Home made oil used as a remedy for hair loss. It strengthens your root and helps in the hair growth and reduces the hair loss.", image:"../assets/SR Coconuts.jpeg", quantity:"10"},
    {category:"Home-made", product:"Biscuits",productName:"SR Butter Cookies", price:"200", description:"Home made oil used as a remedy for hair loss. It strengthens your root and helps in the hair growth and reduces the hair loss.", image:"../assets/SR Butter Cookies.jpg", quantity:"10"},
    {category:"Home-made", product:"Chocolates",productName:"SR Chocolates", price:"200", description:"Home made oil used as a remedy for hair loss. It strengthens your root and helps in the hair growth and reduces the hair loss.", image:"../assets/SR Chocolates.jpg", quantity:"10"}
  
  ]

}
