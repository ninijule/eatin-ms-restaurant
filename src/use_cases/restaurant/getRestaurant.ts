import Restaurant from "../../repositories/restaurant";
import GetRestaurantRequest from "../../types/requests/restaurant/getRestaurantRequest";

export default async (request: GetRestaurantRequest) => {
    try {
        return Restaurant.findById(request.id);
    } catch (error) {

    }
}