import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlocksComponent } from './blocks/blocks.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';
import { PaybillComponent } from './paybill/paybill.component';
const paths : Routes =[
  {path:'plans',component: BlocksComponent},
  {path:'payBill/:id',component: PaybillComponent},
  {path:'home/:id',component: BlocksComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlocksComponent,
    FooterComponent,
    PaybillComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
