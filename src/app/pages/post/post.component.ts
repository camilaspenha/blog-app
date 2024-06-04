import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { single } from '../../models/single';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: single;
  private id:number | string | null = 'O'

  constructor(private service:PostsService, private route: ActivatedRoute,) {
    this.post = {
      id: 0,
      post_img: '',
      post_date: '',
      title: '',
      content: '',
      post_author: {
        name: '',
        img: '',
        description: ''
      },
      post_category: '',
      post_content:{
        paragraf_1: '',
        quote: '',
        paragraf_2: '',
        subtitle: '',
        paragraph_3: '',
        inside_img: '',
        subtitle_2: '',
        paragraph_4: '',
        paragraph_5: ''
      },
      tags: []
    }
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get('id') )
    console.log(this.id)
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:number | string | null){
    const result = this.service.getPost(id)

    this.post = {
      id: result.id,
      post_img: result.post_img,
      post_date: result.post_date,
      title: result.title,
      content: result.content,
      post_author:{
        name: result.post_author.name,
        img: result.post_author.img,
        description: result.post_author.description
      },
      post_category: result.post_category,
      post_content:{
        paragraf_1: result.post_content.paragraf_1,
        quote: result.post_content.quote,
        paragraf_2: result.post_content.paragraf_2,
        subtitle: result.post_content.subtitle,
        paragraph_3: result.post_content.paragraph_3,
        inside_img: result.post_content.inside_img,
        subtitle_2: result.post_content.subtitle_2,
        paragraph_4: result.post_content.paragraph_4,
        paragraph_5: result.post_content.paragraph_5
      },
      tags: result.tags
    }
  }
}

