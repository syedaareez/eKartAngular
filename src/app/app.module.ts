import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './products/search/search.component';

import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product-list/product/product.component';
import { FilterComponent } from './products/product-list/filter/filter.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { SuccessButton } from './CustomDirectives/AttributeDirectives/SuccessButton.directive';
import { HighlightDirective } from './CustomDirectives/AttributeDirectives/highlight.directive';
import { RandomBottonDirective } from './CustomDirectives/AttributeDirectives/random-botton.directive';
import { NotAvailableDirective } from './CustomDirectives/AttributeDirectives/not-available.directive';
import { CopyNgIfDirective } from './CustomDirectives/StructuralDirective/copy-ng-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    NavbarComponent,
    ProductsComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    SuccessButton,
    HighlightDirective,
    RandomBottonDirective,
    NotAvailableDirective,
    CopyNgIfDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
