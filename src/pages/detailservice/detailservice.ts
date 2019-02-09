import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Retailer } from './retailer_c';
import { ServicedbProvider } from '../../providers/servicedb/servicedb';
import { ServiceBookPage } from "../service-book/service-book";
import { Service_man } from './service_man';

/**
 * Generated class for the DetailservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailservice',
  templateUrl: 'detailservice.html',
})
export class DetailservicePage {
  serviceid:number;
usrpin:any='';
public rid:any;
public rprice:Service_man[]=[];
usrcity:any='';
public arr:Retailer[]=[];
public arr1:Retailer[]=[];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public _data:ServicedbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailservicePage');
    this.serviceid=this.navParams.get('id');
    this.usrpin=localStorage.getItem('upino'); //get from localstorage
    this.usrcity=localStorage.getItem('ucid');//get cityid from localstorage
    this.usrpin=parseInt(this.usrpin);
    this.usrcity=parseInt(this.usrcity);
    this._data.getserviceman(this.serviceid,this.usrpin,this.usrcity).subscribe(
      (data:any)=>{
        this.arr=data.Results;
      //  alert(this.arr[0].retailer_id);
      },
      function (e) {
        alert(e);
      },
      function () {
       
      }
    );

    


  this._data.getserviceman1(this.usrcity,this.usrpin,this.usrcity).subscribe(
    (data:any)=>{
      this.arr1=data.Results;
    },
    function(e){
      alert(e);
    },
    function(){

    }

    );
  }

  onServiceBook(id:any)
  {
     localStorage.setItem('retid',id);
      this._data.getservicemen(id).subscribe(
        (data:Service_man[])=>{
          this.rprice=data;
          this.rid=this.rprice[0].visiting_fees;
          
          localStorage.setItem('rid',this.rid);
          
        }
      )
      this.navCtrl.push(ServiceBookPage);
  }



}
