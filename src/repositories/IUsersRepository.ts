import { type User } from '../entities/User'

export interface IUsersRepository {
  findById: (userId: string) => Promise<User | null>
  findByEmail: (email: string) => Promise<User | null>
  findToAuth: (email: string) => Promise<User | null>
  create: (user: User) => Promise<User>
}
