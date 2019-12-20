import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../model/Post';
import { Observable, Subject   } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
   readonly ROOT_URL= 'http://localhost:3000';
  postsSubject = new Subject<Post[]>();
  posts : Post[];
  constructor(private http:HttpClient) { }

  getPosts(): Observable<Post[]>{
    console.log(this.http.get<Post[]>(this.ROOT_URL+'/posts'))
    return this.http.get<Post[]>(this.ROOT_URL+'/posts')
  }
  addPost (post: Post): Observable<Post> {
    return this.http.post<Post>(this.ROOT_URL+'/posts', post);
  }
/*
  emitPosts = () => {
    this.posts.sort((a, b) => b.CreatedAt.getTime() - a.CreatedAt.getTime());
    this.postsSubject.next(this.posts);
  }
*/






    removePost (id: number): Observable<{}> {
       const url = `${this.ROOT_URL+'/posts'}/${id}`; // DELETE api/heroes/42

    return this.http.delete(url);

  }
  addLikeToPost = (postIndex: number) => {
    console.log(this.posts[postIndex]);
    this.posts[postIndex].lovesIts += 1;
  }

  removeLikeToPost = (postIndex: number) => {
    this.posts[postIndex].lovesIts -= 1;
  //  this.emitPosts();
  }
//
}
