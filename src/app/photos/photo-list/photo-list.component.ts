import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];

  filter = '';

  hasMore = true;

  currentPage = 1;

  username = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
  ) {}

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params.username;
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.username, (this.currentPage += 1))
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      });
  }
}
