interface IEntry {
  Id: number;
  API: string;
  Description: string;
  Auth: string;
  Link: string;
  Https: boolean;
  Cors: string;
  Category: string;
}

class Entry implements IEntry {
  Id: number;
  API: string;
  Description: string;
  Auth: string;
  Link: string;
  Https: boolean;
  Cors: string;
  Category: string;


  constructor(
    Id: number,
    api: string,
    description: string,
    auth: string,
    link: string,
    https: boolean,
    cors: string,
    category: string
  ) {
    this.Id = Id;
    this.API = api;
    this.Auth = auth;
    this.Description = description;
    this.Link = link;
    this.Https = https;
    this.Cors = cors;
    this.Category = category;
  }
}

export { IEntry, Entry };
