import { DateOnlyDataType, Optional } from "sequelize";

export interface User {
  name: string;
  email: string;
  password: string;
  userSettings: UserSettings;
}

export interface UserSettings {
  exampleNotification: boolean;
}

export interface Project {
  name: string;
  userID: any; // TODO: need to come back and specify type
}

export interface Ticket {
  projectID: any; // TODO: need to come back and specify type
  name: string;
}

export interface Log {
  projectID: any; // TODO: need to come back and specify type
  name: string;
}
