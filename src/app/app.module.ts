import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    AddProductComponent,
    TutorialDetailsComponent,
    ProductDetailsComponent,
    TutorialsListComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
