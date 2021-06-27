import Category from "../../repositories/category";
import Restaurant from "../../repositories/restaurant";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";
import DeleteCategoryRequest from "../../types/requests/category/deleteCategoryRequest";

export default async (request: DeleteCategoryRequest) => {
    const category = Category.findById(request.id);
    const restaurant = Restaurant.findById(category.restaurantId);
    if (request.profileId != restaurant.profileId) {
        throw new NotAuthorizedError();
    }
    await category.delete();
}