import Dexie, { Table } from "dexie";

export interface Favorite {
  id?: number;
  videoId: string;
  title: string;
  thumbnail :string;
}

export class MySubClassedDexie extends Dexie {
  favorites!: Table<Favorite>;

  constructor() {
    super("ytvueapp");
    this.version(1).stores({
      favorites: "++id,videoId,title,thumbnail", // Primary key and indexed props
    });
  }

  async insert(videoId: string, title: string, thumbnail :string) {
    try {
      await this.favorites.add({ videoId, title, thumbnail });
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

