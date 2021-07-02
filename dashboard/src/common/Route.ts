interface IRoute {
  Name: string | undefined;
  Path: string | undefined;
}

class Route implements IRoute {
  Name: string | undefined;
  Path: string | undefined;

  constructor(Name: string | undefined, Path: string | undefined) {
    this.Name = Name;
    this.Path = Path;
  }
}

export { IRoute, Route };
