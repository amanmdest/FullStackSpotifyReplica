import { MongoClient } from "mongodb";

const URI = "mongodb+srv://amanmdest:zJGoMgTgVJ1ZbhYh@spotifyhashtag.ag1kk.mongodb.net/?retryWrites=true&w=majority&appName=spotifyHashtag";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// console.log(db);

const songsCollection = await db.collection('songs').find({}).toArray();
// console.log(songsCollection);