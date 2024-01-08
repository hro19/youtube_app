import Dexie, { Table } from "dexie";

export interface Favorite {
  id?: number;
  name: string;
  age: number;
}

export class MySubClassedDexie extends Dexie {
  favorites!: Table<Favorite>;

  constructor() {
    super("ytvueapp");
    this.version(1).stores({
      favorites: "++id, name, age", // Primary key and indexed props
    });
  }

  async insert(name: string, age: number) {
    try {
      await this.favorites.add({ name: name, age: age });
    } catch (e) {
      console.error(e);
    }
  }

  async getsAll() {
    return await this.favorites.toArray();
  }

  async eliminate(id:number) {
    this.favorites.delete(id);
  }
}

export const dbFavorites = new MySubClassedDexie();

