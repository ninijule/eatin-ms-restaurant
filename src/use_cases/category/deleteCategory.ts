import Category from "../../repositories/category";
import Restaurant from "../../repositories/restaurant";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";
import ResourceNotFoundError from "../../types/errors/resourceNotFoundError";
import DeleteCategoryRequest from "../../types/requests/category/deleteCategoryRequest";

export default async (request: DeleteCategoryRequest) => {
  const category = await Category.findById(request.id);
  const restaurant = await Restaurant.findById(category.restaurantId);

  if (!restaurant) {
    throw new ResourceNotFoundError("Restaurant");
  }

  if (request.profileId != restaurant.profileId) {
    throw new NotAuthorizedError();
  }
  await category.delete();
};
