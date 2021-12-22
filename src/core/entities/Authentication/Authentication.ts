export interface Authentication {
  authToken: string;
  groups: string[];
  refreshToken: string;
  roles: string[];
  tokenExpiration: number;
  userId: string;
  username: string;
}

export class Authentication {
  constructor({ authToken, groups, refreshToken, roles, tokenExpiration, userId, username }: Authentication) {
    this.authToken = authToken;
    this.groups = groups;
    this.refreshToken = refreshToken;
    this.roles = roles;
    this.tokenExpiration = tokenExpiration;
    this.userId = userId;
    this.username = username;
  }
}
