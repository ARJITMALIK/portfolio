import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';
import { PromptComponent } from './prompt/prompt.component';
import { BannerComponent } from './banner/banner.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [AppComponent, HelpComponent, PromptComponent, BannerComponent, ErrorComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
