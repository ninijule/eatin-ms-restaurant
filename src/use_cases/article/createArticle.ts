import Article from "../../repositories/article";
import Category from "../../repositories/category";
import Restaurant from "../../repositories/restaurant";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";
import CreateArticleRequest from "../../types/requests/article/createArticleRequest";

export default async (request: CreateArticleRequest) => {
  const restaurant = await Restaurant.findById(request.restaurantId);

  if (!restaurant) {
    throw new Error("Restaurant not found");
  }

  if (request.profileId != restaurant.profileId) {
    throw new NotAuthorizedError();
  }
  const category = await Category.findById(request.category);
  if (!category) {
    throw new Error("Category not found.");
  }
  return await Article.create(request);
};
