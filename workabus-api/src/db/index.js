import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbString = process.env.DATABASE_URL;
export const dbConnect = () => {
  mongoose.connection.once("open", () => console.log("DB connection"));
  return mongoose.connect(
    `${dbString}?retryWrites=true&w=majority`,
    { keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );
};