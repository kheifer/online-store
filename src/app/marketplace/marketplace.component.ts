import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Album } from '../album.model';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {

  constructor(private router: Router ) {}
  albums: Album[];

   goToDetailPage(clickedAlbum: Album) {
     this.router.navigate(['albums', clickedAlbum.id]);
   }
}
