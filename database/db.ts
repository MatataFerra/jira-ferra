import mongoose, { ConnectOptions } from "mongoose";

/*
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongoConnection = {
  isConnected: 0,
};

const options: ConnectOptions = {
  dbName: "jiradb",
};

export const connect = async () => {
  if (mongoConnection.isConnected === 1) {
    console.log("MongoDB is already connected");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === 1) {
      console.log("MongoDB is already connected");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL!, options);
  mongoConnection.isConnected = 1;
  console.log("MongoDB is connected");
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === "development") return;

  if (mongoConnection.isConnected === 0) {
    console.log("MongoDB is connected");
    return;
  }

  await mongoose.disconnect();
  mongoConnection.isConnected = 0;
  console.log("MongoDB is disconnected");
};
