import Article from "../../repositories/article";
import CreateArticleRequest from "../../types/requests/article/createArticleRequest";

export default async (request: CreateArticleRequest) => {
    return await Article.create(request);
};