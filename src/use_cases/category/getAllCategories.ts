import Category from "../../repositories/category";
import Restaurant from "../../repositories/restaurant";
import ResourceNotFoundError from "../../types/errors/resourceNotFoundError";
import GetAllCategoriesRequest from "../../types/requests/category/getAllCategoriesRequest";

export default async (request: GetAllCategoriesRequest) => {
  const restaurant = await Restaurant.findById(request.restaurantId);
  if (!restaurant) {
    throw new ResourceNotFoundError("Restaurant");
  }
  return await Category.find({ restaurantId: request.restaurantId });
};
