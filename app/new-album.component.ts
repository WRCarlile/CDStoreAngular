import {Component, EventEmitter} from 'angular2/core';
import {Album} from './album.model';

@Component({
  selector: 'new-album',
  outputs: ['onSubmitNewAlbum'],
  template: `
  <div class="album-form">
    <h3>Create Album:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
  <button (click)="addAlbum(newDescription)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewAlbumComponent {
  public onSubmitNewAlbum: EventEmitter<String>;
  constructor(){
    this.onSubmitNewAlbum = new EventEmitter();
  }
  addAlbum(userDescription: HTMLInputElement){
    this.onSubmitNewAlbum.emit(userDescription.value);
    userDescription.value = "";
  }
}
