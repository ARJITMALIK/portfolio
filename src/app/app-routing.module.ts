import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PromptComponent } from './prompt/prompt.component';
import { AboutComponent } from './about/about.component';
import { ExitComponent } from './exit/exit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prompt', component: PromptComponent },
  { path: 'about', component: AboutComponent },
  { path: 'exit', component: ExitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
