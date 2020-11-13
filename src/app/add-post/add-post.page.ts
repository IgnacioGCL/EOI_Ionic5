import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PostService } from '@api/post/post.service';
import { CameraService } from '@services/camera/camera.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-post',
  templateUrl: 'add-post.page.html',
  styleUrls: ['add-post.page.scss']
})
export class AddPostPage implements OnInit {

  public postForm: FormGroup;
  public postImage: string;
  private formSubscription: Subscription;

  constructor(
    private cameraService: CameraService,
    private fb: FormBuilder,
    private postService: PostService,
    private navCtrl: NavController) { }

  public ngOnInit(): void {
    this.postForm = this.fb.group({
      titulo: this.fb.control('', [Validators.required]),
      autor: this.fb.control('', [Validators.required]),
      fotoUrl: this.fb.control('', [Validators.required]),
      descripcionCorta: this.fb.control('', [Validators.required]),
      descripcion: this.fb.control('', [Validators.required]),
      id: this.fb.control(''),
      url: this.fb.control('')
    });
  }

  public ionViewDidLeave(): void {
    this.postForm.reset();
    if (this.formSubscription) { this.formSubscription.unsubscribe(); }
  }

  public async uploadForm(): Promise<void> {
    const url = this.getUrl(this.postForm.value.titulo);
    const b64Image = await this.cameraService.convertImageToB64(this.postForm.value.fotoUrl);
    this.postForm.patchValue({
      id: url,
      url,
      fotoUrl: b64Image
    });
    this.formSubscription = this.postService.uploadPost(this.postForm.value).subscribe(() => {
      this.postForm.reset();
      this.navCtrl.navigateRoot('/tabs/posts');
    });
  }

  public takePicture(): void {
    this.cameraService.takePicture().then(imageData => {
      this.postImage = imageData.webPath;
      this.postForm.patchValue({ fotoUrl: imageData.webPath });
    });
  }

  public deletePicture(): void {
    this.postImage = null;
    this.postForm.patchValue({ fotoUrl: null });
  }

  private getUrl(title: string): string {
    return title.toLowerCase().replace(/ /g, '-');
  }

}
