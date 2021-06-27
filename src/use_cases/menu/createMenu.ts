import Category from "../../repositories/category";
import Menu from "../../repositories/menu";
import Restaurant from "../../repositories/restaurant";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";
import CreateMenuRequest from "../../types/requests/menu/createMenuRequest";

export default async (request: CreateMenuRequest) => {
  const restaurant = await Restaurant.findById(request.restaurantId);

  if (!restaurant) {
    throw new Error("Restaurant not found");
  }

  if (request.profileId != restaurant.profileId) {
    throw new NotAuthorizedError();
  }

  request.categories.forEach(async (category) => {
    if (!(await Category.findById(category))) {
      throw new Error("Category not found");
    }
  });

  return await Menu.create(request);
};
