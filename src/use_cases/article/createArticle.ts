import Article from "../../repositories/article";
import Restaurant from "../../repositories/restaurant";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";
import CreateArticleRequest from "../../types/requests/article/createArticleRequest";

export default async (request: CreateArticleRequest) => {
  const restaurant = await Restaurant.findById(request.restaurantId);
  if (request.profileId != restaurant.profileId) {
    throw new NotAuthorizedError();
  }
  return await Article.create(request);
};
