import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';
import { PromptComponent } from './prompt/prompt.component';
import { BannerComponent } from './banner/banner.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { UserfetchComponent } from './userfetch/userfetch.component';
import { RiceComponent } from './rice/rice.component';
import { AboutComponent } from './about/about.component';
import { SocialComponent } from './social/social.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExitComponent } from './exit/exit.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    PromptComponent,
    BannerComponent,
    ErrorComponent,
    HomeComponent,
    UserfetchComponent,
    RiceComponent,
    AboutComponent,
    SocialComponent,
    ProjectsComponent,
    ExitComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
