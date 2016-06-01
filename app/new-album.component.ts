import {Component, EventEmitter} from 'angular2/core';
import {Album} from './album.model';

@Component({
  selector: 'new-album',
  outputs: ['onSubmitNewAlbum'],
  template: `
  <div class="album-form">
    <h3>Create Album:</h3>
    <input placeholder="Name" class="input-lg album-form" #newName required>
    <input placeholder="Genre" class="input-lg album-form" #newGenre required>
    <input placeholder="Artist" class="input-lg album-form" #newArtist required>
    <input placeholder="Price" class="input-lg album-form" #newPrice required>
    <br>
  <button (click)="addAlbum(newName, newGenre, newArtist, newPrice)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewAlbumComponent {
  public onSubmitNewAlbum: EventEmitter<Album>;
  constructor(){
    this.onSubmitNewAlbum = new EventEmitter();
  }
  addAlbum(userName: HTMLInputElement, userGenre: HTMLInputElement, userArtist: HTMLInputElement, userPrice: HTMLInputElement){
    var album = new Album(userName.value, userArtist.value, userGenre.value, parseInt(userPrice.value), 0);
    this.onSubmitNewAlbum.emit(album);
    userName.value = "";
    userGenre.value = "";
    userArtist.value = "";
    userPrice.value = "";
    // this.onSubmitNewAlbum.emit(userDescription.value);
    // userDescription.value = "";
  }
}
