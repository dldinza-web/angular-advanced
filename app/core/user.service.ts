import { Injectable, Optional } from '@angular/core';

export class UserServiceConfig {
  userName = 'Philip Marlowe';
}

@Injectable()
export class UserService {
  private _userName = 'Sherlok Holmes';

  constructor(@Optional() config: UserServiceConfig) {
    if (config) {
      this._userName = config.userName;
    }
  }

  get userName() {
    return this._userName;
  }
}
