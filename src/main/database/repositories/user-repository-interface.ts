export interface UserRepositoryInterface {
  HaveUsers(): Promise<boolean>
  RegisterUser(username: string, password: string): Promise<void>
  CheckUsername(username: string): Promise<boolean>
}
