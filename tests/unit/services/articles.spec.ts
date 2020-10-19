import {
  mockComments,
  mockArticles,
  mockArticlesData
} from "../../../src/entities";
import { ArticlesService } from "../../../src/services";

describe(">>> Article Service", () => {
  const service = new ArticlesService(mockArticlesData());

  describe(">> getMany", () => {
    it("should return all data", () => {
      expect(service.getAll()).toEqual(mockArticlesData());
    });
  });

  describe(">> getOneById", () => {
    it("should return one article by providing id", () => {
      const article = mockArticles()[1];
      const id = article.id as number;
      expect(service.getOneById(id)).toEqual(article);
    });

    it("should return undefined if no article found", () => {
      expect(service.getOneById(1111)).toBeUndefined();
    });
  });

  describe(">> CreateComment", () => {
    const data = mockComments()[0];

    it("should add new commen to provide article and return it", () => {
      const article = mockArticles()[0];
      const id = article.id as number;
      const commentsAmount = article.comments.length;

      const newArticle = service.createComment(id, data);
      expect(newArticle.id).toEqual(article.id);
      expect(newArticle.comments.length).toBe(commentsAmount + 1);
    });

    it("should thow an error if article wit provided id doen't exist", () => {
      expect(() => {
        service.createComment(111, data);
      }).toThrow();
    });

    it("should thow an error if comment is not valid", () => {
      const data = {
        ...mockComments()[0],
        title: ""
      };
      expect(() => {
        service.createComment(1, data);
      }).toThrow();
    });
  });
});
