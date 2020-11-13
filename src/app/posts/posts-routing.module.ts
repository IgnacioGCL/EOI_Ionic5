import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsPage } from './posts.page';

const routes: Routes = [
  {
    path: '',
    component: PostsPage,
  },
  {
    path: ':id',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
