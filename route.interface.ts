export interface Params {
  url: string | undefined;
  category: string | undefined;
}

export interface RouteInterface {
  key: string;
  name: string;
  params: Params | undefined;
}
