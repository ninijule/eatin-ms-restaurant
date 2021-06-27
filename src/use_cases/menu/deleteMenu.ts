import Menu from "../../repositories/menu";
import Restaurant from "../../repositories/restaurant";
import DeleteMenuRequest from "../../types/requests/menu/deleteMenuRequest";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";

export default async (request: DeleteMenuRequest) => {
  const menu = await Menu.findById(request.id);
  const restaurant = await Restaurant.findById(menu.restaurantId);

  if (!restaurant) {
    throw new Error("Restaurant not found");
  }

  if (request.profileId != restaurant.profileId) {
    throw new NotAuthorizedError();
  }
  await menu.delete();
};
