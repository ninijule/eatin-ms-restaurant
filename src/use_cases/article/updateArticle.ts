import Article from "../../repositories/article";
import UpdateArticleRequest from "../../types/requests/article/updateArticleRequest";

export default async (request: UpdateArticleRequest) => {
    const article = await Article.findById(request.id);
    article.name = request.name,
        article.description = request.description,
        article.price = request.price,
        article.profilePicture = request.profilePicture,
        article.category = request.category
    article.save();

}