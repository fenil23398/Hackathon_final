import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

import { User_Class } from "../Provider/userlog/user_class";

import { UserlogProvider } from "../Provider/userlog/userlog";
import { User_Class2 } from '../Provider/userlog/use_class2';

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
  tt: string = "password";
  showPass: boolean = false;
  password: string = "";
  npass:string='';
  cpass:string='';
  user:User_Class2[]=[];
  uid:string='';
  email:string='';
  usr:User_Class[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:UserlogProvider,public toast:ToastController) {
    this.uid=localStorage.getItem('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }
  showPassword() {
    this.showPass = !this.showPass;

    if (this.showPass) {
      this.tt = "text";
    } else {
      this.tt = "password";
    }
  }
  onSubmit()
  {
    this.password=localStorage.getItem('pass');
    this.email=localStorage.getItem('eid');

    if(this.npass==this.cpass)
    {
      if(this.npass==this.cpass)
      {
       this.data.changepass(new User_Class2(this.uid,this.email,this.npass)).subscribe(
         (data:User_Class[])=>{
           this.usr=data;
           let t3=this.toast.create({
            message:"Password Successfully Changed",
            duration:3000,
            position:"bottom"

          });
          t3.present();
      } ,
      function(error){
        console.log(error);
      },
      function(){
        //l1.dismissAll();
      }
    );
    }
    else
    {
     let t3=this.toast.create({
       message:"New Password doesnot match with confirm password.Both Should be same.",
       duration:3000,
       position:"bottom"

     });
      t3.present();
    }
   }
   else
   {
     let t3=this.toast.create({
       message:"Old Password do not march.Please enter correct password.",
       duration:3000,
       position:"bottom"

     });
     t3.present();
   }
  }

}
