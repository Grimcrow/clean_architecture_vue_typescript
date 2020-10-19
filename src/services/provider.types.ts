import { IArticlesService, IArticlesServiceMock } from "./articles";

export interface IProvider {
  article: IArticlesService;
}

export interface IProviderMock {
  articles: IArticlesServiceMock;
}
