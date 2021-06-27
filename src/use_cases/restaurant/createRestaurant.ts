import Restaurant from "../../repositories/restaurant";
import ResourceAlreadyExistsError from "../../types/errors/resourceAlreadyExistsError";
import CreateRestaurantRequest from "../../types/requests/restaurant/createRestaurantRequest";

export default async (request: CreateRestaurantRequest) => {
  const restaurant = await Restaurant.findOne({ profileId: request.profileId });
  if (restaurant) {
    throw new ResourceAlreadyExistsError("Profile already has a restaurant.");
  }
  return await Restaurant.create(request);
};
