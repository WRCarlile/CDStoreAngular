import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
    selector: 'album-display',
    inputs: ['album'],
  template: `
  <div>
    <input *ngIf="album.purchased" type="checkbox" checked (click)="togglePurchased(false)"/>
    <input *ngIf="!album.purchased" type="checkbox" (click)="togglePurchased(true)"/>
    <label>{{ album.name }}, {{ album.artist }}, {{ album.genre }}, {{ album.price }}</label>
  </div>
  `
})
export class AlbumComponent {
  public album: Album;
  public total: number = 0;
  togglePurchased(setState: boolean){
    this.album.purchased = setState;
  }
}
