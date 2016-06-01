import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { EditAlbumDetailsComponent } from './edit-album-details.component';
import { NewAlbumComponent } from './new-album.component';
import { CartPipe } from './cart.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  pipes: [CartPipe],
  directives: [AlbumComponent, EditAlbumDetailsComponent, NewAlbumComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="purchased">Show Cart</option>
  </select>
  <album-display *ngFor="#currentAlbum of albumList | purchased:filterCart"
    (click)="albumClicked(currentAlbum)"
    [class.selected]="currentAlbum === selectedAlbum"
    [album]="currentAlbum">
  </album-display>

  <h3 (change) = "addTotal(total)">Total: {{ total }}</h3>

  <edit-album-details *ngIf="selectedAlbum" [album]="selectedAlbum">
  </edit-album-details>
  <new-album (onSubmitNewAlbum)="createAlbum($event)"></new-album>

  `
})

export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  public filterCart: string = "notPurchased";
  public total: number = 0;

  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }

  albumClicked(clickedAlbum: Album): void {
    this.selectedAlbum = clickedAlbum;
    this.onAlbumSelect.emit(clickedAlbum);
  }

  createAlbum(newAlbum: Album): void {
    this.albumList.push(newAlbum);
  }

  onChange(filterOption) {
    this.filterCart = filterOption;
    this.total = 0;

    for ( var album of this.albumList ) {
      if ( album.purchased ){
        this.total += album.price;
      }
    }
  }
}
