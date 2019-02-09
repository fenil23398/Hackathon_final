import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { orderservice } from "../../pages/service-book/ordersevice";





@Injectable()
export class ServicedbProvider {
  public url:string="http://localhost:8110/services/";
  public url2:string="http://localhost:8110/getservicesman/";
  public url3:string="http://localhost:8110/getservicesman1/";
  public url4:string="http://localhost:8110/serviceprice/";
  public url5:string="http://localhost:8110/orderservice/";
  constructor(public http: HttpClient) {
    console.log('Hello ServicedbProvider Provider');
  }
  getAllCategories()
  {
    return this.http.get(this.url);
  }
  //this will have argument as well also d concatenatio of city
  getserviceman(sid:number,pin:number,cid:number)
  {
  return this.http.get(this.url2+sid+"/"+pin+"/"+cid);
  }

  getserviceman1(cityid:number,pin:number,sid:number)
  {
    return this.http.get(this.url3+cityid+"/"+pin+"/"+sid);
  }
  getservicemen(id:number)
  {
   
    return this.http.get(this.url4+id);
  }
  buyService(item:orderservice)
  {
    let body=JSON.stringify(item);
    return this.http.post(this.url5,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
}
