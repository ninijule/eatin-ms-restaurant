import Category from "../../repositories/category";
import Restaurant from "../../repositories/restaurant";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";
import CreateCategoryRequest from "../../types/requests/category/createCategoryRequest";

export default async (request: CreateCategoryRequest) => {
  const restaurant = await Restaurant.findById(request.restaurantId);

  if (!restaurant) {
    throw new Error("Restaurant not found");
  }

  if (request.profileId != restaurant.profileId) {
    throw new NotAuthorizedError();
  }
  return await Category.create(request);
};
