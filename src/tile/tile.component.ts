import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIcon } from '@angular/material/icon';
import { Tile } from '../modals/product.modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [MatGridListModule,NgFor,MatCardModule,MatButtonModule,FlexLayoutModule,MatIcon,NgIf],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss'
})


export class TileComponent {

  tiles: Tile[]= [
    {category:"Home-made", product:"Oil",productName:"SR Hair Oil", price:"180", unitsAvailable:"200", image:"../assets/SR Hair Oil.jpg", unitQuantity:"200ml",description:"Our SR hair oil is a blend of nature’s finest ingredients, designed to nourish, strengthen, and rejuvenate your hair from root to tip. Made with love and care, this 100% natural formula.Perfect for all hair types, our homemade hair oil is free from artificial chemicals, parabens, and sulfates, ensuring your hair receives pure nourishment."},
    {category:"Hand-made", product:"Bag",productName:"SR Bags", price:"300",unitsAvailable:"10" , image:"../assets/SR Pocket bags.webp", unitQuantity:"1", description:"SR Bags is a collection where craftsmanship meets creativity! Each bag is meticulously handcrafted by skilled artisans, blending tradition with contemporary design. Perfect for those who appreciate slow fashion, these handmade bags offer a personal touch and timeless beauty, making them more than just accessories – they're wearable art. Whether you're heading to work, a weekend getaway, or a night out, our collection has the perfect bag to complement your lifestyle and make a statement. Explore the charm and individuality of artisan-made bags and carry your essentials in style!"},
    {category:"Hand-made", product:"Basket",productName:"SR Baskets", price:"150", unitsAvailable:"25" , image:"../assets/SR Baskets.webp", unitQuantity:"1", description:"Our handmade baskets blend artistry and functionality, meticulously crafted by skilled artisans using sustainable, natural materials. Each basket tells a unique story, showcasing traditional weaving techniques passed down through generations. Whether you're organizing your home, displaying fresh produce, or adding a touch of rustic charm to your décor, these versatile baskets bring beauty and utility to any space. Available in a variety of shapes, sizes, and designs, our handmade baskets are perfect for storage, picnics, or as decorative centerpieces."},
    {category:"Agricultural", product:"Rice",productName:"SR Ponni Rice", price:"1200", unitsAvailable:"10" , image:"../assets/SR Ponni Rice.jpeg", unitQuantity:"25kgs", description:"SR Ponni Rice is a premium variety of rice, renowned for its soft texture, delicate aroma, and superior taste. Its light, non-sticky nature makes it a favorite for health-conscious consumers and an excellent option for diabetic diets. Whether you're preparing traditional South Indian meals or experimenting with global cuisines, Ponni Rice guarantees the perfect foundation for any dish. Enjoy the natural goodness and authentic taste of Ponni Rice in every bite!"},
    {category:"Small-scale", product:"Nighty",productName:"SR Nighty", price:"200", unitsAvailable:"20" , image:"../assets/SR Nighty.jpeg", unitQuantity:"1", description:"where comfort meets elegance! Crafted from the finest, breathable fabrics, this nightdress is designed to make you feel relaxed and pampered all night long. With its soft, silky texture, it glides effortlessly against your skin, ensuring a comfortable sleep."},
    {category:"Agricultural", product:"Corn",productName:"SR Sweet Corn", price:"100", unitsAvailable:"23" , image:"../assets/SR Sweet Corn.jpg", unitQuantity:"10", description:"Sweet Corn is a delicious, versatile vegetable known for its naturally sweet flavor and satisfying crunch. Rich in vitamins A, B, and C, as well as dietary fiber, sweet corn not only tastes great but also offers essential nutrients. Its naturally sweet taste pairs beautifully with butter, herbs, and spices, creating a wholesome and tasty dish for any occasion. Enjoy the fresh, farm-to-table goodness of sweet corn—perfect for barbecues, family dinners, or a quick snack."},
    {category:"Hand-made", product:"Napkins",productName:"SR Napkins", price:"140", unitsAvailable:"10" , image:"../assets/SR Napkins.webp", unitQuantity:"5", description:"Crafted from high-quality, absorbent material, our napkins are soft to the touch yet durable enough to handle any spill. Each napkin is generously sized for versatility, making them ideal for both everyday meals and special occasions. With a range of colors and patterns available, they seamlessly complement any table decor."},
    {category:"Agricultural", product:"Coconut",productName:"SR Coconuts", price:"110", unitsAvailable:"15" , image:"../assets/SR Coconuts.jpeg", unitQuantity:"10", description:"Experience the tropical taste of paradise with our Fresh Organic Coconuts! Handpicked from sustainable farms, these coconuts are packed with natural hydration and a rich, creamy flavor. Each coconut contains refreshing coconut water, perfect for drinking, and a delicious layer of coconut meat, ideal for cooking, snacking, or adding to smoothies."},
    {category:"Home-made", product:"Biscuits",productName:"SR Butter Cookies", price:"75", unitsAvailable:"12" , image:"../assets/SR Butter Cookies.jpg", unitQuantity:"100grms", description:"Delight in the rich, buttery goodness of our Classic Butter Cookies, crafted with care using the finest ingredients. Each cookie is a perfect balance of crisp texture and melt-in-your-mouth smoothness, baked to golden perfection. Made with real butter, these timeless treats offer a simple yet indulgent flavor that is both comforting and irresistible."},
    {category:"Home-made", product:"Chocolates",productName:"SR Chocolates", price:"120", unitsAvailable:"10" , image:"../assets/SR Chocolates.jpg", unitQuantity:"100grms", description:"Indulge in the rich, velvety goodness of our homemade chocolates, crafted with love and care from the finest ingredients. Each piece is a perfect blend of smooth, melt-in-your-mouth chocolate, carefully balanced with a variety of decadent flavors like creamy caramel, roasted nuts, and luscious fruits. Our chocolates are handcrafted in small batches to ensure every bite is as fresh and delicious as the next. Whether you're treating yourself or looking for the perfect gift, these artisanal delights promise to deliver a moment of pure joy and indulgence. Savor the difference in every bite!"}
  
  ]
  @Input() product = false;
 
  @Input() featured = this.tiles;

  gridColumns = 3;
  constructor(private productService: ProductService, private router: Router,private route: ActivatedRoute,){}


  addToBasket(product: Tile) {
   let productRoute = product.productName.trim();
    this.productService.setSelectedProduct(product);
    // this.router.navigate(['/',productRoute]);
    this.router.navigate(['productDetails'],{relativeTo:this.route})
  }

}
