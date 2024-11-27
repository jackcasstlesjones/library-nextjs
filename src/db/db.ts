"use client";

import { addRxPlugin } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { createRxDatabase } from "rxdb";

let database: any = null;

export async function initDatabase() {
  if (database) return database;

  addRxPlugin(RxDBDevModePlugin);

  database = await createRxDatabase({
    name: "mydatabase",
    storage: getRxStorageDexie(),
    ignoreDuplicate: true,
  });

  const todoSchema = {
    version: 0,
    primaryKey: "id",
    type: "object",
    properties: {
      id: {
        type: "string",
        maxLength: 100,
      },
      name: {
        type: "string",
      },
      done: {
        type: "boolean",
      },
      timestamp: {
        type: "string",
        format: "date-time",
      },
    },
    required: ["id", "name", "done", "timestamp"],
  };

  await database.addCollections({
    todos: {
      schema: todoSchema,
    },
  });

  const existingDoc = await database.todos
    .findOne({
      selector: {
        id: "todo1",
      },
    })
    .exec();

  if (!existingDoc) {
    await database.todos.insert({
      id: "todo1",
      name: "Learn RxDB",
      done: false,
      timestamp: new Date().toISOString(),
    });
  }

  // Query all documents
  const allDocs = await database.todos.find().exec();

  console.log("All documents in database:", allDocs);

  return database;
}
