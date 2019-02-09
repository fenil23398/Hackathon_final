import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { UserlogProvider } from "../Provider/userlog/userlog";

import { User_Class } from "../Provider/userlog/user_class";

import {orderservice  } from "./ordersevice";
import { ServicedbProvider } from "../../providers/servicedb/servicedb";
/**
 * Generated class for the ServiceBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-book',
  templateUrl: 'service-book.html',
})
export class ServiceBookPage {
  cost:any;
  uid: string = "";
  email: string = "";
  name: string = "";
  mno: string = "";
  pino: string = "";
  address: any;
  usr: User_Class[] = [];
  num:any="8320352723";


  order_s_id:number;
  
  customer_id:any;
  retailer_id:any=localStorage.getItem('retid');
  price:number;
  verified:number=0;
  Address:number;
  i:number=0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public udata: UserlogProvider,
    public _data:ServicedbProvider,
    public to:ToastController
  ) {}

  ionViewDidLoad() {
    this.cost=localStorage.getItem('rid');
    
    console.log('ionViewDidLoad ServiceBookPage');
    this.uid = localStorage.getItem("id");
    console.log("in ionViewDid " + this.uid);
    this.udata.getUserid(this.uid).subscribe(
      (data: User_Class[]) => {
        this.usr = data;
        this.email = this.usr[0].user_email;
        this.name = this.usr[0].user_name;
        this.mno = this.usr[0].user_phone;
        this.pino = this.usr[0].user_pincode;
        this.address = this.usr[0].user_address;
        this.customer_id=this.usr[0].user_id;
      },
      function(err) {},
      function() {}
    );
  }
  placeOrder()
  {
    let t1=this.to.create({
      message:"Added..",
      duration:3000,
      position:"bottom"
    });
    this._data.buyService(new orderservice(this.order_s_id,this.customer_id,this.retailer_id,this.cost,this.verified,this.address)).subscribe(

      (data:any)=>{
        
        t1.present();
        this.i=1;
      },
    )
  }

}
