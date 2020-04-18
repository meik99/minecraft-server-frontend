export class ModEntry {
  private _name;
  private _link;
  private _author;


  constructor(args?: {name?: string, link?: string, author?: string}) {
    if (args) {
      if (args.name) {
        this.name = args.name;
      }
      if (args.link) {
        this.link = args.link;
      }
      if (args.author) {
        this.author = args.author;
      }
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get link() {
    return this._link;
  }

  set link(value) {
    this._link = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    this._author = value;
  }
}
