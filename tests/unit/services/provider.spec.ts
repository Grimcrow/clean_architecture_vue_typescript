import { provider, ArticlesService } from "../../../src/services";

jest.mock("../../../src/services/articles/articles");
describe(">> Provider", () => {
  it("should instantiate Articles Service", () => {
    provider();
    expect(ArticlesService.prototype.constructor).toBeCalled();
  });
});
