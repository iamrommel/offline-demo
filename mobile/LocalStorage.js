export class LocalStorage {

  constructor({storage}) {
    //this should be default to SQLite storage, with simple implementation like async storage
    this.storage = storage || null

  }

}
