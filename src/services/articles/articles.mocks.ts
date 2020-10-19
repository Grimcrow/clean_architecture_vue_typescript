import { IArticlesServiceMock } from "./articles.types";

export const mockArticlesService = (): IArticlesServiceMock => ({
  getAll: jest.fn(),
  getOneBId: jest.fn(),
  createComment: jest.fn()
});
