import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FeedbackPage } from "../feedback/feedback";

import { product_detail_one } from '../../all_classes/product_first_class';

import { inventory } from '../../all_classes/inventory_class';

import { ProductDbProvider } from "../../providers/product-db/product-db";
import { order } from '../../all_classes/order_class';
/**
 * Generated class for the PastorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pastorder',
  templateUrl: 'pastorder.html',
})
export class PastorderPage {

  productDetail:product_detail_one;
  prod_price=0;
  prod_delivery=0;
  products:order;
  invent:inventory[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public orderdb:ProductDbProvider) {

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad PastorderPage');
    /*this.orderdb.pastorder(this.products.customer_id).subscribe((data:inventory[])=>{
      this.invent=data;
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

    });*/

  }
  onFeed()
  {
    this.navCtrl.push(FeedbackPage);
  }

}
