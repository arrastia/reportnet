export interface User {
  id: string;
  name: string;
  surname: string;
  photo: string;
}

export class User {
  constructor({ id, name, photo, surname }: User) {
    this.id = id;
    this.name = name;
    this.photo = photo;
    this.surname = surname;
  }
}
