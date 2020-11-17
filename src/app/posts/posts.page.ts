import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { PostService } from '@api/post/post.service';
import { Post } from '@models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: 'posts.page.html',
  styleUrls: ['posts.page.scss']
})
export class PostsPage implements OnInit, OnDestroy {

  public posts: Post[];
  public noPosts: boolean;
  private postsSubscription: Subscription;

  constructor(
    private loadingController: LoadingController,
    private postService: PostService,
    private navCtrl: NavController) { }

  public async ngOnInit(): Promise<void> {

    const loading = await this.loadingController.create({
      message: 'Cargando mensajes'
    });
    await loading.present();

    this.postsSubscription = this.postService.getPosts().valueChanges().subscribe(async (posts) => {
      await loading.dismiss();
      this.noPosts = false;
      this.posts = posts;
    }, async () => {
      this.noPosts = true;
      await loading.dismiss();
    });

  }

  public ngOnDestroy(): void {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }

  public goToPost(id: string): void {
    console.log(id);
    this.navCtrl.navigateForward(['tabs', 'posts', id]);
  }

}
