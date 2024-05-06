export interface Event {
  id: number,
  createdAt: Date,
  title: string,
  eventStart: Date,
  eventEnd: Date,
  hostId: string,
  participants: string[]
}
