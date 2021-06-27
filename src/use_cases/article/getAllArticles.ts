import Article from "../../repositories/article";
import GetAllArticlesRequest from "../../types/requests/article/getAllArticlesRequest";

export default async (request: GetAllArticlesRequest) => {
  return await Article.find({ restaurantId: request.id });
};
