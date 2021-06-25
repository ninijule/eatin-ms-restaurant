import Restaurant from "../../repositories/restaurant";
import CreateRestaurantRequest from "../../types/requests/restaurant/createRestaurantRequest";

export default async (request: CreateRestaurantRequest) => {
    return await Restaurant.create(request);
};