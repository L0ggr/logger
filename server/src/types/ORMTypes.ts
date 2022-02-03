import { DateOnlyDataType, Optional } from "sequelize";

export interface User {
  name: string;
  email: string;
  password: string;
  userSettings: UserSettings;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSettings {
  exampleNotification: boolean;
}

export interface Project {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}