export interface AuthenticationController {
  accessToken: string;
  accessTokenExpiration: number;
  groups: string[];
  preferredUsername: string;
  refreshToken: string;
  roles: string[];
  userId: string;
}
