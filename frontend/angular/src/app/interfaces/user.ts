export interface User {
  id: string,
  createdAt: Date,
  fullName: string,
  email: string,
  document: string,
  password: string,
  role: string,
  department: string,
  type: "ADM" | "COMMON"
}
