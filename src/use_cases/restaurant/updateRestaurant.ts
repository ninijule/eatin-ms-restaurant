import Restaurant from "../../repositories/restaurant";
import UpdateRestaurantRequest from "../../types/requests/restaurant/updateRestaurantRequest";

export default async (request: UpdateRestaurantRequest) => {
    const restaurant = await Restaurant.findById(request.id);
    restaurant.name = request.name;
    restaurant.description = request.description;
    restaurant.profilePicture = request.profilePicture;
    restaurant.save();
}