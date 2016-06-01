import {Component} from 'angular2/core';
import {Album} from './album.model';

@Component({
  selector: 'edit-album-details',
  inputs: ['album'],
  template: `
    <div class="album-form">
      <h3>Edit Description: </h3>
      <input [(ngModel)]="album.description" class="col-sm-8 input-lg album-form"/>
    </div>
  `
})
export class EditAlbumDetailsComponent {
  public album: Album;
}
