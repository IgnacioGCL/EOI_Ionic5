import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostsPage } from './posts.page';

import { PostsRoutingModule } from './posts-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '../api/post/post.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  declarations: [PostsPage],
  providers: [PostService]
})
export class PostsModule { }
