import Category from "../../repositories/category";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";
import DeleteCategoryRequest from "../../types/requests/category/deleteCategoryRequest";

export default async (request: DeleteCategoryRequest) => {
    const category = Category.findById(request.id);
    if (request.profileId != category.restaurantId) {
        throw new NotAuthorizedError();
    }
    await category.delete();
}