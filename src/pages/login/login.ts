import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  ToastController
} from "ionic-angular";

import { SignupPage } from "../signup/signup";
import { TabsPage } from "../tabs/tabs";
import { UserlogProvider } from "../Provider/userlog/userlog";
import { User_Class } from "../Provider/userlog/user_class";
import { ProductsPage } from "../products/products";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  uid: string = "";
  email_id: string = "";
  password: string = "";
  usr: User_Class[];
  user_cid: string = "";
  upino: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alert: AlertController,
    public db: UserlogProvider,
    public toast: ToastController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
  onLogin() {

     let t1 = this.toast.create({
      message: "Login Successfully",
      duration: 3000,
      position: "bottom"
    });
    let t3 = this.toast.create({
      message:
        "Enter proper mail id and Password or You had not verified your account",
      duration: 3000,
      position: "bottom"
    });
    this.db.Login(new User_Class(this.uid,'',this.email_id,this.password,'',this.user_cid,'',this.upino)).subscribe(
      (x:User_Class[])=>{
        console.log(x);
       if(this.email_id=='' || this.password=='')
        {
          alert("enter valid data")
        }
        else{

        if(x.length==1){
          // t1.present();
          this.uid=x[0].user_id;

          localStorage.setItem('id',x[0].user_id);
          localStorage.setItem('email',x[0].user_email);
          this.password=x[0].user_password;
          this.user_cid=x[0].user_city_id;
          this.upino=x[0].user_pincode;
          localStorage.myVar=this.uid;
          localStorage.setItem('id',this.uid);
          localStorage.setItem('eid',this.email_id);
          localStorage.setItem('pass',this.password);
          localStorage.setItem('ucid',this.user_cid);
          localStorage.setItem('upino',this.upino);
         localStorage.setItem('id',this.uid); // this.email_id=x[0].user_email;

          this.navCtrl.push(TabsPage);

        }
        else{

          t3.present();
          this.navCtrl.push(LoginPage);
        }
      }
    }
      );
//this.navCtrl.setRoot(TabsPage);
  }
  onSignup() {
    this.navCtrl.push(SignupPage);
  }
  showPassword() {
    // console.log("hi");
  }
  showPrompt() {
    let prompt = this.alert.create({
      title: "Forgot Password",
      message: "Enter Your Email Id To Get Your Password",
      inputs: [
        {
          name: "name",
          placeholder: "Email_id"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Send",
          handler: data => {
          }
        }
      ]
    });
    prompt.present();

  }
}
