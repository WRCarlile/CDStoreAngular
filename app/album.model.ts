export class Album {
  public purchased: boolean = false;
  constructor(public name: string, public artist: string, public genre: string, public price: number = 0, public id: number) {

  }
}
