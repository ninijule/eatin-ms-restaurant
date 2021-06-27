import Category from "../../repositories/category";
import Restaurant from "../../repositories/restaurant";
import ResourceNotFoundError from "../../types/errors/resourceNotFoundError";
import GetCategoryRequest from "../../types/requests/category/getCategoryRequest";

export default async (request: GetCategoryRequest) => {
  const restaurant = await Restaurant.findById(request.restaurantId);
  if (!restaurant) {
    throw new ResourceNotFoundError("Restaurant");
  }
  return await Category.findById(request.id);
};
