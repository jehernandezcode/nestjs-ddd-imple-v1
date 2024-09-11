export class CreateUserDtoRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleId: string;
}

export class UpdateUserDtoRequest extends CreateUserDtoRequest {}
