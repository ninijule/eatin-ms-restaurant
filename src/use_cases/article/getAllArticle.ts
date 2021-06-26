import Article from "../../repositories/article";
import GetAllArticleRequest from "../../types/requests/article/getAllArticleRequest";

export default async (request: GetAllArticleRequest) => {
    return await Article.find({ "restaurantId": request.id });
};