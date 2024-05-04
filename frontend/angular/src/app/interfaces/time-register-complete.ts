import { User } from "./user";

export interface TimeRegisterComplete {
  id: string,
  createdAt: string,
  clockIn: string,
  clockOut: string,
  user: User
}
