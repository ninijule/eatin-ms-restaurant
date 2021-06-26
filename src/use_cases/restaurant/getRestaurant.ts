import Restaurant from "../../repositories/restaurant";
import GetRestaurantRequest from "../../types/requests/restaurant/getRestaurantRequest";

export default async (request: GetRestaurantRequest) => {
    return await Restaurant.findById(request.id);
}