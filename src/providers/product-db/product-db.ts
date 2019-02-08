import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { order } from '../../all_classes/order_class';


@Injectable()
export class ProductDbProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductDbProvider Provider');
  }
  public product_url:string="http://localhost:8110/product/";
  public city_url:string="http://localhost:8110/city/";
  public inventory_url:string="http://localhost:8110/inventory/";
  public user_url:string="http://localhost:8110/userss/";
  public order_url:string="http://localhost:8110/product/";
  public pin:number;
  public getProductByCatID(uid:any){
    this.pin=parseInt(localStorage.getItem("ucid"));
    return this.http.get(this.product_url+uid+"/"+this.pin);
  }
  public getAllCategory(){
    return this.http.get(this.product_url);
  }
  public getAllCities(){
    return this.http.get(this.city_url);
  }
  public getInventory(pid:any){
    return this.http.get(this.inventory_url+pid);
  }
  public setCity(id:any,user:any){
    const body=JSON.stringify(user);
    console.log(this.city_url+id);
    console.log(body);
    return this.http.put(this.city_url+id,body,{headers:new HttpHeaders().set('Content-type','application/json')});
  }
  public getUser(uid:any){
    return this.http.get(this.user_url+uid);
  }
  public placeOrder(ord:order){
    const body=JSON.stringify(ord);
    return this.http.post(this.order_url,body,{headers:new HttpHeaders().set('Content-type','application/json')});
  }
}
