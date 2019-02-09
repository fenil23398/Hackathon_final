import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { ProductDbProvider } from "../../providers/product-db/product-db";
import { feedback } from '../../all_classes/feedback_class';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  oid:number;
  rating:number;
  desc:string;
  feed:feedback[];
  fid:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public db:ProductDbProvider,public toast:ToastController) {
    this.oid=this.navParams.get('jainam_oid');
    console.log(this.oid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }
  onFeedBack()
  {

    let t2=this.toast.create({
      message:"Feedback Sucessfully",
      duration:5000,
      position:"bottom"
    });

    this.db.feedback(new feedback(null,this.oid,this.desc,this.rating))
    .subscribe(

      (data:feedback[])=>{

      },
      function(error){
       console.log(error);
     },
     function(){
        t2.present();
     }
    );

    }


}
