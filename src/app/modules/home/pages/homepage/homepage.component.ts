import { Component, OnInit } from '@angular/core';
import {BlogPost}            from '../../../../shared/models/blog-post';
import {DatabaseService}     from '../../../../shared/services/database/database.service';
import { Router }            from '@angular/router';
import {Observable}          from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  readonly blogs$: Observable<BlogPost[]> = this.database.getPosts$();

  constructor(private database: DatabaseService,
              private router: Router) { }

  editPost(postUid?: string) {
    if (postUid) {
      this.router.navigate([`/edit/${postUid}`]);
    } else {
      this.router.navigate([`/edit/${this.database.getNewUid()}`]);
    }
  }

  readPost(postUid: string) {
    this.router.navigate([`/post/${postUid}`]);
  }
}
