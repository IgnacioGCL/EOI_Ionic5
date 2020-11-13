import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPostPage } from './add-post.page';

import { AddPostRoutingModule } from './add-post-routing.module';
import { CameraService } from '../services/camera/camera.service';
import { Camera } from '@ionic-native/camera/ngx';
import { PostService } from '../api/post/post.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddPostRoutingModule,
    HttpClientModule
  ],
  declarations: [AddPostPage],
  providers: [Camera, CameraService, PostService]
})
export class AddPostModule { }
