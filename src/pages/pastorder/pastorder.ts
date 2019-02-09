import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController} from 'ionic-angular';

import { FeedbackPage } from "../feedback/feedback";

import { product_detail_one } from '../../all_classes/product_first_class';

import { inventory } from '../../all_classes/inventory_class';

import { ProductDbProvider } from "../../providers/product-db/product-db";
import { order } from '../../all_classes/order_class';
import { past } from '../../all_classes/past_order_class';
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
  myArr:past[]=[];
  productDetail:product_detail_one[]=[];
  prod_price=0;
  total=0;
  orders:order=new order(0,0,0,0,0,"",0,0,0,);
  invent:inventory[];
  name:string='';
  uid:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public orderdb:ProductDbProvider,public toast:ToastController) {
    this.invent=this.navParams.get('seller');
    this.productDetail=this.navParams.get('prod');
  }

  ionViewDidLoad() {


    console.log('ionViewDidLoad PastorderPage');
    this.uid=parseInt(localStorage.getItem("id"));
    this.orderdb.pastorder(this.uid).subscribe((data:past[])=>{
      this.myArr=data;
      // this.orders=data[0];
      // console.log(data);
      // console.log(this.orders);
      // this.productDetail=data;
        // this.name=this.productDetail.product_name[0];
        // this.prod_price=this.invent[0].price + this.invent[0].deliver

      // this.stock=parseInt(this.stock+"");
    },(err)=>{
        console.log(err);
    },()=>{

    });

  }
  onFeed(oid:number)
  {
    this.navCtrl.push(FeedbackPage,{jainam_oid:oid});
  }

}
