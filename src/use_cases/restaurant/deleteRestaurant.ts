import Restaurant from "../../repositories/restaurant";
import DeleteRestaurantRequest from "../../types/requests/restaurant/deleteRestaurantRequest";

export default async (request: DeleteRestaurantRequest) => {
    await Restaurant.findByIdAndDelete(request.id);
};