import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Post } from '@models';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.http.get(`${environment.backUrl}/posts`) as Observable<Post[]>;
  }

  public getPost(id: string): Observable<Post> {
    return this.http.get(`${environment.backUrl}/posts`, {
      params: {
        id
      }
    }) as Observable<Post>;
  }

  public uploadPost(post: Post): Observable<Post> {
    return this.http.post(`${environment.backUrl}/posts`, post) as Observable<Post>;
  }
}
