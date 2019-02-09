import { Injectable } from '@angular/core';
import { Response,RequestOptions, Headers } from '@angular/http';
import { User_Class } from "./user_class";
import { User_Class2 } from "./use_class2";
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable()
export class UserlogProvider {
uid:string='';
u:number=0;
  constructor(public http: HttpClient) {
    console.log('Hello UserlogProvider Provider');
    this.uid=localStorage.getItem('id');



  }
 public url_signup:string="http://localhost:8110/signup/";
 public url_login:string="http://localhost:8110/login/";
 public url_Byid:string="http://localhost:8110/users/";
 public url_chng_pass: string = "http://localhost:8110/change/";
  public url_past_rec: string = "http://localhost:8110/pastrecords/";
  usr:User_Class[]=[];



  addUser(usr){
    const body=JSON.stringify(usr);
    return this.http.post(this.url_signup,body,{headers:new HttpHeaders().set('Content-type','application/json')});
  }
  Login(usr:User_Class) {
    const body=JSON.stringify(usr);
    return this.http.post(this.url_login,body,{headers:new HttpHeaders().set('Content-type','application/json')});
  }
  getUserid(user)
  {
    return this.http.get(this.url_Byid+user);
  }
  updateUser(user){
   const body=JSON.stringify(user);
    return this.http.put(this.url_Byid+parseInt(user.user_id),body,{headers:new HttpHeaders().set('Content-type','application/json')});
  }

  changepass(user: User_Class2) {
    let body = JSON.stringify(user);
    let h = new Headers({ "Content-Type": "application/json" });
    let ro = new RequestOptions({ headers: h });
    return this.http.put(this.url_chng_pass + parseInt(user.user_id), body, {
      headers: new HttpHeaders().set("Content-type", "application/json")
    });
  }
  pasteorderdetails() {}


}
