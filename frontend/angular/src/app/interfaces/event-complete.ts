import { User } from "./user";

export interface EventComplete {
  id: string,
  createdAt: Date,
  title: string,
  eventStart: Date,
  eventEnd: Date,
  host: User,
  participants: User[] 
}
