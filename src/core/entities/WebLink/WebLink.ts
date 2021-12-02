export interface WebLink {
  description: string;
  id: number;
  isPublic: boolean;
  url: string;
}

export class WebLink {
  constructor({ description, id, isPublic, url }: WebLink) {
    this.description = description;
    this.id = id;
    this.isPublic = isPublic;
    this.url = url;
  }
}
