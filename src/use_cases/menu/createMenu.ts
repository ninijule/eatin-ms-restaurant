import Menu from "../../repositories/menu";
import Restaurant from "../../repositories/restaurant";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";
import CreateMenuRequest from "../../types/requests/menu/createMenuRequest";

export default async (request: CreateMenuRequest) => {
  const restaurant = await Restaurant.findById(request.restaurantId);
  if (request.profileId != restaurant.profileId) {
    throw new NotAuthorizedError();
  }
  return await Menu.create(request);
};
