import { connect, Schema, model } from "mongoose";
import { User, UserSettings } from "@types";

export const DatabaseInit = async () => {
  try {
    await connect("mongodb://localhost:27017/test");
    console.log("Connection Mongo: OK.");
  } catch (err) {
    throw new Error("Unable to connect to the database: " + err);
  }
};

// Mongoose models
// TODO(Ecy): Add typing to the rest of the models
const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userSettings: Object,
  createdAt: Date,
  updatedAt: Date,
});
export const UserModel = model<User>("User", UserSchema);

const ProjectSchema = new Schema({
  name: String,
  createdAt: Date,
  updatedAt: Date,
});
export const ProjectModel = model("Project", ProjectSchema);

const LogSchema = new Schema({
  projectID: String, // Note(Ecy): Probably has a ObjectId type from mongoose
  createdAt: Date,
  updatedAt: Date,
});
export const LogModel = model("Log", LogSchema);

const TicketSchema = new Schema({
  projectID: String, // Note(Ecy): same as in Log
  createdAt: Date,
  updatedAt: Date,
});
export const TicketModel = model("Ticket", TicketSchema);
