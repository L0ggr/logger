import { DateOnlyDataType, Optional } from "sequelize";

export interface UserAttributes {
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  password: String;
  createAt: Date;
  updatedAt: Date;
}

export interface UserCreationAttributes
  extends Optional<UserAttributes, "id", "password"> {}
