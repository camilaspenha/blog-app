import { Injectable } from '@angular/core';
import { single } from '../models/single';
import { posts } from '../data/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: single[] = posts;
  private post: single|any;

  constructor() { }

  getPosts(): single[] {
    return this.posts;
  }

  getPost(id: number | string | null): single|any {
    this.post = posts.filter(article => article.id == id)[0]
    return this.post;
  }


}
