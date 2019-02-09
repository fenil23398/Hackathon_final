import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController,Refresher,Content} from "ionic-angular";
import { ListProductsPage } from "../list-products/list-products";
import { ProductDbProvider } from "../../providers/product-db/product-db";
import { category } from "../../all_classes/category_class";
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { city } from '../../all_classes/city_class';
import { user } from '../../all_classes/user_class';
/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-products",
  templateUrl: "products.html"
})
export class ProductsPage {
  public user_location_city_id="";
  public user_location_pincode="";
  @ViewChild(Content) content: Content;
  @ViewChild(Refresher) refresher: Refresher;

  @ViewChild('myselect') selectComponent:SelectSearchableComponent;
  mycity=null;
  cities:city[];
  uid:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public product_db:ProductDbProvider,
    private toastCtrl:ToastController
    ) {}
    categories:category[];
  
    doRefresh(event) {
      console.log('Begin async operation');
  
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete()
      }, 100);
    }
  ionViewDidLoad() {
    
    console.log("ionViewDidLoad ProductsPage");
    this.product_db.getAllCategory().subscribe((data:any)=>{
      this.categories=data;

    },(err)=>{
      console.log(err);
    },
    ()=>{
      console.log("Completed");
    });
    this.product_db.getAllCities().subscribe((data:any)=>{
      this.cities=data.Data;
    },(err)=>{
      console.log(err);
    },
    ()=>{
      console.log("completed cities");
      
    }
    );
  }
 
  userChanged(event:{component:SelectSearchableComponent,value:any}){
    console.log('event',event);
    this.uid=parseInt(localStorage.getItem("id"));
    this.product_db.setCity(this.uid,new user(this.uid,"","","","",event.value.city_id,"","")).subscribe(
      (data:any)=>{
        console.log("data "+data);
    let toast=this.toastCtrl.create({
      message:'City Will be change.',
      duration:2000
    });
    toast.present();
    },(err)=>{
      console.log(err);
    },
    ()=>{
      console.log("Completed");
    }
    );
  }
  loadCities(){
    this.product_db.getAllCities().subscribe((data:any)=>{
      this.cities=data.Data;
    },(err)=>{
      console.log(err);
    },
    ()=>{
      console.log("completed cities");
    }
    );
  }
  onClose(){
    let toast=this.toastCtrl.create({
      message:'City Will be change.',
      duration:2000
    });
    toast.present();
  }
  opernFromCode(){
    this.product_db.getAllCities().subscribe((data:any)=>{
      this.cities=data.Data;
    },(err)=>{
      console.log(err);
    },
    ()=>{
      console.log("completed cities");
    }
    );
    this.selectComponent.open();

  }
  onCardClick(cat_id:Number) {
    this.navCtrl.push(ListProductsPage,{category_id:cat_id});
  }
}
