import { NgModule, ErrorHandler, forwardRef, Injectable } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { SelectSearchableModule } from 'ionic-select-searchable';
import { DetailservicePage } from "../pages/detailservice/detailservice";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ProductsPage } from "../pages/products/products";
import { ListProductsPage } from "../pages/list-products/list-products";
import { SellersPage } from "../pages/sellers/sellers";
import { ServicesPage } from "../pages/services/services";
import { ProfilePage } from "../pages/profile/profile";
import { ChangepasswordPage } from "../pages/changepassword/changepassword";
import { FeedbackPage } from "../pages/feedback/feedback";
import { PastorderPage } from "../pages/pastorder/pastorder";
import { ProductDbProvider } from '../providers/product-db/product-db';
import { ProductDetailPage } from "../pages/product-detail/product-detail";
import { SellerPage } from "../pages/seller/seller";
import { BuyProductPage } from "../pages/buy-product/buy-product";
import { PlaceOrderPage } from "../pages/place-order/place-order";
import {ProfildetailsPage} from "../pages/profildetails/profildetails";
import { TrackorderPage } from "../pages/trackorder/trackorder";
import { UserlogProvider } from "../pages/Provider/userlog/userlog";
import { ServicedbProvider } from "../providers/servicedb/servicedb";


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    SignupPage,
    ProductsPage,
    ListProductsPage,
    ProductDetailPage,
    BuyProductPage,
    PlaceOrderPage,
    ServicesPage,
    ProfilePage,
    SellerPage,
    BuyProductPage,
    PlaceOrderPage,
    DetailservicePage,
    BuyProductPage,
    SellersPage,
    ProfildetailsPage,
    ChangepasswordPage,
    FeedbackPage,
    PastorderPage,
    TrackorderPage
  ],
  bootstrap: [IonicApp],
  imports:[
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    SelectSearchableModule
  ],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    SignupPage,
    ProductsPage,
    ListProductsPage,
    BuyProductPage,
    PlaceOrderPage,
    ServicesPage,
    ProfilePage,
    ProductDetailPage,
    SellerPage,
    BuyProductPage,
    PlaceOrderPage,
    DetailservicePage,
    ProfildetailsPage,
    ChangepasswordPage,
    FeedbackPage,
    PastorderPage,
    TrackorderPage

  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProductDbProvider,
    BuyProductPage,SellersPage,ProductDetailPage,
    PlaceOrderPage,ProfildetailsPage,
    StatusBar,
  SplashScreen,
  UserlogProvider,
  ServicedbProvider,
  ]
})
export class AppModule { }
