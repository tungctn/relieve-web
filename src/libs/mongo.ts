import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";
interface CustomGlobal {
  mongoose: {
    conn: null | typeof import("mongoose");
    promise: null | Promise<typeof import("mongoose")>;
    bufferCommands: boolean;
  };
}
declare const global: CustomGlobal;

const MONGODB_URI =
  "mongodb+srv://tung2002:tung2002@cluster0.psjr4nb.mongodb.net/";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
    bufferCommands: false,
  };
}

async function connectToDatabase() {
  // if (cached.conn) {
  //   return cached.conn;
  // }

  // if (!cached.promise) {
  //   const opts = {
  //     bufferCommands: false,
  //   };

  //   cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
  //     console.log("Connected to MongoDB");
  //     return mongoose;
  //   });
  // }
  // cached.conn = await cached.promise;
  // return cached.conn;
  return mongoose.connect(MONGODB_URI);
}
// export default connectToDatabase;
// connectToDatabase();

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    } as ConnectOptions);
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
