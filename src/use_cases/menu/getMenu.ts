import Menu from "../../repositories/menu";
import Restaurant from "../../repositories/restaurant";
import ResourceNotFoundError from "../../types/errors/resourceNotFoundError";
import GetMenuRequest from "../../types/requests/menu/getMenuRequest";

export default async (request: GetMenuRequest) => {
  const restaurant = await Restaurant.findById(request.restaurantId);
  if (!restaurant) {
    throw new ResourceNotFoundError("Restaurant");
  }
  return await Menu.findById(request.id);
};
