import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PostComponent } from './pages/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    PageTitleComponent,
    PostComponent,
    PostListComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
