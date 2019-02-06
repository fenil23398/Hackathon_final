import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from "@angular/common/http";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ProductsPage } from "../pages/products/products";
import { ListProductsPage } from "../pages/list-products/list-products";
import { ServicesPage } from "../pages/services/services";
import { ProfilePage } from "../pages/profile/profile";
import { ProfildetailsPage } from "../pages/profildetails/profildetails";


import { UserlogProvider } from "../pages/Provider/userlog/userlog";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    ProductsPage,
    ListProductsPage,
    ServicesPage,
    ProfilePage,
    ProfildetailsPage
  ],
  imports: [BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    ProductsPage,
    ListProductsPage,
    ServicesPage,
    ProfilePage,
    ProfildetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserlogProvider
  ]
})
export class AppModule {}
