import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

import { ProductsPage } from "../products/products";

import { UserlogProvider } from "../Provider/userlog/userlog";

import { User_Class } from "../Provider/userlog/user_class";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  uname:string='';
  uemail:string='';
  upass:string='';
  umno:string='';
  pino:string='';
  userobject:User_Class;
uadd:string='';
ucid:string='';

  constructor(public toast:ToastController,public navCtrl: NavController, public navParams: NavParams,public data:UserlogProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  onSignupClick()

  {
     let t2=this.toast.create({
    message:"Enter Email Id",
    duration:3000,
    position:"bottom"
  });
  let t3=this.toast.create({
    message:"Enter Password",
    duration:3000,
    position:"bottom"
  });
  let t4=this.toast.create({
    message:"Enter Pincode No",
    duration:3000,
    position:"bottom"
  });
  if(this.uemail=='')
  {
   t2.present();
   this.navCtrl.push(SignupPage);
  }
  else if(this.upass=='')
  {
   t3.present();
  }
  else if(this.pino=='')
  {
   t4.present();
  }
else
{
  this.data.addUser(new User_Class(null,this.uname,this.uemail,this.upass,this.umno,this.ucid,this.uadd,this.pino))
      .subscribe(

        (data:User_Class[])=>{

        },
        function(error){
         console.log(error);
       },
       function(){
        alert("success");

       }
      );
      this.navCtrl.push(ProductsPage);
      }
  }

}
