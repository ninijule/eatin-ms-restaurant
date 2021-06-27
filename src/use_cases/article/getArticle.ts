import Article from "../../repositories/article";
import Restaurant from "../../repositories/restaurant";
import ResourceNotFoundError from "../../types/errors/resourceNotFoundError";
import GetArticleRequest from "../../types/requests/article/getArticleRequest";

export default async (request: GetArticleRequest) => {
  const restaurant = await Restaurant.findById(request.restaurantId);
  if (!restaurant) {
    throw new ResourceNotFoundError("Restaurant");
  }
  return await Article.findById(request.id);
};
