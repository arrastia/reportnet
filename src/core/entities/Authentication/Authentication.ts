export interface Authentication {
  groups: string[];
  refreshToken: string;
  roles: string[];
  token: string;
  tokenExpiration: number;
  userId: string;
  username: string;
}

export class Authentication {
  constructor({ groups, refreshToken, roles, token, tokenExpiration, userId, username }: Authentication) {
    this.groups = groups;
    this.refreshToken = refreshToken;
    this.roles = roles;
    this.token = token;
    this.tokenExpiration = tokenExpiration;
    this.userId = userId;
    this.username = username;
  }
}
