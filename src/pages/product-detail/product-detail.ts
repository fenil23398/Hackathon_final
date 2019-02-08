// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { product_detail_one } from '../../all_classes/product_first_class';
import { inventory } from '../../all_classes/inventory_class';
import { ProductDbProvider } from '../../providers/product-db/product-db';
import { SellerPage } from '../seller/seller';
// import { BuyProductPage } from '../buy-product/buy-product';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SellersPage } from "../sellers/sellers";
import { BuyProductPage } from "../buy-product/buy-product";

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  productDetail:product_detail_one;
  stock=0;
  prod_price=0;
  prod_delivery=0;
  products:inventory[];
  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public inventorydb:ProductDbProvider
    ) {


    }


    ionViewCanEnter() {
    this.productDetail=this.navParams.get('product_detail');
    console.log(this.productDetail.product_id);
    this.inventorydb.getInventory(this.productDetail.product_id).subscribe((data:inventory[])=>{
      this.products=data;
      if(this.products.length>0){
        this.prod_price=this.products[0].price;
        this.prod_delivery=this.products[0].delivery;
      }
      this.stock=0;
      this.products.forEach(element => {
        this.stock=this.stock+element.stock;
      });
      // this.stock=parseInt(this.stock+"");
    },(err)=>{
        console.log(err);
    },()=>{

    });

    // console.log('ionViewDidLoad ProductDetailPage');
  }
  gotoSeller(){
    this.navCtrl.push(SellerPage,{prod:this.productDetail,sellers:this.products});
  }
  buyProduct(){
    this.navCtrl.push(BuyProductPage,{prod:this.productDetail,seller:this.products[0]});
  }


}
