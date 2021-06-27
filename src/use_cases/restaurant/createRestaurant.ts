import Restaurant from "../../repositories/restaurant";
import CreateRestaurantRequest from "../../types/requests/restaurant/createRestaurantRequest";

export default async (request: CreateRestaurantRequest) => {
  const restaurant = await Restaurant.find({ profileId: request.profileId });
  if (restaurant) {
    throw new Error("Profile already has a restaurant.");
  }
  return await Restaurant.create(request);
};
