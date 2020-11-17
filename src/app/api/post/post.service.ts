import { Injectable } from '@angular/core';
import { Post } from '@models';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsCollections: AngularFirestoreCollection<Post>;

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.postsCollections = this.db.collection<Post>('posts');
  }

  public getPosts(): AngularFirestoreCollection<Post> {
    return this.postsCollections;
  }

  public getPost(id: string): AngularFirestoreDocument<Post> {
    return this.db.doc<Post>(`posts/${id}`);
  }

  public uploadPost(post: Post): Promise<void> {
    return this.postsCollections.doc(post.url).set(post);
  }

  public uploadImage(fileName: string, blob: Blob): AngularFireUploadTask {
    const ref = this.storage.ref(fileName);
    return ref.put(blob);
  }

}
