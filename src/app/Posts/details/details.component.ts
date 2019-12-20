import {Component, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../model/Post';
import {PostService} from '../../service/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;
  product;
  @Output() notify = new EventEmitter();
  constructor(private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
    ) { }
    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.product = this.post[+params.get('postId')];
      });
    }


  //onDislikeClick = () => this.postService.removeLikeToPost(index);
  //onDelete = () => this.postService.removePost(this.index);


  onDelete() {
    //this.posts = this.http.get<Observable <Post>[]>(this.ROOT_URL+'/posts')
   this.postService.removePost(this.post._id).subscribe()
   }



}
