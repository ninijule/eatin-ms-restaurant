import Article from "../../repositories/article";
import DeleteArticleRequest from "../../types/requests/article/deleteArticleRequest";

export default async (request: DeleteArticleRequest) => {
    return await Article.findByIdAndDelete(request.id);
};