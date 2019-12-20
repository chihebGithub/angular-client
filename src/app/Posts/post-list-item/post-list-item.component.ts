import {Component, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../model/Post';
import {PostService} from '../../service/post.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;
  @Output() notify = new EventEmitter();
  constructor(private postService: PostService,
    private router: Router
    ) { }

  ngOnInit() {}



  //onDislikeClick = () => this.postService.removeLikeToPost(index);
  //onDelete = () => this.postService.removePost(this.index);


  onDelete(id) {
    //this.posts = this.http.get<Observable <Post>[]>(this.ROOT_URL+'/posts')
   this.postService.removePost(id).subscribe(
     ()=>this.notify.emit(id)
   ),
   ()=>console.log(id)
   }

   onLikeClick = () => {
    this.post.lovesIts += 1;
    console.log(this.post.lovesIts)
  }

  removeLikeToPost = () => {
    this.post.lovesIts -= 1;
  //  this.emitPosts();
  console.log(this.post.lovesIts)
  }


}
