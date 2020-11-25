import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PostService } from '@api/post/post.service';
import { CameraService } from '@services/camera/camera.service';
import { NavController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-add-post',
  templateUrl: 'add-post.page.html',
  styleUrls: ['add-post.page.scss']
})
export class AddPostPage implements OnInit, OnDestroy {

  public postForm: FormGroup;
  public postImage: string;
  private uploadTaskSubscription: Subscription;

  constructor(
    private cameraService: CameraService,
    private fb: FormBuilder,
    private postService: PostService,
    private navCtrl: NavController,
    private loadingController: LoadingController) { }

  public ngOnInit(): void {
    this.postForm = this.fb.group({
      titulo: this.fb.control('', [Validators.required]),
      autor: this.fb.control('', [Validators.required]),
      fotoUrl: this.fb.control('', [Validators.required]),
      descripcionCorta: this.fb.control('', [Validators.required]),
      descripcion: this.fb.control('', [Validators.required]),
      url: this.fb.control('')
    });
  }

  public ngOnDestroy(): void {
    if (this.uploadTaskSubscription) {
      this.uploadTaskSubscription.unsubscribe();
    }
  }

  public ionViewDidLeave(): void {
    this.postForm.reset();
  }

  public async uploadForm(): Promise<void> {
    const loading = await this.loadingController.create({ message: 'Subiendo post' });
    await loading.present();
    const url = this.getUrl(this.postForm.value.titulo);
    const blob = await this.cameraService.getBlob(this.postForm.value.fotoUrl);
    const uploadTask = this.postService.uploadImage(`${url}-photo`, blob);
    const storageUrl = await (await uploadTask).ref.getDownloadURL();

    this.postForm.patchValue({ url, fotoUrl: storageUrl });

    await this.postService.uploadPost(this.postForm.value);

    await loading.dismiss();

    this.postForm.reset();
    this.navCtrl.navigateRoot('/tabs/posts');

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
