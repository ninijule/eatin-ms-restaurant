import Category from "../../repositories/category";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";
import UpdateCategoryRequest from "../../types/requests/category/updateCategoryRequest";

export default async (request: UpdateCategoryRequest) => {
    const category = Category.findById(request.id);
    if (category.restaurantId != request.profileId) {
        throw new NotAuthorizedError();
    }

    category.name = request.name;
    await category.save();


}