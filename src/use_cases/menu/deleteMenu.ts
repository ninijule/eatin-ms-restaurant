import Menu from "../../repositories/menu";
import Restaurant from "../../repositories/restaurant";
import DeleteMenuRequest from "../../types/requests/menu/deleteMenuRequest";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";
import ResourceNotFoundError from "../../types/errors/resourceNotFoundError";

export default async (request: DeleteMenuRequest) => {
  const menu = await Menu.findById(request.id);
  const restaurant = await Restaurant.findById(menu.restaurantId);

  if (!restaurant) {
    throw new ResourceNotFoundError("Restaurant");
  }

  if (request.profileId != restaurant.profileId) {
    throw new NotAuthorizedError();
  }
  await menu.delete();
};
