import Article from "../../repositories/article";
import GetArticleRequest from "../../types/requests/article/getArticleRequest";

export default async (request: GetArticleRequest) => {
    return await Article.findById(request.id);
};