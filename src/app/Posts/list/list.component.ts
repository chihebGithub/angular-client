import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/Post';
import { PostService } from '../../service/post.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {



  ngOnInit() {
  }
  public posts: Post[];
  constructor (private postserive:PostService) {
   this.getPosts();
  }

  getPosts() {
  //this.posts = this.http.get<Observable <Post>[]>(this.ROOT_URL+'/posts')
 this.postserive.getPosts().
   subscribe((data: Post[]) => this.posts = data

   );
 }

 onDelete(event) {
  var marvelHeroes =  this.posts.filter(function(hero) {
    return hero._id !== event;
  });

  this.posts=marvelHeroes

}



}
