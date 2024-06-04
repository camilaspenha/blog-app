import { Component, OnInit } from '@angular/core';
import { single } from '../../models/single';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: single[] = []

  constructor(private service:PostsService) {
    this.posts = [
      {
        id: 0,
        post_img: '',
        post_date: '',
        title: '',
        content: '',
        post_author:{
          name:'',
          img:'',
          description:''
        },
        post_category: '',
        post_content:{
          paragraf_1:'',
          quote:'',
          paragraf_2:'',
          subtitle:'',
          paragraph_3:'',
          inside_img:'',
          subtitle_2:'',
          paragraph_4:'',
          paragraph_5: ''
        },
        tags: []
      }
    ]
  }

  ngOnInit(): void {
    this.posts = this.service.getPosts();
  }

}
