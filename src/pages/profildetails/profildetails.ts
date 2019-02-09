import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { ProfilePage } from "../../pages/profile/profile";

import { UserlogProvider } from "../Provider/userlog/userlog";

import { User_Class } from "../Provider/userlog/user_class";
/**
 * Generated class for the ProfildetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-profildetails",
  templateUrl: "profildetails.html"
})
export class ProfildetailsPage {
  uid: string = "";
  email: string = "";
  name: string = "";
  mno: string = "";
  pino: string = "";
  address: string = "";
  usr: User_Class[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,
    public udata: UserlogProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProfildetailsPage");
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
      },
      function(err) {},
      function() {}
    );
  }
  onEditClick() {
    let t1 = this.toast.create({
      message: "Profile Updated",
      duration: 3000,
      position: "bottom"
    });
    console.log("in editClick " + this.uid);
    console.log("name:" + this.name);
    this.udata
      .updateUser(
        new User_Class(
          this.uid,
          this.name,
          this.email,
          "",
          this.mno,
          "",
          this.address,
          this.pino
        )
      )
      .subscribe(
        (data: User_Class[]) => {
          t1.present();
          console.log(data);
        },
        function(err) {},
        function() {}
      );
  }
}
