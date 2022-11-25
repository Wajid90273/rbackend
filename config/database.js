import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGOURI = `mongodb+srv://user:iq9jym8hYZUghpgl@cluster0.kuokilw.mongodb.net/examPortalDb?retryWrites=true&w=majority`;

  const { connection } = await mongoose.connect(MONGOURI);
  console.log(`Mongodb is connected with ${connection.host}`);
};
