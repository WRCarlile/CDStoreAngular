export class Album {
  public purchased: boolean = false;
  private price: number = 9.99;
  constructor(public name: string, public artist: string, public genre: string, public id: number) {

  }
}
