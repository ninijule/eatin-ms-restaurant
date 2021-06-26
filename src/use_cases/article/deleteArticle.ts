import Article from "../../repositories/article";
import Restaurant from "../../repositories/restaurant";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";
import DeleteArticleRequest from "../../types/requests/article/deleteArticleRequest";

export default async (request: DeleteArticleRequest) => {
    const article = await Article.findById(request.id);
    const restaurant = await Restaurant.findById(article.restaurantId);
    if (request.profileId != restaurant.profileId) {
        throw new NotAuthorizedError();
    }

    await article.delete();

};