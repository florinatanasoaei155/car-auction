import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ButtonComponent } from './shared/button/button.component';
import { ProductComponent } from './shared/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageContentComponent,
    FooterComponent,
    ProductComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
