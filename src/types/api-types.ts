import { User } from "./types";

export interface CustomError {
  status: number;
  data: {
    message: string;
    success: boolean;
  };
}

export type MessageResponse = {
  success: boolean;
  message: string;
};

export type UserResponse = {
  success: boolean;
  user: User;
};
