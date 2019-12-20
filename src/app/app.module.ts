import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddPostComponent } from './Posts/add-post/add-post.component';
import { PostListItemComponent } from './Posts/post-list-item/post-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './Posts/list/list.component';

import {RouterModule, Routes} from '@angular/router';
import { DetailsComponent } from './Posts/details/details.component';
const routes: Routes = [
  { path: 'posts', component: ListComponent },
  { path: 'new', component: AddPostComponent },
  { path: '', component: ListComponent },
  { path: 'posts/:postId', component: DetailsComponent },
  //{ path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    PostListItemComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [

    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
