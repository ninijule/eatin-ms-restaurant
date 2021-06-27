import Article from "../../repositories/article";
import Restaurant from "../../repositories/restaurant";
import ResourceNotFoundError from "../../types/errors/resourceNotFoundError";
import GetAllArticlesRequest from "../../types/requests/article/getAllArticlesRequest";

export default async (request: GetAllArticlesRequest) => {
  const restaurant = await Restaurant.findById(request.restaurantId);
  if (!restaurant) {
    throw new ResourceNotFoundError("Restaurant");
  }
  return await Article.find({ restaurantId: request.restaurantId });
};
