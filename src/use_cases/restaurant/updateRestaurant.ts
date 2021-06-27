import Restaurant from "../../repositories/restaurant";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";
import UpdateRestaurantRequest from "../../types/requests/restaurant/updateRestaurantRequest";

export default async (request: UpdateRestaurantRequest) => {
  const restaurant = await Restaurant.findById(request.id);

  if (!restaurant) {
    throw new Error("Restaurant not found");
  }

  if (request.profileId != restaurant.profileId) {
    throw new NotAuthorizedError();
  }

  restaurant.name = request.name;
  restaurant.description = request.description;
  restaurant.profilePicture = request.profilePicture;
  await restaurant.save();
};
