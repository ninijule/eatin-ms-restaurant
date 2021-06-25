import Restaurant from "../../repositories/restaurant";
import DeleteRestaurantRequest from "../../types/requests/restaurant/deleteRestaurantRequest";

export default async (request: DeleteRestaurantRequest) => {
    try {
        await Restaurant.findByIdAndDelete(request.id);
        return true;
    } catch (error) {
        return false;
    }

};