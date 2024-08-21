export class CreateUserDtoRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

export class UpdateUserDtoRequest extends CreateUserDtoRequest {}
