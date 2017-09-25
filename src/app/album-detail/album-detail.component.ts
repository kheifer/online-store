import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [ AlbumService ]
})
export class AlbumDetailComponent implements OnInit {
  albumId: number;
  albumToDisplay: Album;

  constructor(
              private incomingRoute: ActivatedRoute,
              private location: Location,
              private albumService: AlbumService
 ) { }





  ngOnInit() {
    console.log(new ActivatedRoute());
    console.log(this.incomingRoute);
    this.incomingRoute.params.forEach( (urlParameters) => {
      this.albumId = parseInt(urlParameters['id']);
    });
    this.albumToDisplay = this.albumService.getAlbumById(this.albumId)[0];

  }

}
