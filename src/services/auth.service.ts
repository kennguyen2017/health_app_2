import { serviceOptions } from "./serviceOptions";
export interface LoginRequestDto {
  username: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
}

export class AuthService {
  static login(data: LoginRequestDto) {
    return serviceOptions.axios
      .post<LoginResponse>("/login", data)
      .then((res) => res.data);
  }
}
