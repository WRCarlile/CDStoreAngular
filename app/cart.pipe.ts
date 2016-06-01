import {Pipe, PipeTransform} from 'angular2/core';
import {Album} from './album.model';

@Pipe({
  name: "purchased",
  pure: false
})

export class CartPipe implements PipeTransform {
  transform(input: Album[], args) {
    console.log('selected album: ', args[1]);
    var desiredCart = args[0];
    if(desiredCart === "purchased") {
      return input.filter((album) => {
        return album.purchased;
      });
    } else if (desiredCart === "notPurchased") {
      return input.filter((album) => {
        return !album.purchased;
      });
    } else {
      return input;
    }
  }
}
