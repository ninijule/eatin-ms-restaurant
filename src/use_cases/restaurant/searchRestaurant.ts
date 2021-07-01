import Restaurant from "../../repositories/restaurant";
import SearchRestaurantRequest from "../../types/requests/restaurant/searchRestaurantRequest";

export default async (request: SearchRestaurantRequest) => {
  return await Restaurant.findOne(request);
};
