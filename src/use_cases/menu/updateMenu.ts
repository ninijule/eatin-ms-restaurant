import Category from "../../repositories/category";
import Menu from "../../repositories/menu";
import Restaurant from "../../repositories/restaurant";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";
import ResourceNotFoundError from "../../types/errors/resourceNotFoundError";
import UpdateMenuRequest from "../../types/requests/menu/updateMenuRequest";

export default async (request: UpdateMenuRequest) => {
  const menu = await Menu.findById(request.id);
  const restaurant = await Restaurant.findById(menu.restaurantId);

  if (!restaurant) {
    throw new ResourceNotFoundError("Restaurant");
  }

  if (request.profileId != restaurant.profileId) {
    throw new NotAuthorizedError();
  }

  request.categories.forEach(async (category) => {
    if (!(await Category.findById(category))) {
      throw new ResourceNotFoundError("Category");
    }
  });

  menu.restaurantId = request.restaurantId;
  menu.name = request.name;
  menu.description = request.description;
  menu.price = request.price;
  menu.profilePicture = request.profilePicture;
  menu.categories = request.categories;
  await menu.save();
};
