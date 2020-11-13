import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { PostService } from '@api/post/post.service';
import { Post } from '@models';

@Component({
  selector: 'app-posts',
  templateUrl: 'posts.page.html',
  styleUrls: ['posts.page.scss']
})
export class PostsPage implements OnInit {

  public posts: Post[];
  public noPosts: boolean;

  constructor(
    private loadingController: LoadingController,
    private postService: PostService,
    private navCtrl: NavController) { }

  public async ngOnInit(): Promise<void> {

    const loading = await this.loadingController.create({
      message: 'Cargando mensajes'
    });
    await loading.present();

    this.postService.getPosts().subscribe(async (posts) => {
      await loading.dismiss();
      this.noPosts = false;
      this.posts = posts;
    }, async () => {
      this.noPosts = true;
      await loading.dismiss();
    });

  }

  public goToPost(id: string): void {
    this.navCtrl.navigateForward(['tabs', 'posts', id]);
  }

}
