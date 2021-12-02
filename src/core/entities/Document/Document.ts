export interface Document {
  category: string | null;
  date: Date;
  description: string;
  id: number;
  isPublic: boolean;
  language: string;
  size: number;
  title?: string;
}

export class Document {
  constructor({ category, date, description, id, isPublic, language, size, title }: Document) {
    this.category = category;
    this.date = date;
    this.description = description;
    this.id = id;
    this.isPublic = isPublic;
    this.language = language;
    this.size = size;
    this.title = title;
  }
}
