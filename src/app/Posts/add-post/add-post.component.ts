import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/model/Post';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private postservice:PostService
    ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm = () => {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit(formulaire: NgForm) {
    this.postservice.addPost(formulaire.value).subscribe(
      (data) => {
        //localStorage.setItem('token', data.id);
        this.router.navigate(['']);
       let post ={
         _id:0,
         title:data.title,
         content:data.content,
         CreatedAt:new Date (),
         lovesIts:0

       }
       console.log(formulaire.value);
       this.postservice.addPost(post)
      // this.postservice.emitPosts()
       this.router.navigate(['/posts']);
      }
    );
    console.log(formulaire.value);
  }

}
