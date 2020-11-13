import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'posts',
        loadChildren: () => import('../posts/posts.module').then(m => m.PostsModule)
      },
      {
        path: 'add-post',
        loadChildren: () => import('../add-post/add-post.module').then(m => m.AddPostModule)
      },
      {
        path: '',
        redirectTo: '/tabs/posts',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/posts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
