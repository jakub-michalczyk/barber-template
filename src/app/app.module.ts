import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeadingComponent } from './components/heading/heading.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LightBoxComponent } from './light-box/light-box.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OffcanvasComponent,
    MenuComponent,
    LogoComponent,
    HeroBannerComponent,
    GalleryComponent,
    HeadingComponent,
    AboutUsComponent,
    LightBoxComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
