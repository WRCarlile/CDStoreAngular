import {Component} from 'angular2/core';
import {Album} from './album.model';

@Component({
  selector: 'edit-album-details',
  inputs: ['album'],
  template: `
    <div class="album-form">
      <h3>Edit Description: </h3>
      <input [(ngModel)]="album.name" class="input-lg album-form"/>
      <input [(ngModel)]="album.genre" class="input-lg album-form"/>
      <input [(ngModel)]="album.artist" class="input-lg album-form"/>
      <input [(ngModel)]="album.price" class="input-lg album-form"/>
    </div>
  `
})
export class EditAlbumDetailsComponent {
  public album: Album;
}
