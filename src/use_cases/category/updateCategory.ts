import Category from "../../repositories/category";
import Restaurant from "../../repositories/restaurant";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";
import UpdateCategoryRequest from "../../types/requests/category/updateCategoryRequest";

export default async (request: UpdateCategoryRequest) => {
    const category = Category.findById(request.id);
    const restaurant = Restaurant.findById(category.restaurantId);
    if (request.profileId != restaurant.profileId) {
        throw new NotAuthorizedError();
    }

    category.name = request.name;
    await category.save();


}