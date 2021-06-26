import Restaurant from "../../repositories/restaurant";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";
import DeleteRestaurantRequest from "../../types/requests/restaurant/deleteRestaurantRequest";

export default async (request: DeleteRestaurantRequest) => {
    const restaurant = await Restaurant.findById(request.id);
    if (request.profileId != restaurant.profileId) {
        throw new NotAuthorizedError();
    }
    await restaurant.delete();

};