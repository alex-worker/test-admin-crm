import "reflect-metadata";
import {ConnectionOptions, createConnection} from "typeorm";
import {User} from "./entity/User";

const options: ConnectionOptions = {
   type: "sqlite",
   database: "./data/line.sqlite",
   synchronize: true,
   logging: true,
   entities: [
      "src/entity/**/*.ts"
   ],
   migrations: [
      "src/migration/**/*.ts"
   ],
   subscribers: [
      "src/subscriber/**/*.ts"
   ],
   cli: {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}

export const databaseInitializer = async () => {

   return await createConnection(options)

}
