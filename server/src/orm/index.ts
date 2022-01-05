import { Sequelize, DataTypes, ModelDefined } from "sequelize";
import { UserAttributes, UserCreationAttributes } from "@types";
// import { Collection, MongoClient, MongoDBNamespace } from "mongodb";

// const mongo = new MongoClient(process.env.DB_MONGO_URL!);
// const db = mongo.db(process.env.DB_MONGO_DATABASE);

// Note: decomment either new Sequelize for SQLITE3 or POSTGRESQL Client
// Use SQLITE in memory
// const sequelize = new Sequelize("sqlite::memory:");
// Use PostgreSQL
const sequelize = new Sequelize({
  host: process.env.DB_POSTGRES_HOST!,
  database: process.env.DB_POSTGRES_DATABASE!,
  username: process.env.DB_POSTGRES_USERNAME!,
  password: process.env.DB_POSTGRES_PASSWORD!,
  dialect: "postgres",
});

export const DatabaseInit = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection Postgres: OK.");
    // Note: not in production
    await sequelize.sync({ force: true });
    console.log("Database synched.");

    // await mongo.connect();
    // console.log("Connection Mongo: OK.");
  } catch (err) {
    throw new Error("Unable to connect to the database: " + err);
  }
};

export const UserModel: ModelDefined<UserAttributes, UserCreationAttributes> =
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: DataTypes.STRING,
    },
    {
      createdAt: true,
      updatedAt: true,
    }
  );
