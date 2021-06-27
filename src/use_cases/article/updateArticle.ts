import Article from "../../repositories/article";
import Restaurant from "../../repositories/restaurant";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";
import UpdateArticleRequest from "../../types/requests/article/updateArticleRequest";

export default async (request: UpdateArticleRequest) => {
  const article = await Article.findById(request.id);
  const restaurant = await Restaurant.findById(article.restaurantId);

  if (!restaurant) {
    throw new Error("Restaurant not found");
  }

  if (request.profileId != restaurant.profileId) {
    throw new NotAuthorizedError();
  }

  (article.name = request.name),
    (article.description = request.description),
    (article.price = request.price),
    (article.profilePicture = request.profilePicture),
    (article.category = request.category);
  await article.save();
};
