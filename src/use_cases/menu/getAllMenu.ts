import Menu from "../../repositories/menu";
import Restaurant from "../../repositories/restaurant";
import ResourceNotFoundError from "../../types/errors/resourceNotFoundError";
import GetAllMenuRequest from "../../types/requests/menu/getAllMenuRequest";

export default async (request: GetAllMenuRequest) => {
  const restaurant = await Restaurant.findById(request.restaurantId);

  if (!restaurant) {
    throw new ResourceNotFoundError("Restaurant");
  }
  return await Menu.find({ restaurantId: request.restaurantId });
};
