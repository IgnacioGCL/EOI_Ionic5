import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models';
import { concatMap } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { PostService } from '@api/post/post.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit, OnDestroy {

  public post: Post;
  private getPostSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private loadingController: LoadingController
  ) { }

  public async ngOnInit(): Promise<void> {

    const loading = await this.loadingController.create({
      message: 'Cargando mensajes'
    });
    await loading.present();

    this.getPostSubscription = this.activatedRoute.params.pipe(
      concatMap(({ id }) => this.postService.getPost(id).valueChanges())
    ).subscribe(async (post) => {
      await loading.dismiss();
      this.post = post;
    });
  }

  public ngOnDestroy(): void {
    if (this.getPostSubscription) {
      this.getPostSubscription.unsubscribe();
    }
  }

}
